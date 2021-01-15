import React from 'react';

const rows = [{ name: 1, value: 770 },
{ name: 2, value: 2424 },
{ name: 3, value: 5518 },
{ name: 4, value: 9987 },
{ name: 5, value: 18425 },
{ name: 6, value: 29511 },
{ name: 7, value: 44575 },
{ name: 8, value: 64308 },
{ name: 9, value: 89418 },
{ name: 10, value: 120629 },
{ name: 11, value: 158682 },
{ name: 12, value: 204329 },
{ name: 13, value: 258335 },
{ name: 14, value: 321479 },
{ name: 15, value: 394549 },
{ name: 16, value: 478343 },
{ name: 17, value: 573673 },
{ name: 18, value: 681356 },
{ name: 19, value: 802220 },
{ name: 20, value: 937103 },
{ name: 21, value: 1086849 },
{ name: 22, value: 1252312 },
{ name: 23, value: 1434353 },
{ name: 24, value: 1633841 },
{ name: 25, value: 1851652 },
{ name: 26, value: 2088668 },
{ name: 27, value: 2345780 },
{ name: 28, value: 2623884 },
{ name: 29, value: 2923882 },
{ name: 30, value: 3246684 },
{ name: 31, value: 3593205 },
{ name: 32, value: 3961176 },
{ name: 33, value: 4351377 },
{ name: 34, value: 4764592 },
{ name: 35, value: 5201606 },
{ name: 36, value: 5663211 },
{ name: 37, value: 6150201 },
{ name: 38, value: 6663374 },
{ name: 39, value: 7203529 },
{ name: 40, value: 7771473 },
{ name: 41, value: 8372590 },
{ name: 42, value: 9007856 },
{ name: 43, value: 9678246 },
{ name: 44, value: 10384745 },
{ name: 45, value: 11128339 },
{ name: 46, value: 11910019 },
{ name: 47, value: 12730782 },
{ name: 48, value: 13591626 },
{ name: 49, value: 14493557 },
{ name: 50, value: 15437582 }];


// 绿孟子→礼记,春秋左传,仪礼,汉书
// 绿楚辞→春秋公羊传,春秋谷梁传,汉书,仪礼
// 绿论语→史记,春秋左传,汉书,春秋谷梁传
// 绿尔雅→后汉书,春秋左传,汉书,春秋谷梁传
// 绿诗经→周礼,仪礼,春秋左传,春秋谷梁传
//
// 蓝春秋谷梁传→孙子兵法,孙膑兵法,兵法二十四篇,便宜十六策
// 蓝礼记→墨子,五禽戏,孟德新书,六韬
// 蓝左转→六韬,孟德新书,五禽戏,墨子
// 蓝春秋左传→六韬,孟德新书,五禽戏,墨子
// 蓝史记→山海经,淮南子,易经,尚书
// 蓝后汉书→兵法二十四篇,墨子,山海经,青囊书
//
// 紫墨子→山海经,青囊书,兵法二十四篇,六韬
// 紫孙子兵法→孟德新书,易经,遁甲天书,六韬
// 紫孙膑兵法→六韬,尚书，太平要术


// 技能数  获得技能 丢1技能   丢2技能
// 1         90%      10%       0
// 2         85%      15%       0
// 3         80%      20%       0
// 4         75%      25%       0
// 5         70%      30%       0
// 6         55%      45%       0
// 7         45%      55%       0
// 8         35%      65%       0
// 9         25%      75%       0
// 10       10%      75%       15%
// 11       5%        65%       30%
// 12       5%        55%       40%
// 13       5%        50%       45%
// 14       5%        45%       50%
// 15       5%        35%       60%
// 16       5%        30%       65%
// 17       5%        25%       70%
// 18       5%        20%       75%
// 19       5%        10%       85%
// 20       5%        5%         90%

console.log(rows);
function ExperienceUI() {
    return (
        <div></div>
    )
}

const Experience = ExperienceUI;

export default Experience;