var glob = require("glob");
var fs = require("fs");

const regex = new RegExp(/[a-zA-Z]+\("[^\t)]*\)(\.[^\)]*\))?/gm);

glob.sync("./?(emails)/*.js").forEach(file => {
  addTranslations(file);
});

function addTranslations(file) {
  var data = fs.readFileSync(file, "utf8");
  if (data[0] !== "/") {
    var matches = data.match(regex);
    if (matches) {
      matches = matches.map(match =>
        match.replace("t(", "\n").replace(")", "")
      );
      data = "/** TRANSLATIONS\n[" + matches.toString() + "\n]\n**/\n" + data;
      fs.writeFileSync(file, data);
    }
  }
}

