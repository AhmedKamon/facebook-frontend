import { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
import {AuthContext} from '../../context/AuthContext'


export default function Feed({username}) {
    const [posts,setPosts] = useState([])
    const {user} = useContext(AuthContext)
    // console
    
    
    useEffect( () =>{
      
          const findPosts = async () =>{
           
            const res = username ? await axios.get('/posts/profile/'+username)
            :
            await axios.get('/posts/timeline/'+ user?._id)
            setPosts(res.data)
          }
          findPosts()
    
    },[username,user._id])
    return (
        <div className='feed'>
            <div className="feedWrappere">
               <Share/> 
               {
                  posts.map((p)=>(<Post key=
                    {p._id} post={p} />))
               }
               
              
            </div>
        </div>
    )
}

////vpdadad
////vpdadad
////vpdadad
////vpdadad
////vpdadad
////vpdadad
////vpdadad
////vpdadad
////vpdadad
////vpdadad
