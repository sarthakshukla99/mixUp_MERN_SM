import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
import { useEffect, useState } from "react"
import axios from "axios";
// import {Posts} from "../../dummyData"

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/62ed3823742c7610c6f0d0dd");
            
            setPosts(res.data)
        }
        fetchPosts()
    },[])

  return (
    <div className="feed">
        <div className="feedWrapper">
            <Share/>

            {posts.map((p)=> (
                <Post key={p.id} post={p}/>
            ))}
            
            {/* {Posts.map(p => (
                <Post key={p.id} post={p}/>
            ))} */}
        </div>
    </div>
  )
}

export default Feed