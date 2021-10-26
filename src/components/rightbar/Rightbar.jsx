import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Rightbar({user}) {
const [friends, setFriends] = useState([])
console.log(friends,'followings')
  useEffect(() =>{
    const getFriends = async () =>{
      try {
        const friendList = await axios.get('/users/friends/'+user._id)
        setFriends(friendList.data)
      } catch (error) {
        console.log(error);
      }
    }
    getFriends()
  },[user?._id])
  const HomeRightbar = () =>{
    
    return(
      <>
      <div className="birthdayContainer">
              <img className='birthdayImage' src="/assets/gift.png" alt="" />
            <span className="birthdayText"><b>Madam</b> and <b>3 others</b> have birthday today</span>
            </div>
            <img className='rightbarAd' src="/assets/ad.png" alt="" />
            <h4 className="rightbarTitle">
              Online Friends
            </h4>
            <ul className="rightbarFriendList">
              {Users.map(u => (
                <Online key={u.id}  user={u} />
              ))}
            </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const IMG = process.env.REACT_APP_IMAGE
    return (
      <>
      <h4 className='rightbarTitle' >User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user?.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user?.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationsip:</span>
          <span className="rightbarInfoValue">{user?.relationship ===1 ? 'single' : user?.relationship ===2 ? 'in a relation' : 'its complicated' }</span>
        </div>
      </div>
      <h4 className='rightbarTitle' >User Friends</h4>
      <div className="rightbarFollowings">
        {
         friends.map((friend) =>
          <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={ friend.profilePicture ? IMG+friend?.profilePicture : `${PF}person/noAvater.jpg`} alt="" />
          <span className="rightbarFollowingName">{friend?.username}</span>
        </div>
         )}
      </div>
      </>
    );
  }
    return (
        <div className='rightbar'>
         <div className='rightbarWrapper'>
            {user? <ProfileRightbar/>: <HomeRightbar/>}
         </div>
        </div>
    )
}
