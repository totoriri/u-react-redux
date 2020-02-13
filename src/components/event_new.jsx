import React from 'react';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {Field , reduxForm} from 'react-router-dom'

// import { postEvents } from "../actions"

  
class EventsNew extends React.Component{
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return(<div></div>)
  }
  render() {
    return (
      <React.Fragment>
        <Field labe="Title" name="title" type="text" component={this.renderField} />
        <Field labe="Title" name="title" type="text" component={this.renderField} />
       </React.Fragment>
    )
   }
}

// const mapDispatchToProps = ({postEvents})
export default connect(null,null)(EventsNew)


