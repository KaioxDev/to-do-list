const express = require("express");
const checklistRoutes = require("./src/routes/checklist");

const app = express();
app.use(express.json());

app.use('/checklists', checklistRoutes);

app.listen(3000, () => {
  console.log("Servidor foi iniciado na porta 3000");
});
