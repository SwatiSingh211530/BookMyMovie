// Importing the necessary libraries and components
import React, { useEffect } from "react";
import { Form, message, Input, Button, Card, Typography, Divider } from "antd";
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone, LoginOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, GetCurrentUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

const { Title, Text } = Typography;

// Defining the 'Login' functional component
function Login() {
  const navigate = useNavigate(); // Creating a navigate function using the 'useNavigate' hook from the 'react-router-dom' library
  const dispatch = useDispatch(); // Creating a dispatch function using the 'useDispatch' hook from the 'react-redux' library
  // Creating a function 'onFinish' that will be called when the form is submitted successfully
  const onFinish = async (values) => {
    // console.log("Success:", values); // Output the form values to the console

    try {
      dispatch(ShowLoading()); // Dispatching the 'ShowLoading' action to show the loading indicator
      const response = await LoginUser(values); // Calling the 'LoginUser' function with the form values as the argument
      dispatch(HideLoading()); // Dispatching the 'HideLoading' action to hide the loading indicator
      if (response.success) {
        message.success(response.message); // Displaying a success message if the login was successful
        localStorage.setItem("token", response.data); // Storing the JWT token in the browser's local storage

        // Check if user is admin and redirect accordingly
        // We'll fetch user data to check admin status
        const userResponse = await GetCurrentUser();
        if (userResponse.success && userResponse.data.isAdmin) {
          window.location.href = "/admin"; // Redirect admin to admin panel
        } else {
          window.location.href = "/"; // Redirect regular user to home page
        }
      } else {
        message.error(response.message); // Displaying an error message if the login was unsuccessful
      }
    } catch (error) {
      dispatch(HideLoading()); // Dispatching the 'HideLoading' action to hide the loading indicator
      message.error(error.message); // Displaying an error message if an error occurred while processing the request
    }
  };

  // The 'useEffect' hook runs once after the component is mounted
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/"); // If a token is found in local storage, redirect the user to the home page
    }
  }, [navigate]);

  // Rendering the component's UI using JSX
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: '#000'
    }}>
      {/* Left Side - Movie Theater Theme */}
      <div style={{
        flex: 1,
        background: `
          linear-gradient(135deg, rgba(0,0,0,0.7), rgba(102, 126, 234, 0.4)),
          url("https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        color: 'white',
        position: 'relative'
      }}>
        {/* Movie Theater Elements */}
        <div style={{ textAlign: 'center', zIndex: 2 }}>
          <div style={{ fontSize: '120px', marginBottom: '20px' }}>🎬</div>
          <Title level={1} style={{ 
            color: 'white', 
            fontSize: '48px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            BookMyMovie
          </Title>
          <Text style={{ 
            fontSize: '22px', 
            color: 'white', 
            display: 'block', 
            marginBottom: '30px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Your Gateway to Cinematic Adventures
          </Text>
          
          {/* Movie Theater Icons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px',
            marginTop: '40px',
            fontSize: '32px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '10px' }}>🎭</div>
              <Text style={{ color: 'white', fontSize: '14px' }}>Theater</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '10px' }}>🍿</div>
              <Text style={{ color: 'white', fontSize: '14px' }}>Snacks</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '10px' }}>🎪</div>
              <Text style={{ color: 'white', fontSize: '14px' }}>Shows</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '10px' }}>🎫</div>
              <Text style={{ color: 'white', fontSize: '14px' }}>Tickets</Text>
            </div>
          </div>
        </div>
        
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
        }}>�</div>
      </div>

      {/* Right Side - Login Form */}
      <div style={{
        flex: 1,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: 'none',
              padding: '20px'
            }}
          >
            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'
              }}>
                🎬
              </div>
              <Title level={2} style={{ margin: 0, color: '#1a1a1a' }}>
                Welcome Back
              </Title>
              <Text type="secondary" style={{ fontSize: '16px' }}>
                Sign in to BookMyMovie and discover amazing films
              </Text>
            </div>

            {/* Login Form */}
            <Form layout="vertical" onFinish={onFinish} size="large">
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: 'email', message: "Please enter a valid email!" }
                ]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: '#667eea' }} />}
                  placeholder="Enter your email address"
                  style={{ borderRadius: '8px', padding: '12px' }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                  { min: 6, message: "Password must be at least 6 characters!" }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#667eea' }} />}
                  placeholder="Enter your password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  style={{ borderRadius: '8px', padding: '12px' }}
                />
              </Form.Item>

              <Form.Item style={{ marginBottom: '16px' }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  icon={<LoginOutlined />}
                  style={{
                    height: '48px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Sign In
                </Button>
              </Form.Item>

              <Divider style={{ margin: '24px 0' }}>
                <Text type="secondary">New to BookMyMovie?</Text>
              </Divider>

              <div style={{ textAlign: 'center' }}>
                <Text>
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    style={{
                      color: '#667eea',
                      fontWeight: '500',
                      textDecoration: 'none'
                    }}
                  >
                    Create Account
                  </Link>
                </Text>
              </div>
            </Form>

            {/* Demo Credentials */}
            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <Text strong style={{ display: 'block', marginBottom: '8px', color: '#495057' }}>
                Demo Credentials:
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
    </div>
  );
}

// Exporting the 'Login' component as the default export
export default Login;