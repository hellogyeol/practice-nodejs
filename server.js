const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(req.body)
  res.sendFile(`${__dirname}/index.html`)
})

app.post('/', (req, res) => {
  console.log(req.body.todo)
  // res.sendFile(`${__dirname}/index.html`)
  res.render(`${__dirname}/form.ejs`, {'todo':req.body.todo})
})

app.get('/test', (req, res) => {
  console.log(req.body)
  res.sendFile(`${__dirname}/ejs-test.html`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})