import Planet from "./models/Planet.js";
import System from "./models/System.js";
import Visitor from "./models/Visitor.js";

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const visitors = [
  { name: "Aleksey Leonov", homePlanet: "Earth" },
  { name: "Neil Armstrong", homePlanet: "Earth" },
  { name: "Akiyama Tohiro", homePlanet: "Earth" },
  { name: "Yang Liwei", homePlanet: "Earth" },
  { name: "Rakesh Sharma", homePlanet: "Earth" },
  { name: "Trekvods", homePlanet: "Mars" },
  { name: "Trels", homePlanet: "Mars" },
  { name: "Ehmir", homePlanet: "Jupiter" },
  { name: "Delaih", homePlanet: "Jupiter" },
  { name: "Ocoir", homePlanet: "Saturn" },
];

const getVisitedPlanets = async (min = 0, max = 7, n = 3) => {
  const planetsIndices = Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
  return await Promise.all(
    planetsIndices.map(
      async (idx) => await Planet.findOne({ name: planets[idx] })
    )
  );
};

const createSystem = async (starName) => {
  await System.create(new System({ starName, planets: [] }));
};

const createPlantes = async (starName, planets) => {
  const system = await System.findOne({ starName });
  await Planet.insertMany(
    planets.map((p) => new Planet({ name: p, system, visitors: [] }))
  );
};

const createVistors = async (visitors) => {
  const plantesVisitors = {};
  await Visitor.insertMany(
    await Promise.all(
      visitors.map(async ({ name, homePlanet }) => {
        homePlanet = await Planet.findOne({ name: homePlanet });
        const visitedPlanets = (await getVisitedPlanets()).filter(
          (p) => p.name != homePlanet.name
        );
        const visitor = new Visitor({
          name,
          homePlanet,
          visitedPlanets,
        });

        visitedPlanets.forEach(
          (planet) =>
            (plantesVisitors[planet.name] = [
              ...(plantesVisitors[planet.name] || []),
              visitor,
            ])
        );
        return visitor;
      })
    )
  );
  return plantesVisitors;
};

const populateDB = async () => {
  try {
    const starName = "sun";
    await createSystem(starName);
    await createPlantes(starName, planets);
    const plantesVisitors = await createVistors(visitors);

    for (const [planet, visitors] of Object.entries(plantesVisitors)) {
      await Planet.findOneAndUpdate({ name: planet }, { visitors });
    }

    await System.findOneAndUpdate(
      { starName },
      { planets: await Planet.find({}) }
    );
  } catch (error) {
    console.log(error);
  }
};

export default populateDB;
