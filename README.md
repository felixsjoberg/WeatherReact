# Weather Application with SMHI API

## Table of contents

- [Commands](#Commands)
- [Information](#Information)
- [Specifikation](#Specifikation)
- [Verktyg](#Verktyg)
- [Författare](#Författare)

## Commands

By using the following commands you can start the application.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm install`

Install all the dependencies for the application.

## Information


### Specifikation
Vid arbetet med denna inlämningsuppgift skall du visa din kunskap kring att utveckla
användargränssnitt i JavaScript med stöd av react.
Användargränssnittet är kopplat till ett backend i form av ett API från SMHI Open data (
http://opendata.smhi.se/apidocs/metobs/index.html ).

Från detta API kan man läsa metrologiska data, och i användargränssnittet skall visas temperatur från
API: et baserat på vilken användare som är inloggad.
Användare i systemet kan läsas från API: et som har url:n
https://jsonplaceholder.typicode.com/users . Användare med id 1-3 är kopplad till tre olika svensk
städer (Stockholm, Göteborg, Malmö).

Då laddningstiden visas skall de vara möjligt för användare med id 1-3 att login och få upp
temperaturen för ”rätt” stad skall visa i användargränssnittet. Användare med id större än 4, samt
användare som saknas i API: et
( https://jsonplaceholder.typicode.com/users ) skall inte kunna loggian. Följande bibliotek skall
användas i din lösning: Reakt, Reakt, Reakt Bootstrap och React Router.

### Verktyg
- React & JavaScript
- React-Boostrap & CSS
- React-Router


## Författare
- Github - [Felix Sjöberg](https://github.com/felixsjoberg)



