
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BreedDetail = () => {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    const fetchBreedDetail = async () => {
      try {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${breedId}`);
        setBreed(response.data);
      } catch (error) {
        console.error('Error fetching cat breed detail:', error);
      }
    };

    fetchBreedDetail();
  }, [breedId]);

  return (
    <div>
      <h1>Breed Detail</h1>
      {breed && (
        <div>
          <h2>{breed.name}</h2>
          <p>Origin: {breed.origin}</p>
          <p>Weight: {breed.weight.metric} kg</p>
          <p>Hairless: {breed.hairless ? 'Yes' : 'No'}</p>
          <img src={`https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`} alt={breed.name} />
          {breed.wikipedia_url && (
            <p>
              <a href={breed.wikipedia_url} target="_blank" rel="noopener noreferrer">
                Wikipedia Link
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BreedDetail;
