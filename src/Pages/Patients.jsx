import React, { useState, useEffect, useRef } from 'react';
import './Patients.css';
import data from '../Assets/data.json';
import { Link } from 'react-router-dom';
import left from '../Assets/left.svg';

function Patients({ setdet }) {
  const [value, setvalue] = useState('');
  const [query, setquery] = useState('');
  const [div, setdiv] = useState([]);
  const ref1 = useRef();

  const search = (event) => {
    setvalue(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setquery(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  const querydata = data.filter((item) => {
    const info =
      item.patientName.toLowerCase().includes(query.toLowerCase()) ||
      item.contact.toLowerCase().includes(query.toLowerCase()) ||
      String(item.age).includes(query);
    return info;
  });

  const divadd = () => {
    setdiv([
      ...div,
      { id: Date.now(), patientName: 'Pavan', age: 24, contact: '996547382' },
    ]);
  };

  return (
    <div className="grid-container">
      

      <div>
        <Link to="/">
          <img src={left} alt="" />
        </Link>
      </div>

      <div className="grid-input">
        <input
          value={value}
          ref={ref1}
          onChange={search}
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="info-card">
        <h3>Name</h3>
        <h3>Age</h3>
        <h3>Contact</h3>
      </div>

      {/* Patients from data.json */}
      {querydata.map((item, index) => (
        <Link
          key={index}
          style={{ textDecoration: 'none' }}
          to="/patients/info"
        >
          <div onClick={() => setdet(item.id)} className="grido">
            <div>{item.patientName}</div>
            <div>{item.age}</div>
            <div>{item.contact}</div>
          </div>
        </Link>
      ))}

      
      {div.map((p) => (
        <div key={p.id} className="grido">
          <div>{p.patientName}</div>
          <div>{p.age}</div>
          <div>{p.contact}</div>
        </div>
      ))}
      <div className="grid-b">
        <button onClick={divadd}>Add Patient</button>
      </div>
    </div>
  );
}

export default Patients;
