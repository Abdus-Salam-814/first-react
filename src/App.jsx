import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      <Persion></Persion>
      <div  className='grid'>
      <Money></Money>
      </div>
      
   <div className='grid'>
   <Student score={88} lavle={88}></Student>
    <Student score={44} lavle={21}></Student>
    <Student score={2} lavle={5}></Student>
    <Student ></Student>
    <Todo task={'Learn React'}></Todo>
    <Todo task={'Learn English'} isDone={true}></Todo>
    <Todo task={'Learn Bangla'} isDone={false}></Todo>
   </div>
      
    
    </>
  )
}

function Persion(){
  const age = 25;
  const money = 20;
  const persion ={name: 'sakib', age: 12}
  return <h1>I am {persion.name} with age: {age + money}</h1>
}

function Money(){
  const ages = [12, 23, 44, 555, 666, 77, 7788, 99, 100, 500, 9000];
  return(
    ages.map(age => <h2 className='money'>Money: {age} Taka</h2>)
  )
}

const {score, lavle} = {score: 22, lavle: 99}


function Student({score = 0, lavle = 1}){
  console.log(score, lavle)
  return(<div className='money'>
  <h1>StudenT</h1>
  <li>Score: {score}</li>
  <li>Lavle: {lavle}</li>
  
  </div>
   
  )

}

export default App
