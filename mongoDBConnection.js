const mongoose =require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGOURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
