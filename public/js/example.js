let convertApi = ConvertApi.auth({secret: 'yourkey'})
let elResult = document.getElementById('result')
let elResultLink = document.getElementById('resultLink')
elResult.style.display = 'none'



// On file input change, start conversion      word to   pdf 
document.getElementById('wordtopdf').addEventListener('change', async e => {
    elResult.style.display = 'none'
    document.documentElement.style.cursor = 'wait'
    try {

        // Converting DOCX to PDF file
        let params = convertApi.createParams()
        params.add('file', e.currentTarget.files[0])
        let result = await convertApi.convert('docx', 'pdf', params)

        // Showing link with the result file
        elResultLink.setAttribute('href', result.files[0].Url)
        elResult.style.display = 'block'

    } finally {
        document.documentElement.style.cursor = 'default'
    }
})