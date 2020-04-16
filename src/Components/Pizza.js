import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const formSchema = yup.object().shape({
    size: yup.string().required("Please select a size"),
    sauce: yup.string().required("Please select a sauce"),
    pepperoni: yup.string(),
    sausage: yup.string(),
    pineapple: yup.string(),
    bacon: yup.string(),
    glutenFree: yup.string(),
    special: yup.string(),
    name: yup.string().min(2).required("Please include a name")
});

const Pizza = (props) => {
    //state of form for the pizza
    const formState = props.pizza;
    const setFormState = props.setPizza;

    const [errors, setErrors] = useState({
        size: "",
        sauce: "",
        name: ""
    })

    //state for submit button
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);
    //state for our post request so we can concole.log(post)
    const [post, setPost] = useState([]);
    const [pizza, setPizza] = useState([]);

    const validateChange = event => {
        yup.reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                console.log("in errors", err);
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                });
            })
    };

    const inputChange = event => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value
        };
        validateChange(event);
        setFormState(newFormData);
    };

    const formSubmit = event => {
        event.preventDefault();
        console.log("IN SUBMIT")
        axios.post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost(res.data);
                console.log("success", post);
                setPizza([...pizza, res.data])
                setFormState({
                    size: "",
                    sauce: "",
                    pepperoni: "",
                    sausage: "",
                    pineapple: "",
                    bacon: "",
                    glutenFree:"",
                    special: "none",
                    name: ""
                });
            })
            .catch(err => {
                console.log(err.res);
            });
    };

  


    return (
        <form class="pizza-container" onSubmit={formSubmit} >
            <h2>Build Your Own Pizza</h2>
            <img class="pizza-img" src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80" alt="PIZZA!" />
            <div class="inner-pizza-container">
                <h2>Build Your Own Pizza</h2>

                <div class="grey-out">
                    <h3>Choice of Size</h3>
                    <h4>Required</h4>
                </div>
                <div class="white-space">
                    <select data-cy="size" class="size" name="size" onChange={inputChange}>
                        <option></option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra-Large">Extra-Large</option>
                    </select>
                    {errors.size.length > 0 ? (<p >{errors.size}</p>) : null}
                </div>


                <div class="grey-out">
                    <h3>Choice of Sauce</h3>
                    <h4>Required</h4>
                </div>
                <div data-cy="sauce" class="white-space sauce-select">
                    <label>
                        <input type="radio" name="sauce" value="Classic Red" onClick={inputChange} />
                        Classic Red
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="BBQ" onClick={inputChange} />
                        BBQ
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="Garlic Ranch" onClick={inputChange} />
                        Garlic Ranch
                    </label>
                    <label>
                        <input type="radio" name="sauce" value="Alfredo" onClick={inputChange} />
                        Alfredo
                    </label>
                    {errors.sauce.length > 0 ? (<p >{errors.sauce}</p>) : null}
                </div>


                <div class="grey-out">
                    <h3>Add Toppings</h3>
                    <h4>Choose Up To 10</h4>
                </div>
                <div class="white-space">
                    <label htmlFor="pepperoni">
                        <input data-cy="pepperoni" type="checkbox" name="pepperoni" checked={formState.pepperoni} onChange={inputChange} />
                        Pepperoni
                </label>
                    <label htmlFor="sausage">
                        <input data-cy="sausage" type="checkbox" name="sausage" checked={formState.sausage} onChange={inputChange} />
                        Sausage
                </label>
                    <label htmlFor="pineapple">
                        <input data-cy="pineapple" type="checkbox" name="pineapple" checked={formState.pineapple} onChange={inputChange} />
                        Pineapple
                </label>
                    <label htmlFor="bacon">
                        <input data-cy="bacon" type="checkbox" name="bacon" checked={formState.bacon} onChange={inputChange} />
                        Bacon
                </label>
                </div>
                <div class="grey-out">
                    <h3>Gluten Free Crust</h3>
                </div>
                <div class="white-space">
                    <label class="switch">
                        <input name="glutenFree" type="checkbox" checked={formState.glutenFree} onClick={inputChange} />
                        <span data-cy="glutenFree" class="slider"></span>
                    </label>
                </div>
                <div class="grey-out">
                    <h3>Special Instructions</h3>
                </div>
                <div class="white-space"><textarea name="special" value={formState.special} onChange={inputChange}></textarea></div>
                <div class="grey-out">
                    <h3>Name</h3>
                </div>
                <div class="white-space">
                    <input data-cy="name" type="text" name="name" value={formState.name} onChange={inputChange} />
                    {errors.name.length > 0 ? (<p >{errors.name}</p>) : null}
                </div>
            </div>
            {/* <Link to={`pizza/onway`}> */}
            <input data-cy="submit" type="submit" onClick={(e) => e.history.push('pizza/onway')} disabled={buttonDisabled} Add To Order />
            {/* </Link> */}
        </form>
    );
}

export default Pizza;