import './message.css'

export default function Message({own}) {
    return (
        <div className={own? 'message own': 'message'} >
           <div className="messageTop">
               <img src="assets/person/1.jpeg" alt=""
               className='messageImage' />
               <p className='messageText'>hello my message</p>
            </div> 
           <div className="messageBottom">
                1 hour ago
            </div> 
        </div>
    )
}
