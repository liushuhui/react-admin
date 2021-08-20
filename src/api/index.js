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
// 获取当前行菜单数据接口
export const reqGetMenuDetail = (_id, parentId, level, title, childId) => ajax('/getMenuDetail', {_id, parentId, level,title, childId});
// 修改菜单提交接口
export const updateMenu = ({...data}) => ajax('/updateMenu', data, 'POST');
//获取图片
export const getImg = () => ajax('/getImg');
// 写文章，提交接口
export const addArticle = ({...data}) => ajax('/addArticle',data, 'POST');
// 获取文章
export const getArticle = () => ajax('/getArticle');
// 评论
export const addComment = ({...data}) => ajax('/addComment', data, 'POST')


