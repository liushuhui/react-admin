import React, { useEffect, useState } from 'react';
import { reqGetMenu } from '../../api';
import { Table, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import './index.less'
export default () => {
  const history = useHistory();
  const [tableData, setTableData] = useState([]);
  // 表格列配置
  const columns = [
    {
      title: '菜单',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
    },
    {
      title: '路径',
      dataIndex: 'key',
      key: 'key',
      align: 'center'
    },
    {
      title: '图标',
      dataIndex: 'icon',
      key: 'icon',
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      align: 'center',
      render: (text, record) => (
        <>
          <Button type='primary' size='small' className='table_btn' onClick={() => editFn(record)} >编辑</Button>
          <Button danger type='primary' size='small' className='table_btn'>删除</Button>
        </>
      )
    }
  ];
  // 编辑
  const editFn = (val) => {
    const {_id, index, level, parentId, title, childId} = val
    history.push({pathname: `/home/edit/${_id}/${index}/${level}/${parentId}/${title}/${childId}`});
  }
  // 分页配置
  const paginationObj = {
    showSizeChanger: true,
    showTotal: (total) => `总共有 ${total} 条数据`,
  }
  const getMenuList = async () => {
    const result = await reqGetMenu();
    if (result.code === 0) {
      result.data.forEach(item => {
        item.children.length > 0 ? item : item.children = null;
        return item;
      })
      setTableData(result.data);
    } else {
      message.error(result.error);
    }
  }
  useEffect(() => {
    getMenuList();
  }, []);
  return (
    <div className='home'>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={paginationObj}
        bordered />
    </div>
  )
}