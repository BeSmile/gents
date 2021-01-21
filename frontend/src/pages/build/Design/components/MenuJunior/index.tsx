/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2021-01-19 15:39:53
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-20 16:54:28
 */
import React, { createRef, forwardRef, memo, useLayoutEffect, useState, useContext } from "react";
import classnames from 'classnames/bind';
import DesignContext from '../DesignContext';
import useMenuContextMenu from '@hooks/useMenuContextMenu';
import styles from './index.module.less';
const cx = classnames.bind(styles);

interface MenuProps {
  // forwardedRef: React.RefObject<HTMLDivElement>;
  children: React.ReactElement | string | Array<React.ReactElement>;
}

const MenuFC = forwardRef((props: MenuProps, ref: React.RefObject<HTMLDivElement>) => {
  let { children } = props;
  return <div className={cx('menu')} ref={ref}>{children}</div>;
});

interface MenuJuniorProps {
  onContextMenu?: (key: string) => void;// 右键事件
  activeKey: string;
  children: React.ReactElement | string | Array<React.ReactElement>;
}

/**
 * 左侧
 */
const MenuJuniorHC = memo((props: MenuJuniorProps) => {
  const { children, onContextMenu, activeKey } = props;
  const menuRef: {
    current: HTMLDivElement;
  } = createRef();
  const {
    handleCreateElement,
  } = useContext(DesignContext);
  
  const [modal, setModal] = useState(null);
  const useContextMenu = useMenuContextMenu('portal');
  
  // 右键菜单事件
  const handleContextMenu = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const clientX = e.clientX;
    const clientY = e.clientY;
    onContextMenu && onContextMenu(children as string);
    const portal = useContextMenu({
      children: (
        <section className={cx('menu-junior-popup')}>
          <div onClick={() => {
            handleCreateElement('create');
          }}>创建元素</div>
          <div>从节点下创建</div>
        </section>
      ),
      offsetX: clientX,
      offsetY: clientY,
    })
    setModal(portal);
  };

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  useLayoutEffect(() => {
    if (!menuRef.current) return () => {};
    const divRef = menuRef.current;
    divRef.addEventListener("contextmenu", handleContextMenu, false);
    divRef.addEventListener("click", handleClick, true);
    return () => {
      divRef.addEventListener("contextmenu", handleContextMenu);
      divRef.addEventListener("click", handleClick);
    };
  }, [menuRef]);

  return (
    <MenuFC {...props} ref={menuRef}>
      {activeKey === children && modal}
      {children}
    </MenuFC>
  );
});
export default MenuJuniorHC;
