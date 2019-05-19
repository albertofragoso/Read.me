const mongoose = require('mongoose')
const { Schema } = mongoose

const bookshelfSchema = new Schema({
  title: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }] 
}, 
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Bookshelf', bookshelfSchema)