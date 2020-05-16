import React from "react";

import styled from "styled-components";

const Header= styled.header `
width: 100%;
heiht: 100%
`

const NavContainer = styled.div `
    display: flex;
    align-items: center;
`
const Title= styled.h2 `
    font-size: 2.2rem;
    text-align: center;
    color: red;
`


const Navs= styled.nav `
    width: 50rem;
    margin-left: 80%;
    font-size: 2.2rem;
    display: flex;
    justify-content: space-around;
`

const Links = styled.a `
    text-decoration: none;
    color: black;

    &:hover {
        color: red;
        text-decoration: none;
    }
`

export default function Home() {
    return (
        <Header>
            <NavContainer>
                <Title>Lambda Eats</Title>
                <Navs>
                    <Links href="/">Home</Links>
                    <Links href="/pizza">Order Now!</Links>
                </Navs>
            </NavContainer>
        </Header>
    )
}