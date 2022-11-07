import { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function Contact () {
    let [email,setEmail] = useState('')
    let [subject,setSubject] = useState('')
    let [message,setMessage] = useState('')

    return (
        <div className='contact'>
            <h1>Contact Me</h1>
        </div>
    )
}