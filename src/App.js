import React,{ useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import Parent from './Components/Parent';
import NameList from './Components/NameList';
import ConditionalRendering from './Components/ConditionalRendering';
import Eventbind from './Components/Eventbind';
import {Greet} from './Components/greet';
import Welcome from './Components/welcome';
import Message from './Components/message';
import Counter from './Components/counter';
import FunctionClick from './Components/functionClick';
import { db } from './FirebaseConn';
import firebase from 'firebase';

const addTodo = (event) =>{
  //This will fire off when we click the button
  db.collection('todos').add({
    todo: 'Mayur',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
 
  // setTodos([...todos,input])
  console.log('It works')
  
}
function App() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div className="App">
      <Calendar 
        onClickDay={console.log({value})}
        onChange={onChange} 
        value={value}
      />
      <Greet name='Mayur' heroname='is hero'>
        <button onClick={addTodo}>This is a children</button>
      </Greet>
      <Welcome name='Dear !.'/>
     <Message/>
     <Counter/>
     <FunctionClick></FunctionClick>
     <Eventbind/>
     <Parent/>
    <ConditionalRendering/>
    <NameList/>
      </div>
);

}

export default App;