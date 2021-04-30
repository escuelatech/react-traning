import React, { Component } from 'react';

class Count extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        // this.handleIncrement=this.handleIncrement.bind(this)
        // this.handleDecrement=this.handleDecrement.bind(this)

    }
    handleIncrement = () =>{
        // this.setState(
        //     {
        //         // count:this.state.count + 1

        //     }
        // )
        this.setState(
            (prevState) => ({
                count:prevState.count + 1
            })
        )
    }
    handleDecrement = () =>{
        // this.setState(
        //     {
        //         count:this.state.count - 1
        //     }
        // )
        this.setState(
            (prevState) => ({
                count:prevState.count - 1
            })
        )
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
}

export default Count;