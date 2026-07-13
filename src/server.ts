import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
      console.log("RUNNING ON", PORT);
});
