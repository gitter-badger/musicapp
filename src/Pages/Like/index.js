import React from 'react';
import './index.css';
import { Button } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';

const Like = () => {
    return (
        <div className="like">
            <h2>我喜欢的音乐</h2>
            <Button type="primary" shape="circle" icon={<PlayCircleFilled/>}></Button>
            <hr />
            
        </div>
    )
}

export default Like;