import React, { Component } from 'react'

export default class Contador extends Component {
    
    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({
            numero: this.state.numero + 1
        })
        console.log(this); 
    }

    menosUm = () => {
        this.setState({
            numero: this.state.numero - 1
        })
        console.log(this); 
    }

    alterarNUmero = ( diferenca ) => {
        this.setState({
            numero: this.state.numero + diferenca
        })
        console.log(this); 
    }

    render(){
        return(
            <div>
                <div>Numero: { this.state.numero }</div>
                <button onClick={ this.maisUm }>Inc</button>
                <button onClick={ this.menosUm } >Dec</button>
                <button onClick={ () => this.alterarNUmero(10) }>Inc10</button>
                <button onClick={ () => this.alterarNUmero(-10) } >Dec10</button>
            </div>
        )
    }
}
