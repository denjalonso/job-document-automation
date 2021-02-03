const fs = require('fs')
const inquirer = require('inquirer')
const {PDFNet} = require('@pdftron/pdfnet-node')

const documentTemplate = process.argv[2]
const newDocumentPrefix = process.argv[3] || 'document_prefix_'
if (!documentTemplate) {
  throw new Error('We need a document input template file')
}
const prompt = inquirer
  .prompt([{name: 'release', message: `What's the release version?`}])
  .then(async ({release}) => {
    if (!release) {
      throw new Error('Not generate document because none was provided')
    }
    const newDoument = `${newDocumentPrefix}${release}.docx.pdf` // TODO extension
    fs.copyFileSync(documentTemplate, newDoument, fs.constants.COPYFILE_EXCL)
    await replaceData(newDoument)
  })

async function replaceData(newDocument) {
    console.log('Replace data ...')
}
