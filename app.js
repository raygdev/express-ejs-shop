const express =require('express')
const app = express()

const { pageNotFound } = require('./controllers/errorController')
const shopRouter = require('./routes/shop')
const adminRouter = require('./routes/admin')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.json())

app.use(express.urlencoded({extended:false}))


app.use(express.static('public'))

app.use('/admin',adminRouter)

app.use(shopRouter)

app.use(pageNotFound)

app.listen(3000)