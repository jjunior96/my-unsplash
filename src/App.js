import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    api.get(`photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`).then(response => {
      setPhotos(response.data) ;
    });

  }, []);


  return (
    <div>
      <ul className="photos-list" >
      {photos.map(photo => {
          return (
            <li key={photo.id} >
              <a href={photo.urls.raw} target="_blank" rel="noopener noreferrer">
                <img src={photo.urls.raw} alt={photo.description}/>
              </a>
            </li>  
          )
        
      })}
      </ul>
    </div>
  );
}

export default App;
