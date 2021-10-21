import { Bookmark, Event, Group, HelpOutline, Message, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import { Users} from '../../dummyData'
import CloseFriends from '../closeFriends/CloseFriends'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar' >
           <div className="sidevarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                       <RssFeed className='sidebarIcon' />
                       <span className="sidebarListItemText">feed</span>
                   </li>
                   <li className="sidebarListItem">
                       <Message className='sidebarIcon' />
                       <span className="sidebarListItemText">Message</span>
                   </li>
                   <li className="sidebarListItem">
                       <PlayCircleFilledOutlined className='sidebarIcon' />
                       <span className="sidebarListItemText">Videos</span>
                   </li>
                   <li className="sidebarListItem">
                       <Group className='sidebarIcon' />
                       <span className="sidebarListItemText">Groups</span>
                   </li>
                   <li className="sidebarListItem">
                       <Bookmark className='sidebarIcon' />
                       <span className="sidebarListItemText">Bookmarks</span>
                   </li>
                   <li className="sidebarListItem">
                       <HelpOutline className='sidebarIcon' />
                       <span className="sidebarListItemText">feed</span>
                   </li>
                   <li className="sidebarListItem">
                       <WorkOutline className='sidebarIcon' />
                       <span className="sidebarListItemText">jobs</span>
                   </li>
                   <li className="sidebarListItem">
                       <Event className='sidebarIcon' />
                       <span className="sidebarListItemText">Events</span>
                   </li>
                   <li className="sidebarListItem">
                       <School className='sidebarIcon' />
                       <span className="sidebarListItemText">Courses</span>
                   </li>
               </ul>
               <button className="sidebarButton">Show More</button>
               <hr className="sidebarHr" />
               <ul className="sidebarFriendsList">
                   {
                       Users.map(u =>(
                           <CloseFriends key={u.id} user={u}/>
                       ))
                   }
               </ul>
           </div>
        </div>
    )
}
