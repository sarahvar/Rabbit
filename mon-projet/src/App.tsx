import React, { useEffect, useState } from 'react';

// Hunter class definition
class Hunter {
  bullets: number;
  hungerLevel: number;
  distanceTravelled: number;
  position: [number, number];

  constructor() {
    this.bullets = 10; // The hunter starts with 10 bullets
    this.hungerLevel = 5; // Moderate hunger level
    this.distanceTravelled = 0; // Initially, no distance covered
    this.position = [0, 0]; // Starting position
  }

  // Method to simulate hunting
  hunt(forest: Forest) {
    console.log("Hunter is trying to hunt...");
    
    const distance = Math.floor(Math.random() * 3) + 1; // Move between 1 and 3 kilometers
    this.distanceTravelled += distance;
    this.position[0] += distance;

    console.log(`Hunter has moved to position: [${this.position[0]}, ${this.position[1]}]`);

    forest.rabbits.forEach(rabbit => {
      if (this.isRabbitNearby(rabbit)) {
        if (this.bullets > 0) {
          this.bullets -= 1; // Use a bullet
          console.log("Hunter spotted a rabbit! Bullets left:", this.bullets);
          if (Math.random() > 0.7) { // 30% chance of rabbit escaping
            console.log("The rabbit escaped just in time!");
            rabbit.escape();
          } else {
            console.log("The rabbit was caught! (This should not happen in the game logic)");
          }
        } else {
          console.log("No bullets left! Hunter can't shoot.");
        }
      }
    });
  }

  // Check if the rabbit is nearby
  isRabbitNearby(rabbit: Rabbit) {
    return Math.abs(this.position[0] - rabbit.position[0]) <= 2; // Check if the rabbit is within 2 kilometers
  }
}

// Rabbit class definition
class Rabbit {
  speed: number;
  color: string;
  distanceTravelled: number;
  position: [number, number];

  constructor(color: string) {
    this.speed = Math.floor(Math.random() * 5) + 6; // Rabbits are fast (6-10)
    this.color = color;
    this.distanceTravelled = 0; // Initially, no distance covered
    this.position = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]; // Random position
  }

  // Escape method for the rabbit
  escape() {
    const escapeDistance = this.speed + Math.floor(Math.random() * 3) + 1; // Escapes quickly
    this.distanceTravelled += escapeDistance;
    this.position[0] += escapeDistance;
    console.log(`${this.color.charAt(0).toUpperCase() + this.color.slice(1)} rabbit has escaped to position: [${this.position[0]}, ${this.position[1]}]`);
  }
}

// Burrow class definition
class Burrow {
  position: [number, number];
  occupied: boolean;

  constructor(x: number, y: number) {
    this.position = [x, y];
    this.occupied = false; // Initially, the burrow is not occupied
  }

  // Mark the burrow as occupied
  occupy() {
    this.occupied = true; // The burrow is now occupied
  }

  // Free the burrow
  free() {
    this.occupied = false; // The burrow is now free
  }
}

// Forest class definition
class Forest {
  burrows: Burrow[];
  rabbits: Rabbit[];
  totalSquareKm: number;
  numTrees: number;

  constructor(totalSquareKm: number, numTrees: number) {
    this.burrows = Array.from({ length: 3 }, () => new Burrow(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))); // Randomly placed burrows
    this.rabbits = Array.from({ length: 5 }, () => new Rabbit(Math.random() < 0.5 ? 'white' : 'brown')); // Randomly colored rabbits
    this.totalSquareKm = totalSquareKm;
    this.numTrees = numTrees;
  }

  // Simulate the hunting process
  simulate(hunter: Hunter) {
    console.log('Simulating the hunting process...');
    for (let i = 0; i < 5; i++) { // Simulate 5 hunting attempts
      hunter.hunt(this);
    }
  }
}

const App: React.FC = () => {
  const [forest, setForest] = useState<Forest | null>(null);
  const [hunter, setHunter] = useState<Hunter | null>(null);

  // Initialize the forest and hunter when the component mounts
  useEffect(() => {
    const newForest = new Forest(10, 100);
    const newHunter = new Hunter();
    setForest(newForest);
    setHunter(newHunter);
    newForest.simulate(newHunter);
  }, []);

  return (
    <div>
      <h1>Hunting Simulation</h1>
      {forest && hunter ? (
        <div>
          <h2>Hunter Status:</h2>
          <p>Bullets left: {hunter.bullets}</p>
          <p>Distance travelled: {hunter.distanceTravelled}</p>
          <p>Position: [{hunter.position[0]}, {hunter.position[1]}]</p>
          <h2>Forest Status:</h2>
          <p>Total square km: {forest.totalSquareKm}</p>
          <p>Number of trees: {forest.numTrees}</p>
          <h2>Rabbits:</h2>
          <ul>
            {forest.rabbits.map((rabbit, index) => (
              <li key={index}>
                {rabbit.color.charAt(0).toUpperCase() + rabbit.color.slice(1)} Rabbit - Position: [{rabbit.position[0]}, {rabbit.position[1]}]
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Initializing simulation...</p>
      )}
    </div>
  );
};

export default App;



