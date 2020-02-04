import React from 'react';

function App() {
  
  return (
    <div>
     <Counter　/>
    </div>
  )
}
  
class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    this.setState({
      count:this.state.count+1
    })
    console.log(this.state.count)
  }

  handleMinusBUtton = () => {
    this.setState({
      count:this.state.count-1
    })
  }
  render() {
    console.log("reander")
    return (
      <React.Fragment>
        <div>counter:{this.state.count} </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusBUtton}>-1</button>
      </React.Fragment>
    )
   }
}


export default App;

