import {SyntheticEvent, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { RouteComponentProps} from 'react-router';
import '../App.css'



interface Props {
    history: RouteComponentProps['history']
}


const LoginScreen = ({history}: Props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error,setError] = useState(null);

    

    const submitHandler = async (e:SyntheticEvent) => {
        e.preventDefault()

        
        await fetch('http://localhost:8000/admin/auth/login',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},           
            body: JSON.stringify({               
                email,
                password,                
            }),
            
        })
        .then(async res => {
            if(!res.ok){
                throw Error('Email or Password encorrect');
            }
            else{
                
                localStorage.setItem("accessName","true");
                const data = await res.json();                         
                localStorage.setItem("userId",data.user._id);
                window.location.href = ('/dashboard');                        
            }
        })       
        .catch(err =>{
            setError(err.message)
        })
        
        
        
        
    }

    return (  
        <div className='MainCenter'>
            <FormContainer >
                    <h1>Admin Login</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            />
                        </Form.Group>
                        
                        {error && <div>{error}</div>}
                        <p></p>
                        <Button variant="primary" type="submit" className="mb-3">
                            Submit
                        </Button>
                    </Form>
            </FormContainer>
        </div>     
        
    )
}

export default LoginScreen


