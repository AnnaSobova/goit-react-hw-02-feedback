import styled from '@emotion/styled';
const Button= styled.button`
margin-right:10px;
padding:5px;
font-size: 18px;
background-color:white;
border-radius: 5px;
border: 1px black solid;
cursor: pointer;
transition: color 250ms linear;
transition: background-color 250ms linear;
&:hover,
&:focus {
  background-color: blu;
  color: white;
}
`;


export default Button