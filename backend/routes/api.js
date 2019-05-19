const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Book = require('../models/Book')
const Bookshelf = require('../models/Bookshelf')
const { isLogged } = require('../helpers/middlewares')

router.get('/bookshelf/:id', (req, res, next) => {
  try {
    const bookshelf = Bookshelf.findOne({ user: req.params.id })
    req.status(200).json(bookshelf)
  } catch { err => releaseEvents.status(500).json({ err: "Something went wrong" })}
})

router.post('/book/add', async (req, res, next) => {
  try {
    // const book = await Book.findOne({ id: req.body.id })
    // if(!book) book = await Book.create({ ...req.body })
    const book = await Book.create({ ...req.body })
    const bookshelf = await Bookshelf.findOneAndUpdate({ user: req.user._id }, { $push: { book }})
    res.status(200).json(bookshelf)
  } catch { err => res.status(500).json({ err: 'Something went wrong' })}
})

router.post('/book/remove', async (req, res, next) => {
  try {
    const bookshelf = await Bookshelf.findOneAndUpdate({ book: req.body.id }, { $pull: { book: req.body.id } }, { new: true })
    res.status(200).json(bookshelf)
  } catch { err => res.status(500).json({ err: 'Something went wrong' })}
})

module.exports = router