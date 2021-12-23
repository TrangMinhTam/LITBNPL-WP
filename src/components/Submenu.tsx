import React, { FC, useState } from 'react';
import {SidebarItem} from '../models/SidebarItem';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


type SidebarLinkProps ={
    item: SidebarItem,
};
    
const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #000000;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1rem;
    color:white;
`;

export const Submenu: FC<SidebarLinkProps> = ({item}) =>{

    // const [subnav,setSubnav] = useState(false);
    // const showSubnav = () => setSubnav(!subnav);

    return(
    <>
        <SidebarLink to={item.path}>
            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            {/* <div>{item?.subnav ? item?.iconClosed : item?.iconOpenned}</div> */}
        </SidebarLink>
        
    </>
    )
}
export default Submenu;