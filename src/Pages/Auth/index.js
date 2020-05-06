import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import './index.css';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    color: {}
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const Auth = (props) => {
    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className="auth">
            <Form
            {...layout}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
                <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message:"请输入您的用户名"}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                label="密码"
                name="password"
                rules={[{required: true, message:"请输入您的密码"}]}>
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{marginLeft:"35%"}}>
                        登录
                    </Button>
                    <Button type="primary" htmlType="submit" >
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Auth;