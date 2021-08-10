import React from 'react';
import { useDispatch } from 'react-redux';
import './index.less';
import logo from '@src/assets/images/logo.png';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { reqLogin } from '../../api';


const FormItem = Form.Item;
export default (props) => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const {username, password} = values;
    const result = await reqLogin(username, password);
    if (result?.code === 0) {
      message.success('登录成功');
      localStorage.setItem('token', result.token);
      dispatch({type: 'SET_USERNAME', payload: result.data});
      props.history.replace('/');
    } else {
      message.error(result?.message);
    }
  }
  return (
    <div className='login'>
      <header className='login_header'>
        <img src={logo} alt="logo" />
        <h1>react-admin后台管理系统</h1>
      </header>
      <section className='login_content'>
        <h2>用户登陆</h2>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <FormItem
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input placeholder='请输入用户名'/>
          </FormItem>

          <FormItem
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password placeholder='请输入密码'/>
          </FormItem>
          <FormItem name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>记住登录</Checkbox>
        </FormItem>

          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
        </Form>
      </section>
    </div>
  )
}