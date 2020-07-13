import React, { useState } from "react";
import { Layout } from "../components/Layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import validator from "validator";
import empty from "is-empty";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/Contact.css";
const Contact = () => {
  const [validated, setValidated] = useState(null);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    setErrors(errors);

    if (!validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (validator.isEmpty(name)) {
      errors.name = "Name Is Required";
    }
    if (validator.isEmpty(message)) {
      errors.message = "Invalid email address";
    }

    if (!empty(errors)) {
      setErrors(errors);
      setValidated(false);
    } else {
      setValidated(true);
      fetch(`${process.env.REACT_APP_API_DOMAIN}/contactme`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST",
        },
        // mode: "no-cors",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Layout>
      <h3 className="font-weight-bold bold-text">
        Don't be a stranger <br />
        <span className="contact-header-second"> say hello</span>
      </h3>
      <hr />
      <Row xs={1} md={2} lg={2}>
        <Col className="left-content">
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <small>
            Email me directly at{" "}
            <a
              href="mailto:eduardo.eddy.verde94@gmail.com"
              className="email-tag"
            >
              eduardo.eddy.verde94@gmail.com
            </a>
          </small>
        </Col>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                isInvalid={errors.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="examil@gmail.com"
                isInvalid={errors.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows="3"
                name="message"
                placeholder="Type Your Message Here"
                isInvalid={errors.message}
                value={message}
                onChange={(e) => setMessage(validator.escape(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a message.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="yellow-submit-button">
              <b></b>Submit Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;
