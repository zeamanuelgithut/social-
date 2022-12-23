import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="Topbarcontainer">
      <div className="TopbarLeft">
        <span className="logo">social</span>
      </div>
      <div className="Topbarcenter">
        <div className="searchbar">
          <Search className="searchicon" />
          <input placeholder="Serch for friend,post and video" className="searchInput" />
        </div>
      </div>
      <div className="TopbarRight">
        <div className="TopbarLinks">
          <span className="TopbarLink">HomePage</span>
          <span className="TopbarLink">TimeLine</span>
        </div>
        <div className="TopbarIcons">
          <div className="TopbarIconeItem">
            <Person />
            <span className="TopbarIconeBadge">1</span>
          </div>
          <div className="TopbarIconeItem">
            <Chat />
            <span className="TopbarIconeBadge">2</span>
          </div>
          <div className="TopbarIconeItem">
            <Notifications />
            <span className="TopbarIconeBadge">3</span>
          </div>
        </div>
        <img src="/assets/a.jpg" alt="|" className="TopbarImg" />
      </div>
    </div >
  );
}