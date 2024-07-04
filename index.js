const axios = require("axios");
const { encode } = require("urlencode");

function sendSms(apiKey, numbers, senderId, message) {
  try {
    //   const msg = encode(
    //     "Hi there, thank you for sending your first test message from Textlocal. Get 20% off today with our code: 222222."
    //   );
    //   const number = "9555090398";
    //   const apikey = "Njg0YjZjNzQ0ZTUxNTc2ZjYyNjc2MzRkMzI0ZTc3Nzk=";
    //   const sender = "600010";

    const data = {
      apikey: apiKey,
      sender: senderId,
      numbers: numbers,
      message: encode(message),
    };

    axios
      .get("https://api.textlocal.in/send", { params: data })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        return new Error("Error in making request!");
      });
  } catch (error) {
    console.error(error);
    return new Error("Error in function, Internal server error!");
  }
}

module.exports = { sendSms };
