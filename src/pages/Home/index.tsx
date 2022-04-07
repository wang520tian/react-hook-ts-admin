import React, { useState, useEffect } from 'react';
import request from "../../utils/request";
import { Button } from 'antd';
import './index.scss';

const Home: React.FC = () => {

  // const [isDisable]=useState(true);
  useEffect(() => {
    request('/httpServer/homeData', {
      method: "get",
      param: {}
    }).then((res: any) => {
    }).catch((err: any) => {
    })
  });

  return (
    <div className="Home">
      <Button type="primary">你好</Button>
      <div className='all'>The Bay</div>
    </div>
  );
}

export default Home;
