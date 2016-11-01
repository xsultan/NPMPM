# NPMPM
### Forked from [NPMPM]

NPM Postgres Mashup (NPMPM) uses a number of open source projects to work:



[NPMPM]: <https://github.com/rickbergfalk/npm-postgres-mashup>
* async
* commander
* follow
* lodash
* massive
* npm-download-counts
* pg

Edit `getAllPackages.js` to your system configuration:

`beNoisy` : Use if you want to be console.logged a lot and updated about progress - Defaults to False. 

`emptyPostgres` Start a fresh database - Defaults to False. 

`schemaversion` : Version of the database data, useful to keep the data up-to-date, if changed it will start to retrieve the data from the beginning.

`errorLimit` : The limit number of errors to terminate the app when it is reached.

`parallelLimit` : Number of changes we will process at once.

### Usage

In a terminal, type `node getAllPackages.js` to start the NPM packages data retrieval process. 