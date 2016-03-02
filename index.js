var config = require("./config.js");
var knex = require('knex')(config.knex);
var pmb = require("pattern-message-broker");
var client = pmb.client();

var queryPattern = {
    role: 'database',
    cmd: 'query',
    query: '*'
};

client.addPattern(queryPattern, function(req, res){
    console.log("Received: ", req);
    
    knex.raw(req.message.query).then(function(resp) {
        console.log("Response: ", resp);
        
        client.reply(resp, req);
    });
});