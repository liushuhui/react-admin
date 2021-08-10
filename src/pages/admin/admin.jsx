import React, {lazy,Suspense } from 'react';
import { Layout } from 'antd';
import {Redirect, Route, Switch} from 'react-router-dom';
import LeftNav from '@components/left-nav/left-nav';

import Header from '@components/header/header';
const Home = lazy(() => import('@components/home/home'));
const Category = lazy(() => import('@pages/goods/category/category'));
const Product = lazy(() => import('@pages/goods/product/product'));
const Role = lazy(() => import('@pages/role/role'));
const User = lazy(() => import('@pages/user/user'));
const Bar = lazy(() => import('@pages/charts/bar/bar'));
const Line = lazy(() => import('@pages/charts/line/line'));
const Pie = lazy(() => import('@pages/charts/pie/pie'));
const Order = lazy(() => import('@pages/order/order'));

const { Footer, Sider, Content } = Layout;

export default () => {
  return (
    <Layout  style={{minHeight: '100%'}}>
      <Sider>
        <LeftNav/>
      </Sider>
      <Layout>
       <Header className="layout-header"/>
       <Content style={{margin: 20, backgroundColor: '#fff'}}>
       <Suspense fallback={<div>Loading</div>}>
         <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route path='/home' component={Home}/>
          <Route path='/goods/category' component={Category}/>
          <Route path='/goods/product' component={Product}/>
          <Route path='/role' component={Role}/>
          <Route path='/user' component={User}/>
          <Route path='/charts/bar' component={Bar}/>
          <Route path='/charts/line' component={Line}/>
          <Route path='/charts/pie' component={Pie}/>
          <Route path='/order' component={Order}/>
          {/* <Route component={NotFound}/>上面没有一个匹配, 直接显示*/}
         </Switch>
        </Suspense>
       </Content>
      </Layout>
    </Layout>
  )
}