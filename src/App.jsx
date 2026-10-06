import React from 'react';
import Navbar from './assets/components/Navbar.jsx'
import './assets/components/queue.css'
 import Section1 from './assets/components/Section1.jsx'
import Section2 from './assets/components/Section2.jsx'
import { useState } from 'react';

const App = () => {
  const [queue, setqueue] = useState([])  


  const addtoqueue=(customer)=>{
    // add data to queue
    setqueue([...queue,{...customer,id:Date.now(),status:'wating'}])
    console.log(customer);
    
  }
  const updatestatus=(id,newstatus)=>{
    // change data in queue
    setqueue(queue.map((customer)=>
     customer.id==id 
    ?{...customer,status:newstatus}
    :customer
    ))
  }
  const removefromqueue=(id)=>{
    // remove data from queue
    setqueue(queue.filter(customer =>customer.id !==id))
  }


const clearQueue = () => {
  setqueue([])
}
  return (
    <>
      <Navbar  queue={queue}  />
      <div className="queue-app-container">
        <Section1 onAdd={addtoqueue} />
        <Section2 queue={queue} update={updatestatus} onremove={ removefromqueue } clear={clearQueue}   />
      </div>
    </>
  );
};

export default App;