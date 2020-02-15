var express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const postTpl = {
    header: "Post header",
    text: "Post text inside block which shouldnt be on a separate page from its header"
  };

  const posts = [];

  const postsToCreate = 50;

  for (let i = 0; i < postsToCreate; i++) {
    posts.push({
      header: `${postTpl.header} ${i+1}`,
      text: `${postTpl.text} ${i+1}`
    })
  }

  res.render('index', { title: 'Express', posts });
});

module.exports = router;
