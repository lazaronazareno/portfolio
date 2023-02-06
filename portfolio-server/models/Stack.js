import mongoose from 'mongoose'

const StackSchema = mongoose.Schema({
  name: {
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

export default mongoose.model('Stack', StackSchema)
