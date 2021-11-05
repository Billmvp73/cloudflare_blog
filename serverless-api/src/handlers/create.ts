import Store from '../posts_store'
import {checkOrigin, corsHeaders} from '../index'
// import corsHeaders from '../index'

const Create = async(request: any) => {
    const request_json = await request.json()
    console.log(await request_json)
    const stores = new Store()
    // const request_json = JSON.parse(request)
    const data = await request_json["inputs"]
    console.log("data: ", await data)
    const resp = await stores.insert(data)
    // Check that the request's origin is a valid origin, allowed to access this API
    const allowedOrigin = checkOrigin(request)
    const headers = {
        'Content-type': 'application/json',
        ...corsHeaders(allowedOrigin)
    }
    if(resp.status == 200){
        return new Response(JSON.stringify(data), {headers})
    }else{
        return new Response('failed', {headers, status: 500})
    }
}

export default Create