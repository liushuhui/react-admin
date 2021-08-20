import React, { useEffect } from 'react';
import { Form, Input, Button, message, Select} from 'antd';
import { addArticle } from '../../../api';
import { useHistory } from 'react-router-dom';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

export default () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const submit = async(data) => {
    try {
      const res = await addArticle(data);
      if (res.code === 200) {
        message.success('发布成功');
        history.push('/juejin/detail');
      }
      
    } catch (error) {
      message.error(error);
    }
  }
  return (
    <Form form={form} style={{ margin: '20px' }}
      name='publishForm'
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={val => submit(val)}
    >
      <FormItem label='标题' name='title' rules={[{ required: true, message: '请输入标题!' }]}>
        <Input />
      </FormItem>
      <FormItem label='分类' name='classify' rules={[{ required: true, message: '请选择分类!' }]}>
        <Select>
          <Option value="前端">前端</Option>
          <Option value="后端">后端</Option>
          <Option value="Java">Java</Option>
        </Select>
      </FormItem>
      <FormItem label='文章' name='article' rules={[{ required: true, message: '文章内容不能为空!' }]}>
        <TextArea allowClear autoSize={{minRows: 4}} showCount/>
      </FormItem>
      <FormItem wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>
          确定
        </Button>
        <Button type="default" onClick={() => { history.push('/home') }}>
          返回
        </Button>
      </FormItem>
    </Form>
  )
}