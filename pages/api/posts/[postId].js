import data from "../data";

// api/posts/posts/1
export default function handler(req, res) { 
    const { postId } = req.query;
    const { Posts } = data;

    if(postId){
       
     const Post = Posts.find(value => value.id == postId)
        return res.status(200).json(Post)
    }
   return res.status(404).json({ error: "Data Not Found" });

}