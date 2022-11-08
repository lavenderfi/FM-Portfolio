import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section id="contact">
      <div className="contact">
        <h1>Contact Me</h1>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="name"

            {...register('name', {
              required: { value: true, message: 'Please enter your name' },
            })}
          />{' '}
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="email"

            {...register('email', {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
          <Form.Label>Subject</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="subject"

            {...register('subject', {
              required: { value: true, message: 'Please enter a subject' },
            })}
          />{' '}
          {errors.subject && (
            <span className="errorMessage">{errors.subject.message}</span>
          )}
          <Form.Label>Message</Form.Label>
          <Form.Control
            className="input"
            as="textarea"
            name="message"

            {...register('message', {
              required: true,
            })}
          />
          {errors.message && (
            <span className="errorMessage">Please enter a message</span>
          )}
          <Button as="input" type="submit" value="Submit" />
        </Form>
        <ToastContainer />
      </div>
    </section>
  );
}
