import ajax from './ajax';
// import {message} from 'antd';

export const reqLogin =  (username, password) => ajax('/login', {username, password}, 'POST');
