import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './share.css'

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user} = useContext(AuthContext)
    const desc = useRef()
    const [file,setFile] = useState(null)
    return (
        <div className='share' >
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PF+user.profilePicture: PF +'person/noAvater.jpg'} className='shareProfileImage' alt="" />
                    <input placeholder={"What's in your mind " +user.username+'?'} type="text" className='shareInput' ref={desc} />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText' >Photo or Video</span>
                            <input type="file"  id="file" accept='.png,.jpg,.jpeg'  onChange={(e) => setFile(e.target.files[0])} />
                        </div>
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
                    <button className='shareButton'>Share</button>
                </form>
            </div>
        </div>
    )
}
