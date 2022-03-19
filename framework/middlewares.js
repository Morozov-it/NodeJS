const { URL } = require('url')

const sendJson = (req, res) => {
    res.send = (data) => {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(JSON.stringify(data))
    }
}
const parseURL = (baseURL) => (req, res) => {
    const url = new URL(req.url, baseURL)
    const params = {}
    
    url.searchParams.forEach((value, key) => {
        return params[key] = value
    })

    req.pathname = url.pathname
    req.params = params
}

module.exports = { sendJson, parseURL }