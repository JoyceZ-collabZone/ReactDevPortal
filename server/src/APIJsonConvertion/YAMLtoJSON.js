const yaml = require("js-yaml");
const fs = require("fs");
const sourceDir = "./yaml/";

fs.readdir(sourceDir, (err, files) => {
  files.forEach((file) => {
    const obj = yaml.load(fs.readFileSync(`./${file}`, { encoding: "utf-8" }));
    const fileName = file.split(".")[0];
    console.log(fileName);
    fs.writeFileSync(`./json/${fileName}.json`, JSON.stringify(obj, null, 2));
  });
});
