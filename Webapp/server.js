const express =  require('express')
const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/main', (req, res) => {
    res.render('logged.ejs', {name:'username'})
})

app.get('/', (req, res) => {
    res.render('login.ejs')
})

app.listen(3000)