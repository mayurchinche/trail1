import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loggedIn :true
        }
    }
    
    render() {
        let message
                this.state.loggedIn ?
         (message='welcome Mayur !.')
        :
       (message='welcome Guest')
        return(
        <>
        { this.state.loggedIn && <div>Welll short circuit</div>}
          <div>{message}</div>
        </>
        )
    
    }
}

export default ConditionalRendering
