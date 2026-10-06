import React from 'react';
import { Users, RotateCcw, Layers, Clock, Play, Trash2, Inbox } from 'lucide-react';


const Section2 = ({ queue, update, onremove,clear }) => {

const getstatuscolor = (status) => {
  switch (status) {
    case "wating":
      return "pink";

    case "serving":
      return "orange";

    case "completed":
      return "purple";

    default:
      return "white";
  }
};
const getservice = (status) => {
  switch (status) {
      case "consultation":
      return "#10B981";

    case "support":
      return "orange";

    case "payment":
      return "#5C5DFC";

    default:
      return "white";
  }
};

  return (
    <div className='section2'>
      <div className="main-content">
        <div className="main-header">
          <h1 className="main-title">
            <Users size={28} />
            Current Queue
          </h1>
          <button className="btn btn-outline" onClick={clear}>
            <RotateCcw size={16} />
            Reset Queue
          </button>
        </div>

        <div className='queue-cont'>
          <div className="queue-list">


            {queue.length == 0 ? (
              <div className="emptyque">
                <div className="emptyque-icon">
                  <Inbox size={40} />
                </div>
                <h2 className="emptyque-title">Queue is Empty</h2>
                <p className="emptyque-sub">No customers yet. Add someone using the form on the left.</p>
              </div>
            ) : (
              <div >
                {queue.map((customer, index) => (
                  <div key={index} className="queue-card">

                    <div className="queue-number">{index + 1}</div>

                    <div className="queue-info">
                      <div className="queue-name">{customer.name}</div>

                      <div className="queue-details">
                        <div className="detail-item ">
                          <Layers style={{ color: getservice(customer.service)  }}  />
                          <span style={{ color: getservice(customer.service)  }}>{customer.service}</span>
                        </div>

                        <div className="detail-item text-orange-yellow">
                          <Clock  style={{ color: getstatuscolor(customer.status)  }}/>
                          <span style={{ color: getstatuscolor(customer.status)  }}>
                            {customer.status}
                          </span>
                        </div>
                      </div>
                    </div>

                

                    {/* serve button */}

                    <div className="actions">
                      {customer.status == 'wating' && (
                        <button className="btn btn-serve "
                          onClick={() => update(customer.id, 'serving')}
                        >
                          <Play size={16} fill="currentColor" />
                          Serve
                        </button>
                      )}
                      {customer.status == 'serving' && (
                        <button className="btn btn-complete "
                          onClick={() => update(customer.id, 'completed')}
                        >
                          <Play size={16} fill="currentColor" />
                          Serve
                        </button>
                      )}





                      {/*  remove button  */}
                      <button
                        className="btn btn-remove" onClick={() => onremove(customer.id)} >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}







          </div>

        </div>
      </div>
    </div>

  );
};

export default Section2;
