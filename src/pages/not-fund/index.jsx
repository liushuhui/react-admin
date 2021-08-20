import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Row, Col} from 'antd';
import './index.less';

export default () => {
  const history = useHistory();
  return (
    <Row className='not-found'>
        <Col span={12} className='left'></Col>
        <Col span={12} className='right'>
          <h1>404</h1>
          <h2>抱歉，你访问的页面不存在</h2>
          <div>
            <Button type='primary' onClick={() => history.replace('/home')}>
              回到首页
            </Button>
          </div>
        </Col>
      </Row>
  )
}