import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Error = styled.div`
display : flex;
background-color :#F38888;
flex: 1;
text-align: center;
align-items: center;
width : 100%;
height : 30px;
  font-size: 12px;
  margin: 20px 0px;
`;

const ErrorMessage = styled.h3`
color: red;
margin : 0 auto;

`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const dispatch = useDispatch();
  
  const [newUser, setNewUser] = useState({})
  const [error , setError] = useState(false);

  const handleChange= (e) =>{
    const value = e.target.value;
setNewUser({
  ...newUser , [e.target.name]:value
})

console.log(newUser);

  }

  const handleClick = (e) =>{
    e.preventDefault();
  const matchPasswor = newUser.password === newUser.confirmPassword;
  if(!matchPasswor) setError(true);
  if(matchPasswor){
    register(dispatch , newUser);
  }

  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input name="name" placeholder="name" onChange={handleChange} />
          <Input name="lastName" placeholder="last name" onChange={handleChange} />
          <Input name="username" placeholder="username" onChange={handleChange} />
          <Input name="email" placeholder="email" onChange={handleChange}/>
          <Input name="password" placeholder="password" onChange={handleChange} />
          <Input name="confirmPassword" placeholder="confirm password" onChange={handleChange} />
        {error && (<Error><ErrorMessage >Password and Confirm Password must be match .</ErrorMessage></Error>)}
          

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
