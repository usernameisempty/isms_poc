import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter as  Navigate } from "react-router-dom";
import "./App.css";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Hardcoded username and password check
    if (username === 'costsense' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  if (loggedIn) {
    // Redirect to home page once logged in
    return <Navigate to="/home" />;
  }

  return (
    <div className="container">
      <div className="login-page">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;