import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { Input } from "@chakra-ui/react";

const Navbar = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false)
    Swal.fire({
      icon: "success",
      title: "Successfully Logged Out",
      text: "You have been successfully logged out.",
    });
    setTimeout(() => {

      navigate("/login");
    }, 1000);

  };

  return (
    <StyledNavbar>
      <StyledLogo onClick={() => navigate("/movies")}>
        <img
          style={{ width: "50%" }}
          src="https://movx-62c76.web.app/logo-full.png"
          alt="logo"
        />
      </StyledLogo>

      <Input w="500px" placeholder="Search" />


      <StyledLinks>
        {<StyledLink to="/movies">Home</StyledLink>}
        {<StyledLink to="/movie/add">Add Movie</StyledLink>}
        {token ? (
          <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/">Register</StyledLink>
          </>
        )}
      </StyledLinks>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: flex;
  /* align-items: center; */
 
  overflow: hidden;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 20px 0 ;
  position: sticky;
  color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledLogo = styled.div`
  font-size: 24px;
  cursor: pointer;
  scroll-behavior: smooth;
  
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: red;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  
  font-family: Yantramanav,Helvetica,Arial,sans-serif;
  font-weight: 400;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #444;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #d65656;
  }
`;

const StyledLogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #444;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #d65656;
  }
`;

export default Navbar;





