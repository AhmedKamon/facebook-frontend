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
    const [currentChat,setCurrentChat] = useState(null)
    const [messages,setMessages] = useState (null)
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

    useEffect(() =>{
        const getMessages = async () =>{
            try {
               const res = await axios.get('/messages/'+currentChat?._id)
            setMessages(res.data) 
            } catch (error) {
                console.log(error);
            }
            
        }
        getMessages()
    },[currentChat?._id])


    return (
        <>
        <Topbar/>
        <div className='messenger' >
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                        <input className='chatMenuInput' placeholder='search friends here' type="text" name="" id="" />
                        {
                           conversations.map(c =>(
                               <div onClick={()=>setCurrentChat(c)} >
                                   <Conversations currentUser={user?._id} key={c?._id} conversation={c}/>  
                               </div>
                             
                           )) 
                        }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatMenuWrapper">
                    {
                        currentChat ?
                    <>
                    <div className="chatBoxTop">
                        {
                          messages.map(m =>(
                            <Message message={m} own={m.sender === user?._id} />  
                          ))  
                        }
                    </div>   
                    <div className="chatBoxBottom">
                    <textarea className='chatMessageInput' placeholder='write your message'></textarea>  
                      <button className='chatSubmitButton' >Send</button>
                    </div> </> : <span className='noConvText' >Open a conversation to start a chat</span>}

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
