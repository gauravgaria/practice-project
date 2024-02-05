import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RegisterationForm = () =>{
    
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
      });
    
      const[successMessage,setSuccessMessage] = useState(null);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('user data:', formData);
        if(formData!= null){
          axios({
            method: 'post',
            url: 'http://localhost:8080/user/register',
            data: formData,
            headers: {
            'Content-Type': 'application/json'
            }, 
          });
          setSuccessMessage('Request completed successfully!');
          setFormData({
            name: '',
            username: '',
            email: '',
            password: '',
          });


        }
      };

    return(<>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <h2>Sign Up for Free</h2>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Get Started
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
    </>);
}

export default RegisterationForm;