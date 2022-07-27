const express =  require('express')
const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/'))

app.get('/main', (req, res) => {
    res.render('pages/logged.ejs')
})

app.get('/', (req, res) => {
    res.render('pages/login.ejs')
})

app.post('/', (req, res) => {

})

app.listen(3000)