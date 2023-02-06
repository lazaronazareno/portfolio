import mongoose from 'mongoose'

const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  titleEn: {
    type: String,
    required: true,
    trim: true
  },
  titleEs: {
    type: String,
    required: true,
    trim: true
  },
  descriptionEn: {
    type: String,
    required: true,
    trim: true
  },
  descriptionEs: {
    type: String,
    required: true,
    trim: true
  },
  images:
    {
      type: mongoose.Schema.Types.Array,
      ref: 'Image',
      required: true
    },
  stack:
    {
      type: mongoose.Schema.Types.Array,
      ref: 'Stack',
      required: true
    },
  deploy: {
    type: String,
    trim: true
  },
  repo: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Project', ProjectSchema)
