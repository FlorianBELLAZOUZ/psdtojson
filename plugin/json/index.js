const Fs = require('fs')

exports.init = generator=>{
  generator
    .getDocumentInfo()
    .then(saveToJson)
    .then(()=>generator.shutdown())
    .catch(console.log)
}

const stringify = doc=>JSON.stringify({doc},0,2)
const saveToJson = doc=>Fs.writeFile('export.json',stringify(doc))
