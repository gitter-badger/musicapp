import React, {Component} from 'react';
import {LeftOutlined, PlayCircleOutlined, RightOutlined, HeartOutlined, UnorderedListOutlined,SettingOutlined, SoundOutlined} from '@ant-design/icons';
import { Row, Col,Progress } from 'antd';
import './index.css'
class Header extends Component {
    render () {
        const icon = {
            fontSize: '20px',
            
        }
        return (
            <div className="header">
            {/* <Row>
                <Col lg={5} id="icons-left">
                    <LeftOutlined  style={icon}/> 
                    <PlayCircleOutlined style={icon}/>
                    <RightOutlined style={icon}/>
                    
                </Col>
                <Col lg={13} style={{textAlign:"center"}}>
                    <p style={{ display: 'inline'}}>Test Song</p><br/>
                    <p style={{display: 'inline', fontSize: "10px"}}>Test singer</p>
                <Progress
                strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
                }}
                percent={99.9}
                />
                </Col>
                <Col lg={5} id="icons-right">
                    <HeartOutlined style={icon}/>
                    <SoundOutlined style={icon}/>
                    <UnorderedListOutlined style={icon}/>
                    <SettingOutlined style={icon}/>
                </Col>
            </Row> */}
            </div>
        )
    }
}

export default Header;