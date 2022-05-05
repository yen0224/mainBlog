const express = require('express')
const Article = require('../models/article')
const router = express.Router()

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/*
router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})
*/
router.get('/edit/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  //res.render('articles/edit', { article: article })
  res.send(article)
})

router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  //res.render('articles/show', { article: article })
  res.send(article)
})

router.post('/', async (req, res, next) => {
  req.article = new Article()
  next()
}, saveArticleAndRedirect('new'))

router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}, saveArticleAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    req.article.title = req.body.title
    req.article.description = req.body.description
    req.article.markdown = req.body.markdown
    try {
      req.article = await req.article.save()
      res.redirect(`/articles/${req.article.slug}`)
    } catch (e) {
      res.render(`articles/${path}`, { article: req.article })
    }
  }
}

module.exports = router