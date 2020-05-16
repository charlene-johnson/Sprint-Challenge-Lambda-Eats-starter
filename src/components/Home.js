import React from "react";

import styled from "styled-components";

const Header= styled.header `
width: 100%;
display: flex;
`

const NavContainer = styled.div `
    display: flex;
    align-items: center;
`
const Title= styled.h1 `
font-size: 2.5rem;
text-align: center;
color: red;
font-family: 'Jost', sans-serif;
margin-top: 2%;

`


const Navs= styled.nav `
    width: 160rem;
    margin-left: 100%;
    font-size: 2.2rem;
    display: flex;
    font-family: 'Jost', sans-serif;
    font-weight: bold;
`

const Links = styled.a `
    text-decoration: none;
    color: black;
    padding: 7%;
    

    &:hover {
        color: red;
        text-decoration: none;
    }
`

export default function Home() {
    return (
        <Header> 
            <Title>Lambda Eats</Title>
            <NavContainer>
                <Navs>
                    <Links href="/">Home</Links>
                    <Links href="/pizza">Order</Links>
                </Navs>
            </NavContainer>
        </Header>
    )
}