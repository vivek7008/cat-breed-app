// BreedList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BreedList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds');
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching cat breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div>
      <h1>Cat Breeds</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id}>
            <Link to={`/breeds/${breed.id}`}>
              {breed.name} - {breed.origin}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreedList;
