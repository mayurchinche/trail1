import React, { Component } from 'react'
import Children from './Children'
class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Its parent'
        }
    }
    
    greetParent(){
        alert('hello')
    }
    render() {
        return (
            <div>
               <Children greetHandler={this.greetParent}/>
     
            </div>
        )
    }
}

export default Parent
