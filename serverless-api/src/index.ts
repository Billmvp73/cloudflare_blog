import { handleRequest } from './handler'

// A list of allowed origins that can access our backend API
const allowedOrigins = [
  'https://workers-unsplash-viewer.pages.dev',
  "http://localhost:3000"
]

// A function that returns a set of CORS headers
const corsHeaders = (origin: any) => ({
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Origin': '*'
})

// Check the origin for this request
// If it is included in our set of known and allowed origins, return it, otherwise
// return a known, good origin. This effectively does not allow browsers to
// continue requests if the origin they're requesting from doesn't match.
const checkOrigin = (request: any) => {
  const origin = request.headers.get("Origin")
  console.log("Origin: ", origin)
  const foundOrigin = allowedOrigins.find(allowedOrigin => allowedOrigin.includes(origin))
  return foundOrigin ? foundOrigin : allowedOrigins[0]
}

addEventListener('fetch', (event) => {
  console.log(event.request.method)
  if(event.request.method === "OPTIONS"){
    const allowedOrigin = checkOrigin(event.request);
    console.log("Directly Returns. ", allowedOrigin)
    console.log(corsHeaders(allowedOrigin))
    return new Response("OK", {headers: corsHeaders(allowedOrigin)})
  }
  event.respondWith(handleRequest(event.request))
})

export {
  checkOrigin, corsHeaders
}
