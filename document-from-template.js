const fs = require('fs')
const inquirer = require("inquirer");

const inputPdf = process.argv[2] // TODO: default file name
if (!inputPdf) {
    throw new Error('We need a pdf input template file')
}
const prompt = inquirer
  .prompt([{ name: "release", message: `What's the release version?` }])
  .then(({ release }) => {
    if(!release) {
        throw new Error('No ')
    }
    fs.copyFileSync(inputPdf, `ANEXOB-RevisionCodigo_${release}.docx`, fs.constants.COPYFILE_EXCL)

  });

function replaceData() {

}