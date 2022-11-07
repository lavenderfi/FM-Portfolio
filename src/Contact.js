import { useState } from "react";
import Form from 'react-bootstrap/Form';
import {Card} from 'react-bootstrap'

export default function Contact () {
    let [values,setValues] = useState({
        email: '',
        subject: '',
        message: ''
    })
function handleChange(e){
    setValues({
        ...Contact,
        [e.target.name]: e.target.value
    })
}
    return (
        <section id='contact'>
        <div className='contact'>
            <h1>Contact Me</h1>
            <Form className='form'>
                <Form.Label>Email</Form.Label>
                <Form.Control className='input' type='text' name='email' value={values.email} onChange={handleChange}/>
                <Form.Label>Subject</Form.Label>
                <Form.Control className='input' type='text' name='subject' values={values.subject} onChange={handleChange} />
                <Form.Label>Message</Form.Label>
                <Form.Control className='input' as='textarea' name='message' values={values.message} onChange={handleChange}/>
            </Form>
        </div>
        </section>
    )
}