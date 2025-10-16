import http from 'http'
import getData from "./db.js"
import { sendJSONreq } from './sendJSONreq.js'
import { filterData } from './filter.js'

const PORT = 8000

const server = http.createServer(async(req,res) => {
    const destinations = await getData();

    if (req.url == '/api' && req.method == 'GET'){
        sendJSONreq(res, 200, destinations)
    }
    else if(res.url.startsWith('/api/continent') && req.method == 'GET'){
        const data = filterData(destinations, 'continent', res)
        sendJSONreq(res, 200, data)
    }
    else if (req.url.startsWith('/api/country') && req.method == 'GET'){
        const data = filterData(destinations, 'country', res)
        sendJSONreq(res, 200, data)
    }
    else {
        sendJSONreq(res, 404, {message: 'Route not found'})
    }
})



server.listen(PORT, () =>{
    console.log(`Running on port ${PORT}`)
})

// to check the type of request the client has made we can use req.method and to check the url we can use req.url