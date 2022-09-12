import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Checkbox, Button } from 'antd';
import './index.less';

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async () => {
    const values = await form.validateFields();
    console.log('Success:', values);
    navigate('/home');
  };
  return (
    <div className='login'>
      <div className='login-left'>
        <div className='login-left-content'>
          <div className='login-left-content-img'></div>
          <div className='login-left-content-title'>{appInfo.title}</div>
          <div className='login-left-content-description'>输入您的个人详细信息开始使用！</div>
        </div>
      </div>
      <div className='login-right'>
        <div className='login-right-form'>
          <div className='login-right-form-title'>登录</div>
          <Form name='login' onFinish={onFinish} autoComplete='off' form={form}>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: '请输入账号',
                },
              ]}>
              <Input placeholder='账号' size='large' style={{ width: 400 }} />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: '请输入账号',
                },
              ]}>
              <Input.Password placeholder='密码' size='large' style={{ width: 400 }} />
            </Form.Item>

            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <Button type='primary' htmlType='submit' block size='large'>
              登录
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
