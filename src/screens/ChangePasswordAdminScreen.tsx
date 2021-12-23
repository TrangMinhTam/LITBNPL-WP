import {SyntheticEvent, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { RouteComponentProps} from 'react-router';
import '../App.css'

const ChangePasswordAdminScreen = () => {
    const [currentPass, setCurrentPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const submitHandler = async (e:SyntheticEvent) => {
        e.preventDefault()
    }
  
    return (  
        <div className='MainCenter'>
            <FormContainer >
                    <h1>Change Password</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="CurrentPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="email" placeholder="Enter Current password" 
                            value={currentPass}
                            onChange={e=>setCurrentPass(e.target.value)}
                            />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="NewPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter New Password" 
                            value={newPass}
                            onChange={e=>setNewPass(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="NewPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Confirm New Password" 
                            value={newPass}
                            onChange={e=>setNewPass(e.target.value)}
                            />
                        </Form.Group>
                        
                        {/* {error && <div>{error}</div>} */}
                        <p></p>
                        <Button variant="primary" type="submit" className="mb-3">
                            Submit
                        </Button>
                    </Form>
            </FormContainer>
        </div>     
        
    )
}

export default ChangePasswordAdminScreen


