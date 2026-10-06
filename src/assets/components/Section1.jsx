
import { Plus, User, Layers, ChevronDown, UserPlus, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const Section1 = ({ onAdd }) => {
  const [name,setname]=useState('')
  const [service,setservices]=useState('')

  const onsubmit=(e)=>{
    e.preventDefault()

    if(!name.trim()  ||  !  service.trim())return  
    onAdd({name,service})
    setname('')
    setservices('')
    console.log("button clicked")
  }

  return (
    <div className="sidebar">
      <div className="panel">
        <div className="panel-header">
          <div className="icon-box-blue">
            <Plus size={20} />
          </div>
          <h2 className="panel-title">Add to Queue</h2>
        </div>

        <div className="form-group">
          <label className="form-label">Customer Name</label>
          {/* main form tag */}
          <form  onSubmit={onsubmit}>
            {/* input tag */}
            <div className="input-wrapper">
              <User className="input-icon" />
              <input onChange={(e)=> setname(e.target.value)} type="text" className="form-input" value={name} placeholder="Enter customer name" />
            </div>
            
{/* select feild */}
        <div className="form-group">
          <label className="form-label">Service Type</label>
          <div className="input-wrapper">
            <Layers className="input-icon" />
            <select value={service} onChange={(e)=>setservices(e.target.value)} className="form-input form-select" >
              <option value="" disabled hidden>Select service</option>
              <option value="payment">Payment</option>
              <option value="consultation">Consultation</option>
              <option value="support">Support</option>
            </select>
            <ChevronDown className="select-icon" />
          </div>
        </div>
{/* submit button */}
        <button  type='submit' className="btn btn-primary mt-4">
          <UserPlus size={18} />
          Add Customer
        </button>
        </form>
      </div>
   </div>

   {/* avable services secssion */}
      <div className="panel services-panel">
        <div className="services-header">
          <Lightbulb size={18} />
          Available Services
        </div>
        <div className="service-item">
          <div className="dot dot-blue"></div>
          Payment
        </div>
        <div className="service-item">
          <div className="dot dot-green"></div>
          Consultation
        </div>
        <div className="service-item">
          <div className="dot dot-orange"></div>
          Support
        </div>
      </div>
    </div>
  );
};

export default Section1;
