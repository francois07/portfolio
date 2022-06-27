const ghpages = require("gh-pages");

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "main",
    repo: "https://github.com/francois07/francois07.github.io",
  },
  () => {
    console.log("Deploy Complete!");
  }
);
