import { Cancel, EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './share.css'

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user} = useContext(AuthContext)
    const desc = useRef()
    const [file,setFile] = useState(null)
    const submitHandler = async(e) =>{
            e.preventDefault()
            const postData = new FormData()
            postData.append('userId', user._id )
            postData.append('desc', desc.current.value )
           
            
            try {
                if(file){
                    postData.append('file', file)
                }
               await axios.post('/posts',postData)
               window.location.reload()
            } catch (error) {
                
            }
    }
    return (
        <div className='share' >
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PF+user.profilePicture: PF +'person/noAvater.jpg'} className='shareProfileImage' alt="" />
                    <input placeholder={"What's in your mind " +user.username+'?'} type="text" className='shareInput' ref={desc} />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImageContainer">
                        <img src="" alt="" src={URL.createObjectURL(file)} className="shareImage" />
                        <Cancel className='shareCancel' onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText' >Photo or Video</span>
                            <input style={{display:'none'}} type="file"  id="file" accept='.png,.jpg,.jpeg'  onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText' >Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText' >Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className='shareOptionText' >Feelings</span>
                        </div>

                    </div>
                    <button type='submit' className='shareButton'>Share</button>
                </form>
            </div>
        </div>
    )
}
