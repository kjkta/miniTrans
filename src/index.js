function MiniTrans(messages = {}, locale = "en") {
  this.messages = messages;
  this.locale = locale;
  this.getTranslation = function(msgId) {
    if (locale === "en") return msgId;
    let msg = messages[locale][msgId];
    if (msg) return msg;
    else return msgId;
    return "";
  };
}

function makeTranslations(messages, locale) {
  let miniTrans = new MiniTrans(messages, locale);
  return miniTrans.getTranslation;
}

export { makeTranslations };
