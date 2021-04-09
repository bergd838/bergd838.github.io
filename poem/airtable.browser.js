# Shell:
$ export AIRTABLE_API_KEY=keyMyP0MQgOvejV49

# Node:
const base = require('airtable').base('appKSDj9gUs4pXa1j');
EXAMPLE USING CUSTOM CONFIGURATION
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyMyP0MQgOvejV49'
});
var base = Airtable.base('appKSDj9gUs4pXa1j');
