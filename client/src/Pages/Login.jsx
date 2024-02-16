import React from "react";
// import axios from "axios";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import axiosApi from "../utils/api";
//   );
// };

// const LoginContainer = styled.div`
//   width: 90%; /* Adjusted width for responsiveness */
//   max-width: 400px; /* Added max-width for smaller screens */
//   margin: 40px auto;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   padding: 20px;

//   .login-heading {
//     text-align: center;
//     font-weight: bold;
//     font-size: 24px;
//     color: #48bb78;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//   }
// `;

// const SubmitButton = styled.button`
//   height: 35px;
//   background-color: #48bb78;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: red;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   font-size: 16px;
//   margin-bottom: 5px;
//   font-weight: bold;

//   span {
//     color: red;
//     margin-left: 4px;
//   }
// `;

// const Input = styled.input`
//   height: 40px;
//   font-size: larger;
//   border: 1px solid gray;
//   border-radius: 5px;
//   padding: 8px;
//   transition: border-color 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #48bb78;
//   }
// `;

// export default Login;





import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
// import { Logo } from './Logo'
// import { OAuthButtonGroup } from './OAuthButtonGroup'
// import { PasswordField } from './PasswordField'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from 'react';
// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     pass: "",
//   });
//   const { setIsAuth } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.pass) {
//       Swal.fire({
//         icon: "error",
//         title: "Validation Error",
//         text: "Please fill in all fields.",
//       });
//       return;
//     }

//   try {
//     const response = await axiosApi("/users/login", "post", formData);
//     console.log(response);
//     const { token } = response?.data;
//     localStorage.setItem("token", token);
//     setIsAuth(true);
//     Swal.fire({
//       title: "Login Successful",
//       icon: "success",
//     });
//     navigate("/movies");
//   } catch (error) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Invalid credentials. Please try again.",
//     });
//   }
// };

//   return (
{/* <LoginContainer>
  <h2 className="login-heading">Login</h2>
  <form onSubmit={handleSubmit}>
    <FormGroup>
      <Label htmlFor="email">
        Email<span>*</span>
      </Label>
      <Input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        placeholder="Enter your email"
        required
      />
    </FormGroup>
    <FormGroup>
      <Label htmlFor="pass">
        Password<span>*</span>
      </Label>
      <Input
        type="password"
        id="pass"
        name="pass"
        value={formData.pass}
        onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
        placeholder="Enter your password"
        required
      />
    </FormGroup>
    <SubmitButton type="submit">Login</SubmitButton>
  </form>
</LoginContainer> */}

const Login = () => {
  const [formData, setFormData] = useState
    ({
      email: "",
      pass: "",
    });

  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.pass) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill in all fields.",
      });
      return;
    }

    try {
      const response = await axiosApi("/users/login", "post", formData);
      console.log(response);
      const { token } = response?.data;
      localStorage.setItem("token", token);
      setIsAuth(true);
      Swal.fire({
        title: "Login Successful",
        icon: "success",
      });
      navigate("/movies");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid credentials. Please try again.",
      });
    }
  };

  return <Container
    maxW="lg"
    py={{
      base: '12',
      md: '24',
    }}
    px={{
      base: '0',
      sm: '8',
    }}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        {/* <Logo /> */}
        <Stack
          spacing={{
            base: '2',
            md: '3',
          }}
          textAlign="center"
        >
          <Heading
            size={{
              base: 'xs',
              md: 'sm',
            }}
          >
            Log in to your account
          </Heading>
          <Text color="fg.muted">
            Don't have an account? <Link href="#">Sign up</Link>
          </Text>
        </Stack>
      </Stack>
      <Box
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={{
          base: 'transparent',
          sm: 'bg.surface',
        }}
        boxShadow={{
          base: 'none',
          sm: 'md',
        }}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
                required />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" name="pass"
                value={formData.pass}
                onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
                placeholder="Enter your password"
                required />
            </FormControl>
            {/* <PasswordField /> */}
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="text" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button onClick={handleSubmit}>Sign in</Button>
            <HStack>
              <Divider />
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            {/* <OAuthButtonGroup /> */}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
}

export default Login