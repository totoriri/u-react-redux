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
      <form>
        <div><Field labe="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field labe="Title" name="title" type="text" component={this.renderField} /></div>

        <div>
          <input type="submit" value="submit" disabled={false}/>
          <Link to="/">Cancel</Link>
        </div>
       </form>
    )
   }
}

// const mapDispatchToProps = ({postEvents})
export default connect(null, null)(
  reduxForm({})
)(EventsNew)


