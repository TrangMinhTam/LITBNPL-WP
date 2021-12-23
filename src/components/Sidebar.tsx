import styled from "styled-components";
import React, {FC, SyntheticEvent, useState} from "react";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { Submenu } from './Submenu';
import { Navbar,Dropdown} from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Nav =  styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    height: 5rem;
    background-color: #333333;
`;
const SidebarNav = styled.div<{ sidebar : boolean }>`
    width: 250px;
    height: 100vh;
    background-color: #333333;
    
    position: fixed;
    top: 0;
    left: ${({ sidebar }) =>(sidebar ? '0' : '-100%')};
`; 
const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    height: 5rem;
    font-size: 2rem;
    margin-left:2rem;
    
`
const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    console.log(sidebar);

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
    return(
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav >
               
                <NavIcon to ="#" onClick={showSidebar}>
                    <AiOutlineMenu/>
                </NavIcon> 
                
                <Nav className="ms-auto">
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
                           
            </Nav>
            
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to ="#" onClick={showSidebar}>
                        <AiOutlineClose/>
                    </NavIcon>
                    {SidebarData.map((item, index)=>{
                        return <Submenu item ={item} key={index}/>;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    )
}
export default Sidebar;