import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { reqGetMenu } from '../../api';
import { message, Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
import './index.less'
const { SubMenu } = Menu;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_329085_4eg5x6pst8w.js',
});
const LeftNav = (props) => {
  const [menuList, setMenulist] = useState([]);
  const pathname = props.location.pathname;
  const openKey = pathname.match(/^\/\w+/g);
  const dispatch = useDispatch();
  // 获取菜单
  const getMenuList = async () => {
    const result = await reqGetMenu();
    if (result.code === 0) {
      setMenulist(result.data);
      dispatch({type: 'SET_MENU', payload: result.data});
    } else {
      message.error(result.error);
    }
  }
  // 动态生成菜单
  const getMenuNodes = (menu) => {
    return menu.reduce((total, item) => {
      if (item.children && item.children.length > 0) {
        total.push(
          (
            <SubMenu
              key={item.key}
              title={
                <>
                  <IconFont type={item.icon} />
                  <span>{item.title}</span>
                </>
              }
            >
              {getMenuNodes(item.children)}
            </SubMenu>
          )
        )
      } else {
        total.push(
          (
            <Menu.Item key={item.key}>
              <Link to={item.key} style={{ textDecoration: "none" }}>
                <IconFont type={item.icon} />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          )
        );
        return total;
      }
      return total;
    }, [])
  }
  useEffect(() => {
    getMenuList();
    getMenuNodes(menuList);
  }, [])
  return (
    <div className='left-nav'>
      <Link to='/' className="left-nav-header">
        <img src={logo} alt="logo"/>
        <h1>react-admin</h1>
      </Link>
      <Menu
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={openKey}
        mode="inline"
        theme="dark">
        {getMenuNodes(menuList)}
      </Menu>
    </div>
  )
}
export default withRouter(LeftNav);