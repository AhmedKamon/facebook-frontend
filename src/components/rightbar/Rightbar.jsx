import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({user}) {

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
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}person/2.jpg`} alt="" />
          <span className="rightbarFollowingName">Shagor</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}person/3.jpg`}alt="" />
          <span className="rightbarFollowingName">Shagor</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}person/1.jpeg`} alt="" />
          <span className="rightbarFollowingName">Shagot</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src={`${PF}person/2.jpg`} alt="" />
          <span className="rightbarFollowingName">Shagor</span>
        </div>
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
