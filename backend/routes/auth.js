const router = require('express').Router()
const passport = require('../helpers/passport')
const User = require('../models/User')
const { isLogged } = require('../helpers/middlewares')

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      passport.authenticate('local', (err, user, info) => {
        if(err) return res.status(500).json({ err, infoErr })
        if(!user) return res.status(401).json({ msg: "This user doesn't exist" })
        req.logIn(user, err => {
          if(err) return res.status(500).json(err)
          res.status(200).json({ 
            email: user.email,
            name: user.name,
            photo: user.photo
          })
        })
      })(req, res, next)
    })
    .catch(err => res.status(500).json(err))
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) return res.status(500).json({ err, infoErr })
    if(!user) return res.status(401).json({ msg: "This user doesn't exist"})
    req.logIn(user, err => {
      if(err) return res.status(500).json(err)
      res.status(200).json({ 
        email: user.email,
        name: user.name,
        photo: user.photo
      })
    })
  })(req, res, next)
})

router.get('/logout', (req, res, next) => {
  req.logOut()
  req.status(200).json({ msg: 'logout backend'})
})

router.get('/profile', isLogged, (req, res, next) => {
  req.status(200).json(req.user)
})

module.exports = router