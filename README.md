# cypress-automatizacion-pruebas

## Iniciarlizar npm

`npm init`

## Instalar cypress

`npm intall cypress --save-dev`

## Instalar cypress-xpath

`npm install -D cypress-xpath`

Once installed, require('cypress-xpath') on file

## Instalar cypress-file-upload

`npm install --save-dev cypress-file-upload`

## Instalar cypress-drag-drop

`npm install --save-dev @4tw/cypress-drag-drop`

## Run with console

`npx cypress run `

## Run with console desde navegador

`npx cypress run --headed `

## Run with console desde Chrome

`npx cypress run --browser chrome `

## Run with console a determined file

`npx cypress run --spec "cypress\integration\seccion-2\asserts.spec.js"`

## Run with console a determined folder (all files from folder)

`npx cypress run --spec "cypress\integration\seccion-2\*"`

## Run with command 'run' and will generate a videos of the test runned in folder 'videos'

`npx cypress run --spec "cypress/integration/seccion-6/page-object-1.spec.js" `

## Install Cucumber

`npm install --save-dev cypress-cucumber-preprocessor`

## Config Cucumber

cypress/plugins/index.js

```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {`
    on('file:preprocessor', cucumber())
}

```

On cypress.json

```
{
  "testFiles": "**/*.feature"
}
```

On package.json

```
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```
