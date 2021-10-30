import axios from 'axios'
import { useEffect, useState } from 'react'
import './conversations.css'

export default function Conversations({conversation,currentUser}) {
    const [user,setUser] = useState(null)

    useEffect(() =>{
        const friendId = conversation.members.find((m) => m!== currentUser._id)
        const getUser = async () =>{
           try {
            const res = await axios.get('/users?userId=' +friendId)
            setUser(res.data)
           } catch (error) {
               console.log(error);
           }
        }
        getUser()
    },[conversation,currentUser])
    return (
        <div className='conversation' >
             <img src="assets/person/1.jpeg" alt="" className='conversationImage' />
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}
