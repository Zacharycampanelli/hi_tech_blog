const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
    
      title: 'Handlebars Docs',
      post_text: 'This is a post about handlebars',
      created_at: new Date(),
      vote_count: 10,
      comments: [{}, {}],
      user: {
        username: 'test_user'
      }
    });
  });

module.exports = router;