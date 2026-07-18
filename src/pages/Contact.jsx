import { Form, Button, Card } from "react-bootstrap";
import {useState} from "react";
import {Prompt} from "react-router-dom";
const Contact = () => {

    const [isEntering, setIsEntering] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    async function submitHandler(e){
        e.preventDefault();
    
        const contactObj={
            name,
            email,
            phone
        }
      await fetch("https://react-http-cc42a-default-rtdb.firebaseio.com/contact.json",{
        method : "POST",
        body : JSON.stringify(contactObj),
        headers :{
         "Content-Type": "application/json",
        }
      })
      setName("");
      setEmail("");
      setPhone("");
     setIsEntering(false);
    }

  return (
    <>
    <Prompt 
    when={isEntering}
    message="Are you sure you want to leave? All your entered data will be lost."
    />
    <div className="text-center mt-5 mb-4">
     <h2 className="fw-bold">Get In Touch</h2>
     <p className="text-muted">
    Fill in your details and we'll contact you soon.
     </p>
     </div>

    <Card className="w-50 mx-auto mt-5 p-4">
      <Form onSubmit={submitHandler} onFocus={()=>setIsEntering(true)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </Form.Group>

        <div className="text-center">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Card>
    </>
  );
};

export default Contact;