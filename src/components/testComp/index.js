import React, { Component } from 'react'

class MyTest extends Component {
    
    dosomething = (e) => {
        this.setState({
            somevalue: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type='input'
                 onChange={this.dosomething}
                 value={`${this.state && this.state.somevalue || ''}`} 
                />
            </div>
        )
    }
}

export default MyTest
