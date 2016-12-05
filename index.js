#!/usr/bin/env node

const exec = require('child_process').exec

exec('node '+__dirname+'\\node_modules\\generator-core\\app.js -f '+__dirname+'\\plugin')
