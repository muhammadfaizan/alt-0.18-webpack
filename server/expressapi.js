/**
 * Created by V_D on 1/8/2016.
 */

var express = require('express');
var app = express();

app.get('/api', function (req, res) {

    res.set('Access-Control-Allow-Origin', '*');

    res.type("xml");

    var journeys = "<journeys><journey><id>1</id><to>Capetown</to><from>Johannesburg</from> </journey><journey><id>2</id><to>Malta</to><from>Karachi</from> </journey></journeys>";
    var jsonJourneys = [{"id":0,"name":"karachi"},{"id":1,"name":"queta"},{"id":2,"name":"peshawar"},{"id":3,"name":"lahore"},{"id":4,"name":"islamabad"}];

    res.send(journeys);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
