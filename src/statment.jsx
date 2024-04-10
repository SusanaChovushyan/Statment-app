import React, { useState, useEffect } from 'react';

const Statement = () => {
    const [statements, setStatements] = useState([]);
  
    useEffect(() => {
      // Fetch data from JSON Server
      fetch('http://localhost:5001/statements') // Change port to 5001
        .then(response => response.json())
        .then(data => setStatements(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
        <h1>Statements</h1>
        <ul>
          {statements.map(statement => (
            <li key={statement.id}>
              <h2>{statement.title}</h2>
              <p>{statement.description}</p>
              <p>Author: {statement.author}</p>
              <p>Date: {statement.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Statement;