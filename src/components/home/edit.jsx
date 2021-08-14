import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, message, Select} from 'antd';
import { reqGetMenuDetail, updateMenu } from "../../api";
import { useDispatch } from 'react-redux';

const FormItem = Form.Item;
const { Option } = Select;
export default (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {_id, index, level, parentId, title, childId} = props.location.state;
  const [form] = Form.useForm();
  const getMenuDetail = async() => {
    const res = await reqGetMenuDetail(_id, parentId, level, title, childId);
    res?.code === 0 ? res.data instanceof Array && res.data[0].children[0].level == 2 
                    ? form.setFieldsValue({...res?.data[0].children[0]}) 
                    : form.setFieldsValue({...res?.data}) : message.error(res?.data);
  }
  const update = async(data) => {
    data = data.level == 1 ? {...data, _id} : {...data, parentId, index, childId};
    console.log('data',data);
    const res = await updateMenu(data);
    if(res.code === 0) {
      dispatch({type: 'UPDATE_MENU', payload: {data, index}});
      message.success(res.message);
      history.push('/home');
    }
  }
  useEffect(() => {
    getMenuDetail();
  }, []);
  return (
    <Form form={form} style={{ margin: '20px' }}
      name='editForm'
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={val => update(val)}
      >
      <FormItem label='菜单名' name='title'>
        <Input/>
      </FormItem>
      <FormItem label='菜单级别' name='level'>
        <Select>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
        </Select>
      </FormItem>
      <FormItem label='路径' name='key'>
        <Input />
      </FormItem>
      <FormItem label='图标' name='icon'>
        <Input />
      </FormItem>
      <FormItem wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{marginRight:'20px'}}>
          确定
        </Button>
        <Button type="default" onClick={() => {history.push('/home')}}>
          返回
        </Button>
      </FormItem>
    </Form>
  )
}