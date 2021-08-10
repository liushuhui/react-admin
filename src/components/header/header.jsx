import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formateDate } from '../../utils/dateUtils';
import { withRouter } from 'react-router-dom';
import './index.less';
import { getWeather } from '../../api';
const Header = (props) => {
  const [currentTime, setCurrentTime] = useState(formateDate(Date.now()));
  const [intervalId, setIntervalId] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [title, setTitle] = useState();
  const pathname = props.location.pathname;
  const {username, menuList} = useSelector(state => state);
  const getWeatherInfo = async() => {
    const res = await getWeather();
    const reslut = res.lives[0];
    setWeather(reslut.weather);
    setCity(reslut.city);
  }
  //更新最新时间
  const getTime = () => {
    setIntervalId(setInterval(() => {
      const time = formateDate(Date.now())
      setCurrentTime(time);
    }, 1000))
  }
  // 获取当前菜单名
  const getTitle = () => {
    menuList.forEach(item => { 
      // debugger;
      if (item.children.length > 0) {
        const cItem = item.children.find(im => pathname.indexOf(im.key) === 0);
        if (cItem) {
          setTitle(cItem.title);
        }
      } else if(item.key === pathname) {
        setTitle(item.title)
      }
    });
  }
  useEffect(() => {
    getTime();
    getWeatherInfo();
    return () => {
      clearInterval(intervalId)
    }
  }, []);
  useEffect(() => {
    getTitle();
  }, [pathname]);
  return (
    <div className='header'>
      <div className='header-top'>
        <span>欢迎, {username.username}</span>
      </div>
      <div className='header-bottom'>
        <div className="header-bottom-left">{title}</div>
        <div className="header-bottom-right">
          <span>{currentTime}</span>
          <span>{city}</span>
          <span>{weather}</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header);