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
        <button>This is a children</button>
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