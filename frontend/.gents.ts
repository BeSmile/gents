/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-01-19 13:59:20
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-19 17:16:00
 */
var path = require("path");

module.exports = {
  alias: {
    '@src': path.resolve(__dirname, '.', "src"),
    '@layouts': path.resolve(__dirname, '.', "src", 'layouts'),
    '@pages': path.resolve(__dirname, '.', 'src', "pages"),
    '@components': path.resolve(__dirname, '.', 'src', "components"),
    '@hooks': path.resolve(__dirname, '.', 'src', "hooks"),
    '@services': path.resolve(__dirname, '.', 'src', "services"),
    '@assets': path.resolve(__dirname, ".", "src", "assets"),
    '@atom': path.resolve(__dirname, '.', 'src', "atom"),
    '@utils': path.resolve(__dirname, '.', 'src', "utils"),
    '@models': path.resolve(__dirname, '.', 'src', "models"),
    '@public': path.resolve(__dirname, '.', "public"),
  },
  theme: {
    "@primary-color": "#00BFFF",
    "@theme-color": "#F2F2F2",
    "@white-color": "#ffffff",
    "@grey-color": "#F6F6F6",
    "@black-color": "#222",
    "@border-grey-color": "#9999",
    "@font-md-size": "14px",
    "@font-sm-size": "12px",
    "@padding-sm-size": "6px",
    "@padding-md-size": "10px",
    "@padding-lg-size": "12px",
  },
};