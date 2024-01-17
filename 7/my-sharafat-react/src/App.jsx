import { useState } from 'react'
import './App.css'
import Watch from './Commands/Watch/Watch'

function App() {
 const watches= [
  {id:1,name:'apple',price:200},
  {id:2,name:'samsu',price:200},
  {id:3,name:'ximoue',price:200}
 ]
// const Watches = [
//   {
//     "id": 1,
//     "name": "Apple Watch Series 6",
//     "price": 399.99
//   },
//   {
//     "id": 2,
//     "name": "Samsung Galaxy Watch 4",
//     "price": 299.95
//   },
//   {
//     "id": 3,
//     "name": "Fitbit Versa 3",
//     "price": 229.99
//   },
//   {
//     "id": 4,
//     "name": "Garmin Forerunner 945",
//     "price": 549.99
//   },
//   {
//     "id": 5,
//     "name": "Xiaomi Amazfit GTS 2",
//     "price": 179.99
//   }
// ]
// This JSON data represents an array of 5 smartwatches, each with an ID, name, and price. You can modify this data or use it as a template for your needs.







  return (
    <>
     
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
