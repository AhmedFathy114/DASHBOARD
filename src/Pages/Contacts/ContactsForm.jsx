import {  FloatingLabel, Form } from "react-bootstrap";

export default function ContactsForm() {

  return <>
    <div className="formContainer">
        <Form className="form pb-5 bg-light  rounded-4">
        <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="e.g Ahmed Ali" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Ahmed02@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Question about a project" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupSubject">
            <Form.Label>your Message</Form.Label>
            <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Write your message here.." />
        </Form.Group>
        <button type="submit" className="border-0 w-100 py-2 mt-2  btn main-btn fw-medium">Send Message</button>
        </Form>
    </div>
</>

}
