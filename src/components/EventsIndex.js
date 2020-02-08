import React from 'react';
import { connect } from "react-redux"

import { readEvents } from "../actions"

  
class EventsIndex extends React.Component{
  componentDidMount() {
    console.log("hi!")
    this.props.readEvents()
  }
  
  render() {
    const props = this.props
    console.log("render")
    return (
      <React.Fragment>
        <div>value:{props.value} </div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
   }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({readEvents})
export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)


