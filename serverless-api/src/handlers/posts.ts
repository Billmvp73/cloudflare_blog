import Store from '../posts_store'

// const posts = []

const Posts = async () => {
  const posts = new Store()
  const body = JSON.stringify(await posts.all())
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  console.log("GET posts: ", body)
  return new Response(body, { headers })
}

export default Posts