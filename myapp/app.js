const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("lesson 30.01.2026")