const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../data/data.json");
const file = readFile(filePath);
let content = file && JSON.parse(file) || [];

function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
    }
}

function jsonContent(content) {
    const jsonContent = JSON.stringify(content, null, 2);
    fs.writeFileSync(filePath, jsonContent);
}

module.exports = {
    jsonContent,
    content
}