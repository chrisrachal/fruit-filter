import Input from "./Input";
import List from "./List";
import React, { Component} from 'react';

class FruitContainer extends Component {
    state = {
        fruitsToDisplay: this.props.fruits,
        fruitValue: ''
    }

    handleFilterChange = (e) => {  //e is for an event
        e.preventDefault(); //only changing the event of this one attribute
        let value = e.target.value; //the value we get from our input

        const filteredFruitList = this.props.fruits.filter(fruit => { //create a new filter array with new info
            //check to see if the filtervalue is included within the fruit, remove anything thats not within the filtervalue
            if (fruit.includes(value.toLowerCase())) { //app is included in apple(true), app is included in banana(false), toLowerCase to make sure searches match with capital letters
                return true;
            }
        }) 
        // filteredFruitList['apple', 'pineapple'] if we type app
        // filteredFruitList['mango'] if we type mang
        this.setState({
            fruitsToDisplay: filteredFruitList,
            fruitValue: value
        })
    }
    render(){
        return (
            <div>
                <Input value={this.state.fruitValue} run={this.handleFilterChange}/> {/* value= and run= ARE PROPERTIES, CAN NAME WHATEVER....runs handleFilterChange function to update the state */}
                <List fruits={this.state.fruitsToDisplay}/>  {/* fruits= IS A PROPERTY, CAN NAME WHATEVER...displays updated filteredFruitList */}
            </div>
        )
    }
}

export default FruitContainer;