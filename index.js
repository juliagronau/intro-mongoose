import "dotenv/config.js";
import express from "express";
import "./db/client.js";
import users from "./routes/users.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/users", users);

app.get("/", (req, res) => res.send("<h1>API mit mongoose</h1>"));

app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);
