import React, { useEffect, useState } from 'react';

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data => setPlants(data));
  }, []);

  return (
    <ul className="cards">
      {plants.map(plant => (
        <li key={plant.id} className="card" data-testid="plant-item">
          <img alt={plant.name} src={plant.image} />
          <h4>{plant.name}</h4>
          <p>Price: {plant.price}</p>
          <button className="primary">In Stock</button>
          <button>Delete</button>
          <form>
            <input placeholder="New price..." step="0.01" type="number" defaultValue={plant.price} />
            <button type="submit">Update Price</button>
          </form>
        </li>
      ))}
    </ul>
  );
}

export default PlantPage;