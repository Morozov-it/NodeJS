// URL-------------------------------------------------------------------------------------------------
const { URL } = require('url')



const siteURL = 'http://localhost:8080/users?id=123'

const url = new URL(siteURL)
console.log(url)
// URL {
//     href: 'http://localhost:8080/users?id=123',
//     origin: 'http://localhost:8080',
//     protocol: 'http:',
//     username: '',
//     password: '',
//     host: 'localhost:8080',
//     hostname: 'localhost',
//     port: '8080',
//     pathname: '/users',
//     search: '?id=123',
//     searchParams: URLSearchParams { 'id' => '123' },
//     hash: ''
// }