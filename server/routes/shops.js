import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import shopData from '../data/shops.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(shopData)
})

router.get('/:slug', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/shop.html'));
});

export default router