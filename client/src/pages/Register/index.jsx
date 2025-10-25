// Importing the necessary libraries and components
import React, { useEffect } from "react";
import { Form, message, Input, Button, Card, Typography, Divider, Checkbox } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone, UserAddOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

const { Title, Text } = Typography;

// Defining the 'Register' functional component
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        navigate("/");
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
        linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(76, 175, 80, 0.4)),
        url("https://images.unsplash.com/photo-1489599143687-585e645b3e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      padding: '20px'
    }}>
      {/* Floating movie elements */}
      <div style={{
        position: 'absolute',
        top: '8%',
        left: '12%',
        fontSize: '36px',
        opacity: 0.7,
        animation: 'float 3.5s ease-in-out infinite'
      }}>🎭</div>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        fontSize: '32px',
        opacity: 0.8,
        animation: 'float 4.2s ease-in-out infinite reverse'
      }}>🍿</div>
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '6%',
        fontSize: '28px',
        opacity: 0.6,
        animation: 'float 5.1s ease-in-out infinite'
      }}>🎪</div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '8%',
        fontSize: '30px',
        opacity: 0.7,
        animation: 'float 3.8s ease-in-out infinite reverse'
      }}>🌟</div>

      {/* Movie reel decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '5%',
        fontSize: '24px',
        opacity: 0.4,
        animation: 'float 6s ease-in-out infinite'
      }}>🎬</div>

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
        {[...Array(18)].map((_, i) => (
          <div key={i} style={{
            width: '10px',
            height: '24px',
            background: '#4caf50',
            margin: '0 2px',
            borderRadius: '5px 5px 0 0'
          }}></div>
        ))}
      </div>

      {/* Centered Register Form */}
      <div style={{ width: '100%', maxWidth: '900px', zIndex: 10 }}>
        <Card
          style={{
            borderRadius: '20px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
            border: 'none',
            padding: '40px',
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{
              fontSize: '60px',
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              🎬
            </div>
            <Title level={1} style={{ margin: 0, color: '#1a1a1a', fontSize: '30px' }}>
              Join BookMyMovie
            </Title>
            <Text style={{ fontSize: '15px', color: '#666', display: 'block', marginTop: '6px' }}>
              Create your account and start your cinematic adventure!
            </Text>
          </div>

          {/* Registration Form */}
          <Form layout="horizontal" onFinish={onFinish} size="large" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  { required: true, message: "Please enter your full name!" },
                  { min: 2, message: "Name must be at least 2 characters!" }
                ]}
                style={{ flex: 1, marginBottom: 0 }}
              >
                <Input
                  prefix={<UserOutlined style={{ color: '#4caf50' }} />}
                  placeholder="Enter your full name"
                  style={{ borderRadius: '12px', padding: '12px', fontSize: '15px' }}
                />
              </Form.Item>

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
                  prefix={<MailOutlined style={{ color: '#4caf50' }} />}
                  placeholder="Enter your email address"
                  style={{ borderRadius: '12px', padding: '12px', fontSize: '15px' }}
                />
              </Form.Item>
            </div>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 8, message: "Password must be at least 8 characters!" },
                { 
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
                  message: "Password must contain uppercase, lowercase, and number!" 
                }
              ]}
              extra={
                <Text style={{ fontSize: '12px', color: '#666' }}>
                  Password should contain uppercase, lowercase letters and numbers
                </Text>
              }
              style={{ marginBottom: '16px' }}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: '#4caf50' }} />}
                placeholder="Create a strong password (min 8 chars)"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ borderRadius: '12px', padding: '12px', fontSize: '15px' }}
              />
            </Form.Item>

            <div style={{ display: 'flex', gap: '24px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <Form.Item
                name="isAdmin"
                valuePropName="checked"
                style={{ marginBottom: 0, flex: 1, minWidth: '300px' }}
              >
                <Checkbox style={{ fontSize: '14px' }}>
                  <span style={{ color: '#ff5722', fontWeight: '500' }}>🎭 Register as Cinema Admin</span>
                  <Text style={{ display: 'block', fontSize: '12px', color: '#666', marginTop: '2px' }}>
                    (Admin accounts can manage theaters and shows)
                  </Text>
                </Checkbox>
              </Form.Item>

              <Form.Item
                name="terms"
                valuePropName="checked"
                rules={[
                  { validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Please accept the terms and conditions')) }
                ]}
                style={{ marginBottom: 0, flex: 1, minWidth: '250px' }}
              >
                <Checkbox style={{ fontSize: '14px' }}>
                  I agree to the <span style={{ color: '#4caf50', fontWeight: '500' }}>Terms and Conditions</span>
                </Checkbox>
              </Form.Item>
            </div>

            <Form.Item style={{ marginBottom: '16px' }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                icon={<UserAddOutlined />}
                style={{
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
                  border: 'none',
                  fontSize: '17px',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(76, 175, 80, 0.6)'
                  }
                }}
              >
                Create My Account
              </Button>
            </Form.Item>

            <Divider style={{ margin: '20px 0' }}>
              <Text type="secondary">Already have an account?</Text>
            </Divider>

            <div style={{ textAlign: 'center' }}>
              <Text>
                <Link
                  to="/login"
                  style={{
                    color: '#4caf50',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '16px'
                  }}
                >
                  ← Sign In Instead
                </Link>
              </Text>
            </div>
          </Form>

          {/* Features highlight */}
          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(76, 175, 80, 0.2)',
            boxShadow: '0 2px 8px rgba(76, 175, 80, 0.1)'
          }}>
            <Text strong style={{ display: 'block', marginBottom: '8px', color: '#2e7d32', fontSize: '15px' }}>
              🎭 Join the Cinema Experience:
            </Text>
            <div style={{ display: 'grid', gap: '4px' }}>
              <Text style={{ fontSize: '13px', color: '#4caf50', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>🎬</span>
                Book tickets for the latest blockbusters
              </Text>
              <Text style={{ fontSize: '13px', color: '#4caf50', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>⭐</span>
                Exclusive early access to premieres
              </Text>
              <Text style={{ fontSize: '13px', color: '#4caf50', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>🎯</span>
                Personalized movie recommendations
              </Text>
              <Text style={{ fontSize: '13px', color: '#4caf50', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>🍿</span>
                Special discounts and offers
              </Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Register;