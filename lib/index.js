"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function MiniTrans() {
  var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";

  this.getTranslation = function (msgId) {
    if (locale === "en") return msgId;
    var msg = messages[locale] ? messages[locale][msgId] : false;
    if (msg) return msg;else return msgId;
    return "";
  };
}

function makeTranslations(messages, locale) {
  var miniTrans = new MiniTrans(messages, locale);
  return miniTrans.getTranslation;
}

exports.makeTranslations = makeTranslations;
