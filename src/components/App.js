
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Random Black Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random  Black Dog" />
      )}
    </div>
  );
}

export default App;
