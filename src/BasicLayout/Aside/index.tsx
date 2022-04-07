import React from 'react';
import {  Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';
import { asideData } from '../../router/aside';

const { SubMenu } = Menu;

export function Aside(){
  
  const hash = window.location.hash.split('#')[1]
  const defaultSelectedKeys = hash.split('?')[0]

  const jumpLink = (url)=>{
    //接口拦截器
    if (window?.cancelAjax) {//当路由切换页面的时候，遍历全局数组，将上一个页面的所有请求cancel掉
      window.cancelAjax.map((ele) => {
        ele();
      });
    }
    window.cancelAjax = [];
    return url
  }

  //二级栏（因不清楚需求参数，any）
  const mapNav = (child:any):any  =>{
    return(
      child.map((obj:any)=>{
        return(
        <Menu.Item key={obj.url}>
          <Link  to={()=>jumpLink(obj.url)} >
          {obj.item}
          </Link>
        </Menu.Item>
       )
      })
    )
  }
  //一级栏（因不清楚需求参数，any）
  const mapAside= ():any =>{
    return(
      asideData.map((obj)=>{
        if(obj.child!==null){
          return(
            <SubMenu
              key={obj.url}
              title={
                <span>{obj.menu}</span>
              }
            >
              {mapNav(obj.child)}
            </SubMenu>
          )
        }else{
          return(
            <Menu.Item key={obj.url}>
            <span>{obj.menu}</span>
            <Link  to={()=>jumpLink(obj.url)} ></Link>
            </Menu.Item>
          )
        }
      })
    )
  }

    
  return (
    <div className='aside'>
      <div className='logo'>
        <span>后台管理</span>
      </div>
    <Menu
      defaultSelectedKeys={[defaultSelectedKeys]}
      mode="inline"
      theme="dark"
    >
      {mapAside()}
    </Menu>
  </div>
  )

}

export default Aside;