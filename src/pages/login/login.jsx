import React from 'react';
import './index';
import logo from '../../assets/images/logo.png'
export default () => {
  return (
    <div className='login'>
      <header className='login_header'>
        <img src={logo} alt="logo" />
        <h1>react-admin: 后台管理系统1</h1>
      </header>
    </div>
  )
}