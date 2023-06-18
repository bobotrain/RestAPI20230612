const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

//:는 이 값을 파라미터 변수로 받는다는 뜻
app.get('/user/:id', function (req, res) {

  //내가 입력한 params값
  const q = req.params
  console.log(q.id)

  res.json({'userid': q.id })
})


app.get('/dog', function (req, res) {
  res.json({'sound': '멍멍'})
})


//사운드 구별
app.get('/sound/:name', function (req, res) {
  const {name} = req.params

  //js문법 사용가능
  if(name =="dog") {
    res.json({'sound' : '멍멍'})
  }else if(name =="cat") {
    res.json({'sound' : '야옹'})
  }else if(name =="pig") {
    res.json({'sound' : '꿀꿀'})
  }else {
    res.json({'sound' : '알수없음'})
  }
})

app.listen(3000) 