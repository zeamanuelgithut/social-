import "./Sidebar.css"
import {RssFeed,Chat,PlayCircle,Groups,Bookmark,HelpOutline,WorkOutline,Event,School} from "@mui/icons-material";

export default function Sidebar()
  { return (
    <div className="Sidebar">
      <div className="sidebarwrapper">
<ui className="sidebarlist">
  <li className="sidebarItems">
    <RssFeed className="sidebarIcons"/>
    <span className="sidebarListItemText">Feed</span>
  </li>
 <li className="sidebarItems">
    <Chat className="sidebarIcons"/>
    <span className="sidebarListItemText">Chat</span>
  </li>
   <li className="sidebarItems">
    <PlayCircle className="sidebarIcons"/>
    <span className="sidebarListItemText">Videos</span>
  </li>
   <li className="sidebarItems">
    <Groups className="sidebarIcons"/>
    <span className="sidebarListItemText">Groups</span>
  </li>
   <li className="sidebarItems">
    <Bookmark className="sidebarIcons"/>
    <span className="sidebarListItemText">Bookmarks</span>
  </li>
   <li className="sidebarItems">
    <HelpOutline className="sidebarIcons"/>
    <span className="sidebarListItemText">HelpOutline</span>
  </li>
   <li className="sidebarItems">
    <WorkOutline className="sidebarIcons"/>
    <span className="sidebarListItemText">Jobes</span>
  </li>
   <li className="sidebarItems">
    <Event className="sidebarIcons"/>
    <span className="sidebarListItemText">Events</span>
  </li>
   <li className="sidebarItems">
    <School className="sidebarIcons"/>
    <span className="sidebarListItemText">Courses</span>
  </li>
</ui>
        <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
        <ui className="sidebarFriendList">
        <li className="sidebarFriend">
        <img className="sidebarfriendImg" src="/assets/a.jpg" alt="" />
          <span className="sidebarFriendName">Danel Fikra</span>
        </li>
        
        </ui>
      </div>
      
    </div>
    )
  }