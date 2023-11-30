const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/directions', async (req, res) => {
  try {
    const kakaoResponse = await axios.post('https://apis-navi.kakaomobility.com/v1/destinations/directions', req.body, {
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`, // 환경 변수에서 API 키 가져오기
        'Content-Type': 'application/json'
      }
    });
    res.json(kakaoResponse.data);
  } catch (error) {
    console.error('Error calling Kakao Directions API:', error);
    res.status(500).send('Error processing your request');
  }
});

module.exports = router;