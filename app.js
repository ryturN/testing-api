const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const indexRouter = require("./routes/index/index.router");
const usersRouter = require("./routes/users/users.router");
const trashRouter = require("./routes/trash/trash.router");
const rewardsRouter = require("./routes/rewards/rewards.router");
const transactionsRouter = require("./routes/transactions/transactions.router");
const shopRouter = require("./routes/shops/shops.router");
const historyRouter = require("./routes/histories/histories.router");
const directoryRouter = require('./routes/directories/directories.router');
const newsRouter = require("./routes/news/news.router"); //
const uploadRouter= require("./routes/upload/uploadRouter.js");
const uploadController = require("./routes/upload/upload.controller.js");


app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trash", trashRouter);
app.use("/rewards", rewardsRouter);
app.use("/transactions", transactionsRouter);
app.use("/shops", shopRouter);
app.use("/histories", historyRouter);  
app.use('/directories', directoryRouter);
app.use("/news", newsRouter); 
app.use("/api", uploadRouter);
// app.use("/upload", uploadRouter);


module.exports = app;
