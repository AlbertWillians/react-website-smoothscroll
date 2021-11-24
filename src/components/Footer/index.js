import React from 'react'
import {
   FooterContainer,
   FooterLink,
   FooterLinkItems,
   FooterLinksContainer,
   FooterLinksWrapper,
   FooterLinkTitle,
   FooterWrap
} from './FooterElements'

const Footer = () => {
   return (
      <FooterContainer>
         <FooterWrap>
            <FooterLinksContainer>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>About us</FooterLinkTitle>
                     <FooterLink to='/signin' >How it works</FooterLink>
                     <FooterLink to='/signin' >Testimonials</FooterLink>
                     <FooterLink to='/signin' >Carrers</FooterLink>
                     <FooterLink to='/signin' >Investors</FooterLink>
                     <FooterLink to='/signin' >Terms of Service</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                     <FooterLinkTitle>About us</FooterLinkTitle>
                     <FooterLink to='/signin' >How it works</FooterLink>
                     <FooterLink to='/signin' >Testimonials</FooterLink>
                     <FooterLink to='/signin' >Carrers</FooterLink>
                     <FooterLink to='/signin' >Investors</FooterLink>
                     <FooterLink to='/signin' >Terms of Service</FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>About us</FooterLinkTitle>
                     <FooterLink to='/signin' >How it works</FooterLink>
                     <FooterLink to='/signin' >Testimonials</FooterLink>
                     <FooterLink to='/signin' >Carrers</FooterLink>
                     <FooterLink to='/signin' >Investors</FooterLink>
                     <FooterLink to='/signin' >Terms of Service</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                     <FooterLinkTitle>About us</FooterLinkTitle>
                     <FooterLink to='/signin' >How it works</FooterLink>
                     <FooterLink to='/signin' >Testimonials</FooterLink>
                     <FooterLink to='/signin' >Carrers</FooterLink>
                     <FooterLink to='/signin' >Investors</FooterLink>
                     <FooterLink to='/signin' >Terms of Service</FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>
            </FooterLinksContainer>
         </FooterWrap>
      </FooterContainer>
   )
}

export default Footer