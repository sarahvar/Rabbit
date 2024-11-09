import React, { useEffect, useState } from 'react';

// Hunter class definition
class Hunter {
  bullets: number;
  hungerLevel: number;
  distanceTravelled: number;
  position: [number, number];

  constructor() {
    this.bullets = 10; // Hunter starts with 10 bullets
    this.hungerLevel = 5; // Hunter starts with a hunger level of 5
    this.distanceTravelled = 0; // Starts at the origin
    this.position = [0, 0]; // Hunter's position starts at (0, 0)
  }

  hunt(forest: Forest) {
    console.log("Hunter is hunting...");
    const distance = Math.floor(Math.random() * 3) + 1; // Random distance (1-3)
    this.distanceTravelled += distance;
    this.position[0] += distance; // Hunter moves along the X-axis

    console.log(`Hunter moved to position: [${this.position[0]}, ${this.position[1]}]`);

    forest.rabbits.forEach(rabbit => {
      if (this.isRabbitNearby(rabbit)) {
        if (this.bullets > 0) {
          this.bullets -= 1;
          console.log("Hunter sees a rabbit! Bullets left:", this.bullets);

          // The rabbit has exactly a 70% chance of escaping
          const escapeProbability = 0.7;
          if (Math.random() < escapeProbability) {
            console.log("The rabbit escapes!");
            rabbit.escape();
          } else {
            console.log("The hunter missed the rabbit!");
          }
        } else {
          console.log("Hunter is out of bullets!");
        }
      }
    });
  }

  isRabbitNearby(rabbit: Rabbit) {
    return Math.abs(this.position[0] - rabbit.position[0]) <= 2; // Rabbit is within a distance of 2 from the hunter
  }
}

// Rabbit class definition
class Rabbit {
  speed: number;
  color: string;
  distanceTravelled: number;
  position: [number, number];
  burrow: Burrow | null; // Rabbit can be near a burrow

  constructor(color: string) {
    this.speed = Math.floor(Math.random() * 5) + 6; // Random speed between 6 and 10
    this.color = color;
    this.distanceTravelled = 0;
    this.position = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]; // Random position
    this.burrow = null; // Initially no burrow
  }

  escape() {
    const escapeDistance = this.speed + Math.floor(Math.random() * 3) + 1; // Escape distance based on speed
    this.distanceTravelled += escapeDistance;
    this.position[0] += escapeDistance; // Rabbit moves away
    console.log(`${this.color.charAt(0).toUpperCase() + this.color.slice(1)} rabbit escaped to position: [${this.position[0]}, ${this.position[1]}]`);
  }

  findBurrow(forest: Forest) {
    if (!this.burrow) {
      for (let burrow of forest.burrows) {
        if (!burrow.occupied && Math.abs(this.position[0] - burrow.position[0]) <= 2) {
          burrow.occupy();
          this.burrow = burrow;
          console.log(`${this.color.charAt(0).toUpperCase() + this.color.slice(1)} rabbit found a burrow at position: [${burrow.position[0]}, ${burrow.position[1]}]`);
          break;
        }
      }
    }
  }
}

// Burrow class definition
class Burrow {
  position: [number, number];
  occupied: boolean;

  constructor(x: number, y: number) {
    this.position = [x, y];
    this.occupied = false; // Initially, burrow is not occupied
  }

  occupy() {
    this.occupied = true; // Mark burrow as occupied
  }

  free() {
    this.occupied = false; // Free the burrow
  }
}

// Forest class definition
class Forest {
  burrows: Burrow[];
  rabbits: Rabbit[];
  totalArea: number;
  numTrees: number;

  constructor(totalArea: number, numTrees: number) {
    this.burrows = Array.from({ length: 3 }, () => new Burrow(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))); // 3 random burrows
    this.rabbits = Array.from({ length: 5 }, () => new Rabbit(Math.random() < 0.5 ? 'white' : 'brown')); // 5 rabbits
    this.totalArea = totalArea;
    this.numTrees = numTrees;
  }

  simulate(hunter: Hunter) {
    console.log("Starting hunting simulation...");
    for (let i = 0; i < 5; i++) { // Simulate 5 hunting rounds
      hunter.hunt(this);
      this.rabbits.forEach(rabbit => {
        if (!rabbit.burrow) rabbit.findBurrow(this); // Rabbits try to find a burrow after each round
      });
    }
  }
}

// Main App component
const App: React.FC = () => {
  const [forest, setForest] = useState<Forest | null>(null);
  const [hunter, setHunter] = useState<Hunter | null>(null);

  // Initialize the forest and hunter when the component mounts
  useEffect(() => {
    const newForest = new Forest(10, 1000); // Forest with 10 km² area and 1000 trees
    const newHunter = new Hunter();
    setForest(newForest);
    setHunter(newHunter);
    newForest.simulate(newHunter); // Start the hunting simulation
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
          <p>Total square km: {forest.totalArea}</p>
          <p>Number of trees: {forest.numTrees}</p>
          <h2>Rabbits:</h2>
          <ul>
            {forest.rabbits.map((rabbit, index) => (
              <li key={index}>
                {rabbit.color.charAt(0).toUpperCase() + rabbit.color.slice(1)} Rabbit - Position: [{rabbit.position[0]}, {rabbit.position[1]}], Distance travelled: {rabbit.distanceTravelled} km
              </li>
            ))}
          </ul>
          <h2>Burrows:</h2>
          <ul>
            {forest.burrows.map((burrow, index) => (
              <li key={index}>
                Burrow at position: [{burrow.position[0]}, {burrow.position[1]}] - {burrow.occupied ? "Occupied" : "Free"}
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
