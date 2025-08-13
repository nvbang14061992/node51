import express from "express";
import rootRouter from "./src/routers/root.router";
import { appError } from "./src/common/app-error/app-error.error";
import constants from "./src/common/constant/app.constant";

// npm i extensionless
// khong can them duoi .js cho import modules
const app = express();


app.get('/api/', (req, res) => {
    res.json("Check server working OK!!!")
});

// add middleware to parse body from Bytestream to json
app.use(express.json());

// routing
app.use("/api", rootRouter);

app.use(appError);

app.listen(constants.PORT, () => {
    console.log(`Server is running on http://localhost:${constants.PORT}`
)});