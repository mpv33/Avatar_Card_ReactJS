import React from 'react'
import Avatar_list from './Avatar_list'
import "./App.css";
function Avatar() {
  return (
      <div className="App">
        <h1 > Welcome in Avatar World </h1>
         <Avatar_list name="Mateshwari" profile="Python"/>
          <Avatar_list name="Rajesh" profile="HTML"/>
          <Avatar_list name="Sunny" profile="JAVA"/>
          <Avatar_list name="Saif" profile="Django"/>
        

     </div>
    
  );
}

export default Avatar; 