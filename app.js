const express = require("express");
app = express();

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


app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trash", trashRouter);
app.use("/rewards", rewardsRouter);
app.use("/transactions", transactionsRouter);
app.use("/shops", shopRouter);
app.use("/histories", historyRouter);  
app.use('/directories', directoryRouter);


module.exports = app;
