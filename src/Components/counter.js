import React, { Component } from 'react'

export class counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count :0
        }
    }
    increment(){
        this.setState((prevState)=>({count:prevState.count+1}))        //Asynchronus console log
        console.log(this.state.count)
    }
    incrementfive(){
       this.increment()
       this.increment()
       this.increment()
       this.increment()
       this.increment()
       
    }

    render() {
        return (
            <div>
                <h2>Count -{this.state.count}</h2>
            <button onClick={()=>this.incrementfive()}>Click to increment</button>
            </div>
        )
    }
}

export default counter
