import React, {lazy,Suspense } from 'react';
import { Layout } from 'antd';
import {Redirect, Route, Switch} from 'react-router-dom';
import LeftNav from '@components/left-nav/left-nav';
import Header from '@components/header/header';

const Home = lazy(() => import('@components/home/home'));
const MenuEdit = lazy(() => import('@components/home/edit'));
const UserInfo =lazy(() => import('@components/userInfo/info'));
const Detail = lazy(() => import('@pages/juejin/detail'));
const Publish = lazy(() => import('@pages/juejin/publish'));
const Role = lazy(() => import('@pages/role/role'));
const User = lazy(() => import('@pages/user/user'));
const Bar = lazy(() => import('@pages/charts/bar/bar'));
const Line = lazy(() => import('@pages/charts/line/line'));
const Pie = lazy(() => import('@pages/charts/pie/pie'));
const Order = lazy(() => import('@pages/order/order'));
const NotFound = lazy(() => import('@pages/not-fund'));
const { Sider, Content } = Layout;

export default () => {
  const maxHeight = innerHeight - 120;
  // console.log('maxHeight',maxHeight);
  return (
    <Layout  style={{minHeight: '100%'}}>
      <Sider>
        <LeftNav/>
      </Sider>
      <Layout>
       <Header className="layout-header"/>
       <Content style={{margin: 20,overflow: 'auto', backgroundColor: '#fff',height: `${maxHeight}px`}}>
       <Suspense fallback={<div>Loading</div>}>
         <Switch>
          <Redirect exact from='/' to='/login'/>
          <Route exact path='/home' component={Home}/>
          <Route path='/home/edit/:_id/:index/:level/:parentId/:title/:childId' component={MenuEdit}/>
          <Route path='/userInfo' component={UserInfo}/>
          <Route path='/juejin/detail' component={Detail}/>
          <Route path='/juejin/publish' component={Publish}/>
          <Route path='/role' component={Role}/>
          <Route path='/user' component={User}/>
          <Route path='/charts/bar' component={Bar}/>
          <Route path='/charts/line' component={Line}/>
          <Route path='/charts/pie' component={Pie}/>
          <Route path='/order' component={Order}/>
          <Route component={NotFound}/>
         </Switch>
        </Suspense>
       </Content>
      </Layout>
    </Layout>
  )
}