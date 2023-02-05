import mongoose from 'mongoose'

const ImageSchema = mongoose.Schema({
  original: {
    type: String,
    required: true,
    trim: true
  },
  thumbnail: {
    type: String,
    trim: true
  },
  originalAlt: {
    type: String,
    required: true,
    trim: true
  },
  thumbnailAlt: {
    type: String,
    required: true,
    trim: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Image', ImageSchema)
