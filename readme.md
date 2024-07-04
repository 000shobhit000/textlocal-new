# This package provide TextLocal SMS api integration in node.js.

Further updates will be coming soon.

### Follow these codes for easy setup.

const {sendSms} = require("textlocal-new");

// sendSms is synchronous function.

sendSms(apiKey, numbers, senderId, message)

example: sendSms("yourApiKey", "number(s)", "your DLT registered sender/Entity Id", "your message")
