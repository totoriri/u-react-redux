import React from 'react';

function App() {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    {name:"lisa"}
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

User.defaultProps = {
  age:1
}
export default App;

