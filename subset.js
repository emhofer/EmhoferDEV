// Import fontawesome-subset
import { fontawesomeSubset } from "fontawesome-subset";

// Create or append a task to be ran with your configuration
fontawesomeSubset(
  {
    brands: [
      "html5",
      "css3",
      "js",
      "python",
      "node-js",
      "react",
      "bootstrap",
      "wordpress",
      "git",
      "linux",
    ],
    solid: ["circle", "circle-half-stroke", "database", "terminal"],
  },
  "assets/fontawesome/webfonts"
);
