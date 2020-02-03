import React from 'react';
import PropTypes from 'prop-types'

function App() {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    { name: "lisa" ,age:13},
  ]

  return (
    <div>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}
  
const User = (props) => {
  return (
    <div>hi my name is{props.name},age is {props.age} </div>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age:PropTypes.number.isRequired
}

export default App;

