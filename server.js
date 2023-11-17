import { app } from "./app.js";
import database from "./database/database.js";
const port = 3000;
database;

app.listen(port, () => {
  console.log(`server is working on ${port}`);
});
