import React, { Component} from 'react';

class Input extends Component {
    render(){
        return (
            <div>
                <label htmlFor="fruit-filter">Filter these Fruits: </label>
                <input type="text" name="fruit-filter" id="fruit-filter" value={this.props.fruitInput} onChange={this.props.run}/> {/* pulls from the input component in the fruitcontainer file on line 31 */}
            </div>
        )
    }
}

export default Input;