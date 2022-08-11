const express =require('express')
const { pageNotFound } = require('./controllers/shopController')
const router = require('./routes/routes')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.json())

app.use(express.urlencoded({extended:false}))


app.use(express.static('public'))

app.use(router)

app.use(pageNotFound)

app.listen(3000)