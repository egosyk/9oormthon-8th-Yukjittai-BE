const express = require('express');
const { openai } = require('../utils/openAI');

const router = express.Router();

router.post("/message", async (req, res) => {
  const message = req.body.message;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4-0314", // 혹은 다른 모델
      messages: [{ "role": "user", "content": message }],
      max_tokens: 1000
    });

    console.log(chatCompletion.choices[0].message.content);
    res.send(chatCompletion.choices[0].message.content); 
  } catch (error) {
    console.error("Error in OpenAI Chat Completion:", error);
    res.status(500).send("Error processing your request");
  }
});

module.exports = router;