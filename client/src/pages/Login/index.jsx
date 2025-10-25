// Importing the necessary libraries and components
import React, { useEffect } from "react";
import { Form, message, Input, Button, Card, Typography, Divider, Checkbox } from "antd";
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone, LoginOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, GetCurrentUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

const { Title, Text } = Typography;

// Defining the 'Login' functional component
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await LoginUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);

        // Check if user is admin and redirect accordingly
        const userResponse = await GetCurrentUser();
        if (userResponse.success && userResponse.data.isAdmin) {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `
        linear-gradient(135deg, rgba(0,0,0,0.7), rgba(102, 126, 234, 0.4)),
        url("https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      padding: '20px'
    }}>
      {/* Floating movie elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        fontSize: '32px',
        opacity: 0.8,
        animation: 'float 3s ease-in-out infinite'
      }}>🎥</div>
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '8%',
        fontSize: '28px',
        opacity: 0.7,
        animation: 'float 4s ease-in-out infinite reverse'
      }}>🌟</div>
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '8%',
        fontSize: '24px',
        opacity: 0.6,
        animation: 'float 5s ease-in-out infinite'
      }}>🎪</div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '12%',
        fontSize: '30px',
        opacity: 0.7,
        animation: 'float 3.5s ease-in-out infinite reverse'
      }}>🎯</div>

      {/* Theater seats pattern at bottom */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '60px',
        opacity: 0.3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end'
      }}>
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            width: '8px',
            height: '20px',
            background: '#ff4757',
            margin: '0 2px',
            borderRadius: '4px 4px 0 0'
          }}></div>
        ))}
      </div>

      {/* Centered Login Form */}
      <div style={{ width: '100%', maxWidth: '800px', zIndex: 10 }}>
        <Card
          style={{
            borderRadius: '20px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
            border: 'none',
            padding: '40px',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              fontSize: '64px',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              🎬
            </div>
            <Title level={1} style={{ margin: 0, color: '#1a1a1a', fontSize: '32px' }}>
              BookMyMovie
            </Title>
            <Text style={{ fontSize: '16px', color: '#666', display: 'block', marginTop: '8px' }}>
              Welcome Back! Sign in to continue your cinematic journey
            </Text>
          </div>

          {/* Login Form */}
          <Form layout="horizontal" onFinish={onFinish} size="large" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: 'email', message: "Please enter a valid email!" }
                ]}
                style={{ flex: 1, marginBottom: 0 }}
              >
                <Input
                  prefix={<UserOutlined style={{ color: '#667eea' }} />}
                  placeholder="Enter your email address"
                  style={{ borderRadius: '12px', padding: '14px', fontSize: '16px' }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                  { min: 6, message: "Password must be at least 6 characters!" }
                ]}
                style={{ flex: 1, marginBottom: 0 }}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#667eea' }} />}
                  placeholder="Enter your password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  style={{ borderRadius: '12px', padding: '14px', fontSize: '16px' }}
                />
              </Form.Item>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '20px',
              padding: '12px 16px',
              background: 'rgba(102, 126, 234, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(102, 126, 234, 0.1)'
            }}>
              <Form.Item name="remember" valuePropName="checked" style={{ margin: 0 }}>
                <Checkbox style={{ fontSize: '14px', color: '#666' }}>
                  🔒 Remember me for 30 days
                </Checkbox>
              </Form.Item>
              <Link 
                to="/forgot-password" 
                style={{ 
                  color: '#667eea', 
                  fontSize: '14px', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                🔑 Forgot Password?
              </Link>
            </div>

            <Form.Item style={{ marginBottom: '20px' }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                icon={<LoginOutlined />}
                style={{
                  height: '52px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                Sign In to BookMyMovie
              </Button>
            </Form.Item>

            {/* Quick Login Options */}
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '16px',
              padding: '12px',
              background: 'rgba(102, 126, 234, 0.05)',
              borderRadius: '8px',
              border: '1px dashed rgba(102, 126, 234, 0.2)'
            }}>
              <Text style={{ fontSize: '13px', color: '#667eea', fontWeight: '500' }}>
                🚀 Quick Test Login
              </Text>
              <div style={{ marginTop: '6px' }}>
                <Text style={{ fontSize: '12px', color: '#666' }}>
                  Admin: admin@example.com • User: user@example.com
                </Text>
              </div>
            </div>

            <Divider style={{ margin: '20px 0' }}>
              <Text type="secondary">New to BookMyMovie?</Text>
            </Divider>

            <div style={{ textAlign: 'center' }}>
              <Text>
                Don't have an account?{' '}
                <Link
                  to="/register"
                  style={{
                    color: '#667eea',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '16px'
                  }}
                >
                  Create Account →
                </Link>
              </Text>
            </div>
          </Form>

          {/* Demo Credentials */}
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: 'rgba(248,249,250,0.8)',
            borderRadius: '12px',
            border: '1px solid rgba(233,236,239,0.8)'
          }}>
            <Text strong style={{ display: 'block', marginBottom: '8px', color: '#495057' }}>
              🎭 Demo Credentials:
            </Text>
            <Text style={{ display: 'block', fontSize: '13px', color: '#6c757d' }}>
              <strong>Admin:</strong> admin@example.com / password123
            </Text>
            <Text style={{ display: 'block', fontSize: '13px', color: '#6c757d' }}>
              <strong>User:</strong> user@example.com / password123
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;