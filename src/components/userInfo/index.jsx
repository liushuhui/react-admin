import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import {DownOutlined} from '@ant-design/icons';

export default (props) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login')
  }
  const linkToInfo = () => {
    history.push({pathname: '/userInfo',state: {imgUrl: props.imgUrl}})
  }
  const selectUi =  (
    <Menu>
      <Menu.Item key='info' onClick={linkToInfo}>
        <span>个人中心</span>
      </Menu.Item>
      <Menu.Item key='logout'onClick={logout}>
        <span>退出</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={selectUi}>
      <a onClick={e => e.preventDefault()}>
        用户中心
        <DownOutlined />
      </a>
    </Dropdown>
  )
}