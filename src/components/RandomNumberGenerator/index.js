import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component{
    state={randomNumber:0,}

    generateNumber=()=>{
        const number=Math.ceil(Math.random()*100)
        this.setState({randomNumber:number})
    }

    render(){
        const {randomNumber}=this.state
        return(
            <div className="app-container">
            <div className="card-container">
            <h1 className="heading">Random Number</h1>
            <p className="para">Generate a random number in the range of 0 to 100</p>
            <button type="button" className="button" onClick={this.generateNumber}>Generate</button>
            <p className="digit">{randomNumber}</p>

            </div>


            </div>
        )
    }
}


export default RandomNumberGenerator