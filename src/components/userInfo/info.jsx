import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';
import { Form, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import 'antd/es/modal/style';
import 'antd/es/slider/style';

const FormItem = Form.Item;

export default (props) => {
  // const history = useHistory();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([{url: props.location.state.imgUrl}]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  
  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  }

  return (
    <Form form={form} style={{ margin: '20px' }}
      name='editForm'
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={val => update(val)}
    >
      <FormItem label='头像' name='avatar'>
        <ImgCrop rotate>
          <Upload
            maxCount = {1}
            action="http://localhost:7001/uploadImg"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            上传头像
          </Upload>
        </ImgCrop>
      </FormItem>
      <FormItem wrapperCol={{ offset: 8, span: 16 }}>
        {/* <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>
          确定
        </Button> 
        <Button type="default" onClick={() => { history.push('/home') }}>
          返回主页
        </Button> */}
      </FormItem>
    </Form>
  )
}