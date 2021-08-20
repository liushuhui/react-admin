import React, { useState } from 'react';
import { Tooltip, Comment, Avatar, Form, Button, List, Input, message } from 'antd';
import { useSelector } from 'react-redux';
import { addComment } from '../../../api';
import dateFormat from '../../../utils/dateFormat';

const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        提交
      </Button>
    </Form.Item>
  </>
);
export default (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const {img} = useSelector(state => state);
  const [comments, setComments] = useState([]);
  const handleSubmit = async() => {
    try {
      if (!value) return;
      setSubmitting(true);
      const res = await addComment({user:props.username, content: value, articleId: props.articleId});
      if (res.code === 200) {
        setSubmitting(false);
        setValue('');
        setShow(false);
        const {author, content, datetime} = res.data;
        setComments(...[{author, content, datetime: dateFormat(datetime)}])
      }
    } catch (error) {
      message.error(error)
    }
    
  }
  const handleChange = e => {
    setValue(e.target.value)
  }
  const showComment = () => {
    setShow(show => !show)
  }
  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <span style={{ fontSize: '12px', color: '#00000073', cursor: 'pointer' }}
        onClick={showComment} >评论</span>
      {show &&
      <Comment
        avatar={
          <Avatar
            src={img}
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />}
    </>
  )
}