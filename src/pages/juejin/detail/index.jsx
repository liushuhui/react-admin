import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { getArticle } from '../../../api';
import { useSelector } from 'react-redux';
import AddComment from './addComment';
import './index.less';
import dateFormat from '../../../utils/dateFormat';
export default () => {
  const [article, setArticle] = useState([]);
  const {username} = useSelector(state => state);
  const getArticleDetail = async () => {
    const res = await getArticle();
    if (res.code === 200) {
      setArticle(res.data);
    }
  }
  const props = {
    username: username.username,
  }
  useEffect(() => {
    getArticleDetail(); 
  }, [])

  return (
    <>
      {
        article.map((item) => {
          return (
            <div className='detail' key={item._id}>
              <div className='detail_top'>
                <span>{username.username}</span><span className="fenge"></span>
                <span>{dateFormat(item.dateTime)}</span><span className="fenge"></span>
                <span>{item.classify}</span>
              </div>
              <div className='detail_content'>
                <p className="title">{item.title}</p>
                <p className="content">{item.article}</p>
              </div>
              {<AddComment {...props} articleId = {item._id} getArticleDetail={getArticleDetail}/>}
              <Divider />
            </div>
          )
        })
      }
    </>

  )
}