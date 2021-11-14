
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, 'public')) )




app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '/public/home.html'))
// res.status(500)
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/home.html'))
   // res.status(500)
   })
   

 
   app.get('/CompressPDF', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/CompressPDF.html' ))
   // res.status(500)
   })
  

   app.get('/PDFtoWORD', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/PDFtoWORD.html'))

   })

   app.get('/PDFtoCSV', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/PDFtoCSV.html'))

   })

   app.get('/PDFtoJPG', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/PDFtoJPG.html'))

   })

   app.get('/PDFtoPPTX', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/PDFtoPPTX.html'))

   })

   app.get('/Compressjpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Compressjpg.html'))

   })

   app.get('/JPGtoPNG', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/JPGtoPNG.html'))

   })

   app.get('/JPGtoJPEG', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/JPGtoJPEG.html'))

   })

   app.get('/JPGtoPDF', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/JPGtoPDF.html'))

   })
   app.get('/WordtoPDF', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/WordtoPDF.html'))

   })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})