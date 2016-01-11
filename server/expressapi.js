/**
 * Created by V_D on 1/8/2016.
 */

var express = require('express');
var app = express();

app.get('/api', function (req, res) {

    res.type("text/xml");
    res.set('Access-Control-Allow-Origin', '*');

    var journeys = "<journeys><journey><id>1</id><to>Tove</to><from>Jani</from> </journey><journey><id>2</id><to>Malta</to><from>Karachi</from> </journey></journeys>";

    res.send(journeys);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
