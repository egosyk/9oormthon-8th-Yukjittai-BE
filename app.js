require("dotenv").config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { routes } = require('./api/routes');
const { globalErrorHandler } = require('./api/utils/error');

const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(morgan("combined"));
  app.use(express.json());
  app.use(routes);

  app.get("/ping", (req, res, next) => {
    res.status(200).json({ message: "pong" });
  });

  app.all("*", (req, res, next) => {
    const err = new Error(`Can't fine ${req.originalUrl} on this server!`);

    err.statusCode = 404;

    next(err);
  });

  app.use(globalErrorHandler);

  return app;
};

module.exports = { createApp };



// GPT ai 


const express = require("express");
const bodyParser = require("body-parser");
const OpenAI  = require('openai');

require("dotenv").config();

const app = express();
app.use(bodyParser.json());


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.post("/message", (req, res) => {
    const message = req.body.message;

    const openFun = async() => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4-0314", //gpt-3.5-turbo
        messages: [{"role": "user", "content": message,}],
        max_tokens:1000
  });
  console.log(chatCompletion.choices[0].message.content);
  res.send(chatCompletion.choices[0].message.content); 
    }   
    openFun();   
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log("포트 8000입니다.");
})