import React, { SyntheticEvent, useState } from 'react'
import {Navbar,Nav,Container,Dropdown} from 'react-bootstrap'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {

    const [_id, setId] = useState<any | null>(null);

    const logoutHandler = async(e:SyntheticEvent) => {
        e.preventDefault()
        
        
        await fetch('http://localhost:8000/admin/auth/logout',{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({               
            _id,
                            
          }),
        }).then(async res => {
          if(!res.ok){
              throw Error('Something error!');
          }
          else{
            const IdCurrent = localStorage.getItem("userId");
            setId(IdCurrent);
            localStorage.removeItem("userId")
            localStorage.removeItem("accessName")
            
          }
      })
      window.location.reload()
        
      }

    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        <div className="avatar">
                          <AccountCircleIcon />
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/change-password">Profile Admin</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item onClick={logoutHandler}>Log out</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header
