import React, { Component } from 'react'

class Eventbind extends Component {
constructor(props) {
    super(props)

    this.state = {
         message:'Hello Event'
    }
}
clickHandler(){
this.setState({
    message:'GoodBye'
})
    console.log(this.state)
}

    render() {
        return (
            <div>
                {/*<button onClick={this.clickHandler.bind(this)}>Event {this.state.message} </button>*/}
                <button onClick={()=>this.clickHandler()}>Event {this.state.message}</button>
                
            </div>
        )
    }
}

export default Eventbind
