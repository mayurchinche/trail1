import React , {Component} from 'react'

class Welcome extends Component{

    constructor(){
        super()
        this.state={
            message:'welcome !..'
        }
    }
    changeMesssage(){
        this.setState(
            {
                message:'Thank You For subscribing !.'
            }
        )
    }
    render(){

        return (

            <div>
                <h1>Class Component !...{this.props.name} {this.state.message}</h1>
                <button onClick={()=>this.changeMesssage()} >Hit Button</button>
            </div>
        
        )
    }
}

export default Welcome

