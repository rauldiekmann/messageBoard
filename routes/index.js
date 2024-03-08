var express = require('express');
var router = express.Router();

//Mock messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages:messages });
});

/*Form routes */
router.get('/new', function(req,res,next){
  res.render('form',{title:"New Message"});
});

router.post('/new', function(req,res,next){
  let messageText=req.body.messageText;
  let messageUser=req.body.messageUser;
  messages.push({text:messageText, user:messageUser, added: new Date()});
  res.redirect('/');
})

module.exports = router;
