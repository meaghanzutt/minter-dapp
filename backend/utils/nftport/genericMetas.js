const path = require("path");
const basePath = process.cwd();
const fs = require("fs");
const { PRESALE_MINT_START_DATE } = require("../../src/config");
const buildDir = path.join(basePath, "/build");

const {
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  extraMetadata
} = require(`${basePath}/src/config.js`);

if (!fs.existsSync(path.join(buildDir, "/genericJson"))) {
  fs.mkdirSync(path.join(buildDir, "/genericJson"));
}

console.log("Starting generic metadata creation.");

const genericObject = {
  "name": GENERIC_TITLE,
  "description": GENERIC_DESCRIPTION,
  "image": GENERIC_IMAGE,
  "external_url": extraMetadata.external_url || null,
  "date": PRESALE_MINT_START_DATE,
  "compiler": "HashLips Art Engine - codeSTACKr Modified"
}

fs.writeFileSync(
  `${buildDir}/genericJson/_metadata.json`,
  JSON.stringify(genericObject, null, 2)
);

console.log("Generic metadata created!");