import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from 'react-bootstrap';
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
    <section id="contact" className='contact'>
        <h1> &#128236; Contact Me</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName" >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  name="name"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Please enter your name',
                    },
                  })}
                />{' '}
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
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
              </Form.Group>
            </Row>
            <Form.Group className='mb-3'>
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
            )}</Form.Group>
            <Form.Group className='mb-3'>
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
            )}</Form.Group>

          <Button
            as="input"
            type="submit"
            value="Submit"
            style={{
              margin: '5px',
              backgroundColor: '#AA6373',
              border: 'none',
            }}
          />
        </Form>
        <ToastContainer />
    </section>
  );
}
