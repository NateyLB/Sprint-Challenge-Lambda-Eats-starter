import React from "react";

const OnWay = (props) =>{
    const pizza = props.pizza;

    function makeString(pizza){
        var toppings = ""
        if (pizza.pepperoni == true){
            toppings += "pepperoni "
        }
        if(pizza.sausage == true){
            toppings += "sausage "
        }
        if (pizza.pineapple == true){
            toppings += "pineapple "
        }
        if(pizza.bacon == true){
            toppings += "bacon"
        }
        toppings += "."
        const formatter = toppings.replace(/ /g,", ")
        return formatter
    }

    return(
        <div class="on-way">
            <h1>{pizza.name}, your {pizza.size} {pizza.sauce} sauce pizza with {makeString(pizza)} Is on the way!</h1>
        </div>

    );
}

export default OnWay;