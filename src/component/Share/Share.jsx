import "./Share.css"
import {PermMedia} from "@mui/icons-material";
export default function Share() {
  return (
    <div className="Share">
      <div className="sharewrapper">
      <div className="shareTop"> 
      <img className="shareProfileImg" src="/assets/a.jpg" alt="" />
        <input placeholder="what is your maind " className="shareInput" />
  <hr className="shareHr"/>
      </div>
      <div className="shareBottom"> 
      <div className="shareOptions">
      <div className="shareOption">
        <PermMedia className="shareIcon" />
      <span className="shareOptionText">vedio or photo</span>
      </div>
      </div>
      </div>
      </div>     
    </div>
  )
}