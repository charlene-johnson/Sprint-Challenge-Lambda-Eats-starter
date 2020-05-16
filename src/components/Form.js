import React, {useState} from "react";
import * as yup from "yup";
import axios from "axios"
import styled from "styled-components";

const Forms = styled.form `
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 1%;
`
const Label = styled.label `
    margin-bottom: 10px;
    text-align: center;
    width: 275px;
    font-family: 'Jost', sans-serif;
    font-weight: bold;
    font-size: 2rem;
`
const Input = styled.input `
    width: 200px;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid red;
    border-radius 4px;
`
const Textarea = styled.input `
    width: 20em;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid red;
    border-radius 4px;
    height: 4em;
    wrap: hard;
`

const Select = styled.select `
    width: 100%;
    margin: 7px;
    display: block;
    width: 14%;
    border: 1px solid red;
    border-radius: 4px;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    font-family: 'Pontano Sans', sans-serif;
`

const CheckboxInput = styled.input `
    width: 90px;
    margin-left: 80px;
    border: 1px solid red;
    border-radius 4px;
    
`
const Button = styled.button ` 
    width: 150px;
    padding: 8px;
    background-color: red;
    border: 1px solid #FF6961;
    border-radius 4px;
    margin-top: 1.6%;
    font-family: 'Pontano Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;

    &:hover {
        background-color: #F1A8A4
    }
`
const Paragraph = styled.p `
    color: red;
    font-size: 1.5rem;
    font-family: 'Pontano Sans', sans-serif;

`

const Pre = styled.pre `
    font-family: 'Jaldi', sans-serif;
    font-size: 1.8rem;
    text-align: center;
`
const Toppings= styled.p `
    font-size: 1.5rem;
    font-family: 'Jost', sans-serif;
    font-weight: bold;
`
const NavContainer = styled.div `
    display: flex;
    align-items: center;
`
const Navs= styled.nav `
    
    margin-left: 95%;
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
const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is a required field"),
    pizzaSize: yup
        .string()
        .required("Must Select a Pizza Size"),
    sausage: yup
        .string(),
    pepperoni: yup
        .string(),
    bacon: yup
        .string(),
    onions: yup
        .string(),
    spinach: yup
        .string(),
    greenPepper: yup
        .string(),
    special: yup
        .string()
})

export default function Form() {
    const [formState, setFormState] = useState({
        name: "",
        pizzaSize: "",
        sausage: false,
        pepperoni: false,
        bacon: false,
        onions: false,
        spinach: false,
        greenPepper: false,
        special: ""
    });

    const [post, setPost] = useState()
    // const submit = (newOrder => setPost(...formState, newOrder))
    const [errorState, setErrorState] = useState({
        name: "",
        pizzaSize: "",
        sausage: "",
        pepperoni: "",
        bacon: "",
        onions: "",
        spinach: "",
        greenPepper: "",
        special: ""
    });

    const validate = e => {
        let value = 
        e.target.type ==="checkbox" ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState, [e.target.name]: ""
                });
            }) 
            .catch(err => {
                console.log(err.errors)
                setErrorState({
                    ...errorState,
                    [e.target.name] : err.errors[0]
                });
            });
    };
    const inputChange = e => {
        e.persist();

        validate(e)
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({...formState, [e.target.name]: value});
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!")
        
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => { 
                  setPost(response.data);
                  console.log("Success", response)
                })
            .catch(err => console.log("We received an error",err));
    setFormState({name: "", pizzaSize: "", sausage: false, pepperoni: false, bacon:false, onions:false, spinach: false,greenPepper: false, special: ""})
    };

    return (
        <div>
            <NavContainer>
            <Navs>
                <Links href="/">Home</Links>
            </Navs>
            </NavContainer>
        <Forms onSubmit={formSubmit}>
            <Label htmlFor="name">Name: </Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={inputChange}
                    />
                    {errorState.name.length > 0 ? (<Paragraph>{errorState.name}</Paragraph>): null}
           
            <Label htmlFor="pizzaSize">What Pizza Size Do You Want?</Label>
               
                <Select
                    value={formState.pizzaSize}
                    name="pizzaSize"
                    id="pizzaSize"
                    onChange={inputChange}
                    >
                    <option value="" disabled={true}>Please Select Pizza Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </Select>
                {errorState.name.pizzaSize > 0 ? (<Paragraph>{errorState.pizzaSize}</Paragraph>): null}
            <Label htmlFor="toppings">Choose your Toppings(Choose up to 6</Label>
                <Toppings>Italian Sausage</Toppings>
                <CheckboxInput
                    name="sausage"
                    type="checkbox"
                    checked={formState.sausage}
                    onChange={inputChange}
                    />
                    <Toppings>Pepperoni</Toppings>
                <CheckboxInput
                    name="pepperoni"
                    type="checkbox"
                    checked={formState.pepperoni}
                    onChange={inputChange}
                    />
                    <Toppings>Bacon</Toppings>
                <CheckboxInput
                    name="bacon"
                    type="checkbox"
                    checked={formState.bacon}
                    onChange={inputChange}
                    />
                    <Toppings>Onions</Toppings>
                <CheckboxInput
                    name="onions"
                    type="checkbox"
                    checked={formState.onions}
                    onChange={inputChange}
                    />
                    <Toppings>Spinach</Toppings>
                <CheckboxInput
                    name="spinach"
                    type="checkbox"
                    checked={formState.spinach}
                    onChange={inputChange}
                    />
                    <Toppings>Green Pepper</Toppings>
                <CheckboxInput
                    name="greenPepper"
                    type="checkbox"
                    checked={formState.greenPepper}
                    onChange={inputChange}
                    />
            
            <Label htmlFor="special">Special Instructions:</Label>
    
                <Textarea
                    id="special"
                    name="special"
                    value={formState.special}
                    onChange={inputChange}
                    />
            
            <Button type="submit">Add to order</Button>
        </Forms>
        <Pre>{JSON.stringify(post, null, 2)}</Pre>
        </div>
    )
}