import React from 'react';
import classnames from 'classnames/bind';
import DesignIcon from '@assets/icons/design.png';

import styles from './index.module.less';

const cx = classnames.bind(styles);

const ClassicLayout: React.FC = props => {
  return (
    <section className={cx('classic-layout')}>
      <div className={cx('classic-layout-menu')}>
        <div>
          <img alt="design" src={DesignIcon}/>
          <p>Design</p>
        </div>
        <div>
          <img alt="workflow" src={DesignIcon}/>
          <p>WorkFlow</p>
        </div>
        <div>
          <img alt="data" src={DesignIcon}/>
          <p>Data</p>
        </div>
      </div>
      <div className={cx('classic-layout-content')}>
        {props.children}
      </div>
    </section>
  );
};

export default ClassicLayout;