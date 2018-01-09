"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTranslations = void 0;
var miniTrans = {
  messages: {},
  locale: "en",
  defaultLocale: "en"
};

var getTranslation = function getTranslation(msgId) {
  if (miniTrans.locale === miniTrans.defaultLocale) return msgId;
  var msg = miniTrans.messages[miniTrans.locale][msgId];
  if (msg) return msg;
  var defaultLanguageMsg = miniTrans.messages.en[msgId];
  if (defaultLanguageMsg) return defaultLanguageMsg;
  return "";
};

var makeTranslations = function makeTranslations(messages, locale) {
  miniTrans.messages = messages;
  miniTrans.locale = locale;
  return getTranslation;
};

exports.makeTranslations = makeTranslations;