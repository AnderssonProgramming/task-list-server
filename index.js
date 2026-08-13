const express = require("express");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/tasks", listViewRouter);
app.use("/tasks", listEditRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
