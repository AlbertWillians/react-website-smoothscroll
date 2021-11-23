import React from 'react'
import {
   SidebarMenu,
   SidebarContainer,
   CloseIcon,
   Icon,
   SidebarWrapper,
   SidebarLink,
   SideBtnWrap,
   SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon isOpen={isOpen} onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink onClick={toggle} to='about'>About</SidebarLink>
               <SidebarLink onClick={toggle} to='discover'>Discover</SidebarLink>
               <SidebarLink onClick={toggle} to='services'>Services</SidebarLink>
               <SidebarLink onClick={toggle} to='signup'>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
               <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar