import './App.css'
import Counter from './counter';
import Users from './Users';

function App() {

  function handleClick() {
    alert('button clicked');
  }
  /* 1 */
  // function handleClick2() {
  //   alert('button 2 clicked')
  // }
  /* 2 */
  const handleClick2=()=>{
    alert('button 2 click')
  }
  /* 3 */
  const addToFive = (num)=>{
    alert(num + 5);
  }

  return (
    <>

 
      <h1>Vite + React</h1>
      <Counter></Counter>
      <Users></Users>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me2</button>
      <button onClick ={()=>{alert('third clicked')}}>third</button>
      <button onClick ={()=>addToFive(11)}>four</button>

    </>
  )
}

export default App
