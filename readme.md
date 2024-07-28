# textlocal-new

### TextLocal SMS api integration in node.js.

[![npm](https://img.shields.io/npm/v/textlocal-new)](https://www.npmjs.com/package/textlocal-new)
[![npm](https://img.shields.io/npm/dw/textlocal-new)](https://www.npmjs.com/package/textlocal-new)
[![install size](https://packagephobia.now.sh/badge?p=textlocal-new)](https://packagephobia.now.sh/result?p=textlocal-new)
[![GitHub issues](https://img.shields.io/github/issues/namanattri/textlocal-new)](https://github.com/namanattri/textlocal-new/issues)

Updated [textlocal](https://www.textlocal.in/) client for nodejs.
Further updates will be coming soon.

## Installation Details

```bash
$ npm i textlocal-new
```

## Usage

These functions are straight forward and dont return any promise.

### Send an SMS to single contact

```js
const { sendSms } = require("textlocal-new");

sendSms(apiKey, numbers, senderId, message);
```

### Example

```js
sendSms(
  "yourApiKey",
  "number(s)",
  "your DLT registered sender/Entity Id",
  "your message"
);
```

## License

[MIT](LICENSE)
