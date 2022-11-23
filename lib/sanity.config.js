import { deskTool } from "sanity/desk";

// schema types
import discipline from "../schemas/discipline";
import project from "../schemas/project";
import technologies from "../schemas/technologies";

export const config = {
  projectId: "jx0lpuh5",
  dataset: "production",
  token:
    "skCqyko0KdoxL4eCT2QpdEIBxgdrchHo1At0awbM7wASUOORUCWpRlq9eDrPEwWIXFt7dkGzEXOm4PFYhYtTyp9Q4WSQICEUCaJ0doc3XHaePKmt5XYuKWh4RCts19wUOG07UfuvtfvfmlyfKtwdFrTwSRyZtKZEE4tPGfDLOQDbhSxmh0mU",
  useCdn: false,
  title: "vjketData",
  apiVersion: "2021-10-21",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: [project, discipline, technologies],
  },
};
