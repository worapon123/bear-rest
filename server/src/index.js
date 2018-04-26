var express = require('express'); 
var app = express(); 
var router = express.Router(); 
var bodyParser = require('body-parser'); 
var cors = require('cors');
  
var bears = [
    { id: '1', name: 'JOSONZ' },
    { id: '2', name: 'JIMMY' }
]; 
var last_bear_id = 3;
  
router.route('/bears') 
    .get(function(req, res) {
        res.send(bears);
    })
    .post(function(req, res) { 
        var bear = {}; 
        bear.name = req.body.name; 
        bear.id = "" + (last_bear_id++);
        bears.push(bear); 
        res.json({ message:'bbbbbbBear created!' }); 
    })
router.route('/bears/:id')
    .delete(function(req, res){
        bears = bears.filter(b => b.id !== req.params.id)
        res.json({ message: 'bbbbbbbBear deleted!' }); 
    }) 

app.use(cors());
// all of our routes will be prefixed with /api 
app.use('/api', bodyParser.json(), router); 
app.listen(8000);