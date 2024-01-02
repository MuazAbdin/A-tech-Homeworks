import { Schema, model } from "mongoose";

const visitorSchema = Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

export default model("Visitor", visitorSchema);
