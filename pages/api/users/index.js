import dbConnect from '../../../lib/mongodb'
import User from '../../../models/user.model.js'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const users = await User.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
    default:
      res.status(400).json({ success: false,message:"error" })
      break
  }
}