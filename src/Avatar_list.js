import React from 'react';
import 'tachyons';
import "./App.css";

function Avatar_list({name,profile}) {
  return (
             <div className="  App Avatar ma4 bg-light-purple dib pa2 tc grow shadow-4">
        
                <img src={"https://joeschmoe.io/api/v1/" + name} />
                <h3> Mr. {name} </h3>
                 <p> {profile} Developer</p>

           </div>
    
  );
}

export default Avatar_list; 