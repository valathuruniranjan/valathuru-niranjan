import React,{Component, useState} from 'react';
import { render } from '@testing-library/react';
import './App.css';

function App() {
  const [users,setUser] = useState([]);

  const loadUsers = async() =>{ 
    console.log("before await");

    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonResponse = await response.json();

    setUser(jsonResponse.data);
    console.log(users);
  }

  return (
      <div className="App">
        <div className="nav-cont">
        <div className="nav-bar center-align">
        <h2>ZIPPY</h2>
        <button onClick={loadUsers}>Get Data</button>
        </div>
        </div>
        <div className="container-1">
        <div className="container-1-cont">
          {users.map(({id,email,first_name,last_name,avatar}) =>(
            <div className="profile-cont">
              <img key={id} src={avatar}></img>
              <h3 key = {id}>{first_name} {last_name}</h3>
              <p>{email}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
  );
}

export default App;
