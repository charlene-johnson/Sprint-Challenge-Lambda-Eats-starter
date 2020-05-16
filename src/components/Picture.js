import React from "react"
import Pizza from "../img/pizza.jpg"
import styled from "styled-components"

const Image = styled.img `
max-width: 1200px;
max-height: 1000px;
width: 1000px;
height: 800px;
margin-left: 25%;
`
const Order= styled.h1 `
font-family: 'Jost', sans-serif;
font-size: 4.5rem;
font-weight: bold;
text-align: center;
`

function Picture ()  {
    return(
        <div className="pic">
            <Order>Order Delicious Pizza Now!</Order>
            <Image src={Pizza} alt="Pizza"/>
        </div>
    )
}

export default Picture;