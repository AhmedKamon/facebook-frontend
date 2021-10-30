import ChatOnline from '../../components/chatOnline/ChatOnline'
import Conversations from '../../components/conversations/Conversations'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export default function Messenger() {
    const [conversations,setConversations] = useState([])
    const {user} = useContext(AuthContext)
    

    useEffect(() =>{
       const getConversations = async () =>{
           try {
             const res = await axios.get( `/conversations/${user?._id}`)
             setConversations(res.data) 
            
           } catch (error) {
               console.log(error);
           }
       } 
       getConversations()
    },[user])
    return (
        <>
        <Topbar/>
        <div className='messenger' >
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                        <input className='chatMenuInput' placeholder='search friends here' type="text" name="" id="" />
                        {
                           conversations.map(c =>(
                             <Conversations currentUser={user?._id} key={c?._id} conversation={c}/>  
                           )) 
                        }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatMenuWrapper">
                    <div className="chatBoxTop">
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                    </div>   
                    <div className="chatBoxBottom">
                    <textarea className='chatMessageInput' placeholder='write your message'></textarea>  
                      <button className='chatSubmitButton' >Send</button>
                    </div>   
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatMenuWrapper">
                     <ChatOnline/>
                     <ChatOnline/>
                     <ChatOnline/>
                     <ChatOnline/>
                </div>
            </div>
        </div>
        </>
        
    )
}
