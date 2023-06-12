import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar = ()=>{
    const  Nav =styled.nav`
    .navbar-list {
        display: flex;
        gap: 4.8rem;
        li {
          list-style: none;
          .navbar-link {
            &:link,
            &:visited {
              display: inline-block;
              text-decoration: none;
              font-size: 1.8rem;
              text-transform: uppercase;
              color: ${({ theme }) => theme.colors.black};
              transition: color 0.3s linear;
            }
            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }
    
    `; 
     


    return(
    
    
    <Nav>
        <div className="menuIcon"> 
        
          <ul className="navbar-list">
        <li>
           <NavLink className="navbar-link"  to="/">
            Home
            </NavLink>
        </li> 
         <li>
           <NavLink className="navbar-link" to="/About">
            About
            </NavLink>
         </li>


      

         <li>
            <NavLink className="navbar-link" to="/Pervice">
                Pervices
            </NavLink>
         </li>  

         <li>
           <NavLink className="navbar-link" to="/Contact">Contact</NavLink>
         </li>

         <li>
           <NavLink className="navbar-link" to="/Second">second</NavLink>
         </li>

         <li>
           <NavLink className="navbar-link" to="/First"></NavLink>
         </li>
        </ul>
        
  </div>

    </Nav>
    
    );
   
    
};
export default Navbar;