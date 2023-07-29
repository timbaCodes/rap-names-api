const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "London,England",
  },
  "chance the rapper": {
    age: 23,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "Chicago,Illonois",
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.get("/api", (request, response) => {
  response.json(rappers);
});
app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  // console.log(rappers[rapperName].age);
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["unknown"]);
  }
});
app.listen(PORT, () => {
  console.log(`the server is now running on ${PORT} ! Betta Go Catch it!`);
});
