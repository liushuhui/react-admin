import React, {useEffect, useState} from 'react';
import { reqGetMenu } from '../../api';
import {Table, Pagination } from 'antd';

export default () => {
  const [tableData, setTableData] = useState([]);
  // 表格列配置
  const columns = [
    {
      title: '菜单',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '路径',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '图标',
      dataIndex: 'icon',
      key: 'icon',
    },
  ];

  // 分页配置
  const paginationObj = {
    showSizeChanger: true,
    showTotal: (total) =>  `总共有 ${total} 条数据`,
  }
  const getMenuList = async () => {
    const result = await reqGetMenu();
    if (result.code === 0) {
      console.log('tableData', result.data);
      setTableData(result.data);
    } else {
      message.error(result.error);
    }
  }
  useEffect(() => {
    getMenuList();
  }, []);
  return (
    <>
      <Table columns = {columns} 
             dataSource = {tableData}
             pagination = {paginationObj}/>
             {/* <Pagination defaultCurrent={1} total={50} /> */}
    </>
  )
}