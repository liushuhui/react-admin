import ajax from './ajax';
// import {message} from 'antd';
// 获取天气
export const getWeather = () => ajax('https://restapi.amap.com/v3/weather/weatherInfo', {
  city: 510100,
  key: '7643af4d54f441a88a37a3307be2fff0'
});
// 登录
export const reqLogin =  (username, password) => ajax('/login', {username, password}, 'POST');
// 获取菜单
export const reqGetMenu = () => ajax('/getmenu');

