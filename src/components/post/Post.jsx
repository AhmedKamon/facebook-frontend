import { MoreVert } from '@mui/icons-material'
import './post.css'
import {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Post({post}) {
    const [user,setUser]= useState({})
    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const {user: currentUser} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    useEffect(() =>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])

    const likeHandler = () =>{
        try {
            axios.put('/posts/' + post._id + '/like',{userId:currentUser._id})
        } catch (error) {
            console.log('failed to fetch from api')
        }
        setIsLiked(!isLiked)
        setLike(isLiked? like -1: like+ 1)
    }
    useEffect( () =>{
        const findUser = async () =>{
          return await axios.get(`/users?userId=${post?.userId}`).then((res) =>{
            setUser(res.data)
          })
        }
        findUser()
  
  },[post?.userId])
    return (
        <div className='post' >
           <div className="postWrapper">
               <div className="postTop">
                   <div className="postTopLeft">
                       <Link to={`profile/${user.username}`}>
                       <img className='profileImage' src={user?.profilePicture || PF+'person/noAvater.jpg'} alt="" />
                       </Link>
                       
                       <span className="postUsername">{user?.username}</span>
                       <span className="postDate">{format(post?.createdAt)}</span>
                   </div>
                   <div className="postTopRight">
                       <MoreVert/>
                   </div>
               </div>
               <div className="postCenter">
                   <span className="postText">{post?.desc}</span>
                   <img className='postImage' src={post?.img} alt=""/>
               </div>
               <div className="postBottom">
                   <div className="postBottomLeft">
                       <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler} />
                       <img className='likeIcon' src="/assets/heart.png" alt="" onClick={likeHandler} />
                       <span className="postLikeCounter">{like}</span>
                   </div>
                   <div className="postBottomRight">
                       <span className="postCommenText">{post?.comments} Comments</span>
                   </div>
               </div>
           </div>
        </div>
    )
}
