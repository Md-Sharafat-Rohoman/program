import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {
  const Actors =['sharafat','tamim','baker','yeasin','ibrahim']

  return (
    <>
      
      <h1>Vite + React</h1>   
      <Actor name={"zafourllah"}></Actor>
      {
        Actors.map(Actor => <Actor name={Actor}></Actor>)
      }
      {/* <Todo task="learn react" isDone="true"></Todo>
      <Todo task="core concepts" isDone="false"></Todo>
      <Todo task="try jsx" isDone="true"></Todo> */}
      {/* <Devise name="Laptop"price="50000" > </Devise>
      <Devise name="mobile" price="17000"></Devise>
      <Person name="watch"></Person>
      <Person></Person>
      <Person></Person>
      <Student grade='9'score='99'></Student>
      <Student grade='7' score='85'></Student>
      <Student grade='7' ></Student>
      <Developer></Developer> */}

    </>

  )
}

function Devise(props){
  console.log(props)
  return <h2>this is devis: {props.name} price:{props.price}</h2>
}


function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "sharafat rohoman", age: 19 };
  return <h3>i am {person.name} with age {age + money}</h3>
}

// const {grade,score}={grade:'7',score:'99'}
function Student({grade,score=0}) {
  console.log((grade,score))
  return (
    <div className='student'>
      <h1>there is no recognise </h1>
      <p>class: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}
function Developer(){
  const developerStyle ={
    margin:'20px',
    padding:'25px',
    border:'2px solid purpal',
    borderRadius:'10px'
  }
  return(
    <div style={developerStyle}> 
      <h5>tamim</h5>
      <p>sharafat rohoman is a good boy</p>
    </div>
  )
}

export default App
