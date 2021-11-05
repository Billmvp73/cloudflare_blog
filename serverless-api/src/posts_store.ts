export default class PostsStore {
  async all() {
    var _posts = []
    var id_str = await SOCIALS_KV.get('all');
    var id: number = +id_str!;
    console.log("all ids: ", id)
    for(let i = 0; i < id;i++){
      let post = await SOCIALS_KV.get(i.toString())
      console.log(await post)
      _posts.push({"id": i, body: JSON.parse(await post!)})
    }
    console.log("all posts ", _posts)
    return _posts
  }

  async find(id: number) {
    let post = await SOCIALS_KV.get(id.toString())
    return JSON.parse(post!)
  }

  async insert(post: JSON){
    let id = await SOCIALS_KV.get('all')
    console.log("Insert data id ", id, " ", post)
    var id_num: number = +id! + 1;
    // var post_var = post["id"].push()
    // post[id!].push(id_num.toString())
    
    try{
      await SOCIALS_KV.put(id!, JSON.stringify(post))
      await SOCIALS_KV.put('all', id_num.toString())
      return new Response("Success", {status: 200})
    }catch(err: any){
      console.log("Insert failed.")
      return new Response(err, {status: 500})
    }
  }
}