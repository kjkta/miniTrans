"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTranslations = void 0;
var miniTrans = {
  messages: {},
  locale: "en"
};

var getTranslation = function getTranslation(msgId) {
  if (miniTrans.locale === "en") return msgId;
  var msg = miniTrans.messages[miniTrans.locale][msgId];
  if (msg) return msg;else return msgId;
  return "";
};

var makeTranslations = function makeTranslations(messages, locale) {
  miniTrans.messages = messages;
  miniTrans.locale = locale;
  return getTranslation;
};

exports.makeTranslations = makeTranslations;