/*
 * @Description:
 * @Version:
 * @Author: linjinzhi
 * @Date: 2020-10-27 16:06:21
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-18 16:29:19
 */
import React from 'react';
import Collapse from 'rc-collapse';
import classnames from 'classnames/bind';
import 'rc-collapse/assets/index.css';

import styles from './index.module.less';

const cx = classnames.bind(styles);
const Panel = Collapse.Panel;

const data = {
  'Alert': {
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
  return (
    <section className={cx('design-panel')}>
      <div className={cx('design-panel-collapse')}>
        <Collapse accordion={true}>
          <Panel header="基本元素" headerClass="my-header-class">
            {Object.keys(data).map(item => (
              <div id={item}>{item}</div>
            ))}
          </Panel>
        </Collapse>
      </div>
      <div className={cx('design-panel-content')}></div>
    </section>
  );
};

export default DesignWidget;
