import mongoose, { Schema, Document } from 'mongoose'

export interface UserDocument extends Document {
  email: string
  confirmed: boolean
}

// Data we need to collect/confirm to have the app go.
const fields = {
  email: {
    type: String
  },
  confirmed: {
    type: Boolean,
    default: false
  }
}

// One nice, clean line to create the Schema.
const userSchema = new Schema(fields)

export default mongoose.model<UserDocument>('User', userSchema)
