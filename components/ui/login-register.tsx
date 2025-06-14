"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Mail, Lock, Github, Facebook, Linkedin } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

interface LoginForm {
  username: string;
  password: string;
}

interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

export default function LoginRegister() {
  const [isActive, setIsActive] = useState(false);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: '',
    password: ''
  });
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    username: '',
    email: '',
    password: ''
  });

  const toggleActive = (value: boolean) => {
    setIsActive(value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted:', loginForm);
    // Add actual login logic here
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration form submitted:', registerForm);
    // Add actual registration logic here
  };

  return (
    <div className={`login-register-container ${isActive ? 'active' : ''}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <Input
              type="text"
              placeholder="Username"
              required
              value={loginForm.username}
              onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
              className="login-input"
            />
            <User className="input-icon" />
          </div>
          <div className="input-box">
            <Input
              type="password"
              placeholder="Password"
              required
              value={loginForm.password}
              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
              className="login-input"
            />
            <Lock className="input-icon" />
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <Button type="submit" className="auth-btn">Login</Button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#"><FaGoogle /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Github /></a>
            <a href="#"><Linkedin /></a>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className="input-box">
            <Input
              type="text"
              placeholder="Username"
              required
              value={registerForm.username}
              onChange={(e) => setRegisterForm({...registerForm, username: e.target.value})}
              className="login-input"
            />
            <User className="input-icon" />
          </div>
          <div className="input-box">
            <Input
              type="email"
              placeholder="Email"
              required
              value={registerForm.email}
              onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
              className="login-input"
            />
            <Mail className="input-icon" />
          </div>
          <div className="input-box">
            <Input
              type="password"
              placeholder="Password"
              required
              value={registerForm.password}
              onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
              className="login-input"
            />
            <Lock className="input-icon" />
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <Button type="submit" className="auth-btn">Register</Button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <a href="#"><FaGoogle /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Github /></a>
            <a href="#"><Linkedin /></a>
          </div>
        </form>
      </div>

      {/* Toggle Box */}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <Button 
            className="toggle-btn register-btn" 
            onClick={() => toggleActive(true)}
            variant="outline"
          >
            Register
          </Button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <Button 
            className="toggle-btn login-btn" 
            onClick={() => toggleActive(false)}
            variant="outline"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
