import { Router } from "express";
import System from "../models/System.js";
import Planet from "../models/Planet.js";
import Visitor from "../models/Visitor.js";

const router = Router();

router.get("/systems/:starName", async (req, res) => {
  try {
    const starName = req.params.starName;
    const showVisitors = req.query.extend;
    let planets = [];
    if (showVisitors === "true") {
      planets = (
        await System.findOne({ starName }).populate({
          path: "planets",
          populate: { path: "visitors", populate: { path: "homePlanet" } },
        })
      ).planets;
      planets = planets.map(
        (p, idx) =>
          `${idx + 1}. ${p.name} has ${
            p.visitors.length
          } visitor(s): ${p.visitors
            .map((v) => `${v.name} from ${v.homePlanet.name}`)
            .join(", ")}. `
      );
    } else {
      planets = (
        await System.findOne({ starName }).populate("planets")
      ).planets.map(
        (p, idx) => `${idx + 1}. ${p.name} has ${p.visitors.length} visitor(s).`
      );
    }
    res.send(planets);
  } catch (error) {
    console.log(error);
    res.send(400).send({ msg: error.msg });
  }
});

router.get("/planets/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const { system, visitors } = await Planet.findOne({ name })
      .populate({
        path: "visitors",
        populate: { path: "homePlanet" },
      })
      .populate("system");
    res.send([
      `${name} is in ${system.starName} system, and has ${visitors.length} visitor(s):`,
      ...visitors.map(
        (v, idx) => `${idx + 1}. ${v.name} from ${v.homePlanet.name}`
      ),
    ]);
  } catch (error) {
    console.log(error);
    res.send(400).send({ msg: error.msg });
  }
});

router.get("/visitors/:starName", async (req, res) => {
  try {
    const starName = req.params.starName;
    const planets = (
      await System.findOne({ starName }).populate({
        path: "planets",
        populate: { path: "visitors", populate: { path: "homePlanet" } },
      })
    ).planets;
    const visitors = new Set();
    planets.forEach((p) => {
      p.visitors.forEach((v) =>
        visitors.add(`${v.name} from ${v.homePlanet.name}`)
      );
    });

    res.send([...new Set(visitors)].map((v, i) => `${i + 1}. ${v}`));
  } catch (error) {
    console.log(error);
    res.send(400).send({ msg: error.msg });
  }
});

router.get("/visitors/:name/star", async (req, res) => {
  try {
    const name = req.params.name;
    const starName = (
      await Visitor.findOne({ name }).populate({
        path: "homePlanet",
        populate: { path: "system" },
      })
    ).homePlanet.system.starName;
    res.send(starName);
  } catch (error) {
    console.log(error);
    res.send(400).send({ msg: error.msg });
  }
});

export default router;
