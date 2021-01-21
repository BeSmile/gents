/*
 * @Description:
 * @Version:
 * @Author: linjinzhi
 * @Date: 2020-10-27 16:06:21
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-20 16:54:02
 */
import React, { useLayoutEffect, useState } from 'react';
import Collapse from 'rc-collapse';
import classnames from 'classnames/bind';
import 'rc-collapse/assets/index.css';
import MenuJunior from './components/MenuJunior';
import DesignContext from './components/DesignContext';
import styles from './index.module.less';
// var Validator = require('jsonschema').Validator;
const cx = classnames.bind(styles);
const Panel = Collapse.Panel;

const data = {
  'Alert': {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'element',
    properties: {
      // 元素的id
      key: {
        type: 'string',
      },
      // 当前元素的名称
      name: {
        type: 'string',
      },
      // 默认填写
      placeholder: {
        type: 'string',
      },
      // 当前的样式
      style: { type: 'object' },
      // 当前样式的枚举类型
      style_enum_list: { type: 'array', },
      // 宽高
      size: {
        type: "object",
        properties: {
          w: { type: 'number', },
          h: { type: 'number', },
        }
      },
      // position尺寸
      position: {
        type: "object",
        properties: {
          x: { type: 'number', },
          y: { type: 'number', },
        }
      }
    },
  },
  'Button': {
    $id: 'element',
    properties: {
      // 元素的id
      key: {
        type: 'string',
      },
      // 当前元素的名称
      name: {
        type: 'string',
      },
      // 默认填写
      placeholder: {
        type: 'string',
      },
      // 当前的样式
      style: { type: { type: 'string' }, },
      // 当前样式的枚举类型
      style_enum_list: { type: 'array', },
      // 宽高
      size: {
        type: "object",
        properties: {
          w: { type: 'number', },
          h: { type: 'number', },
        }
      },
      // position尺寸
      position: {
        type: "object",
        properties: {
          x: { type: 'number', },
          y: { type: 'number', },
        }
      }
    },
  },
}

// var v = new Validator();
// var instance = {
//   key: '1',
//   name: '弹窗',
//   placeholder: "输入",
//   style: {
//     a: '1',
//   },
//   style_enum_list: [],
//   size: {
//     w: 10,
//     h: 10,
//   },
//   position: {
//     x: 10,
//     y: 11,
//   }

// };
// console.log(v.validate(instance, data.Alert), 'dd');

// const json = {
//   $schema: 'http://json-schema.org/draft-07/schema#',
  
//   definitions: {
//     // 动效实例
//     transitions: {
//       $id: '#transitions',
//       properties: {
//         name: { type: 'string' },
//         duration: { type: 'number' },
//         transition_fn: { type: 'string', enum: [
//           "Ease-in", "Ease-out", "Ease-in-out", "Linear","Step-start", "Step-end"
//         ] },
//       },
//     },
//     element: {
//       $id: 'element',
//       properties: {
//         // 元素的id
//         key: {
//           type: 'string',
//         },
//         // 当前元素的名称
//         name: {
//           type: 'string',
//         },
//         // 默认填写
//         placeholder: {
//           type: 'string',
//         },
//         // 当前的样式
//         style: { type: { type: 'string' }, },
//         // 当前样式的枚举类型
//         style_enum_list: { type: 'array', },
//         // 宽高
//         size: {
//           type: "object",
//           properties: {
//             w: { type: 'number', },
//             h: { type: 'number', },
//           }
//         },
//         // position尺寸
//         position: {
//           type: "object",
//           properties: {
//             x: { type: 'number', },
//             y: { type: 'number', },
//           }
//         }
//       },
//     },
//     visual_elements: {

//     },
//     address: {
//       $id: '#address',
//       type: 'object',
//       properties: {
//         street_address: { type: 'string' },
//         city: { type: 'string' },
//         state: { type: 'string' },
//       },
//       required: ['street_address', 'city', 'state'],
//     },
//   },
//   type: 'object',
//   properties: {
//     billing_address: { $ref: '#address' },
//     shipping_address: { $ref: '#address' },
//   },
// };



const DesignWidget: React.FC = props => {
  const handleCreateElement = (values: any) => {
    console.log('dd', values);
    
  }
  

  const [menuKey, setMenuKey] = useState<string>('');

  const handleGlobalClick = () => {
    setMenuKey('');
  }
  const handleContextMenu = () => {};
  useLayoutEffect(() => {
    window.addEventListener('click', handleGlobalClick, false);
    window.addEventListener('contextmenu', handleContextMenu)
    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('contextmenu', handleContextMenu);
    }
  }, []);

  return (
    <DesignContext.Provider value={{
      handleCreateElement,
    }}>
      <section className={cx('design-panel')}>
        <div className={cx('design-panel-collapse')}>
          <Collapse activeKey="base" accordion={true} className={cx('design-panel-collapse-container')}>
            <Panel header="基本元素" key="base" headerClass="design-panel-collapse-header-class">
              {Object.keys(data).map(item => (
                <div onClick={() => setMenuKey(item)} className={cx('design-panel-collapse-item')} key={item} id={item}>
                  <MenuJunior activeKey={menuKey} onContextMenu={(key: string) => setMenuKey(key)}>
                    {item}
                  </MenuJunior>
                </div>
              ))}
            </Panel>
          </Collapse>
        </div>
        <div className={cx('design-panel-content')}>
          
        </div>
        <div className={cx('design-panel-properties')}>

        </div>
      </section>
    </DesignContext.Provider>
    
  );
};

export default DesignWidget;
