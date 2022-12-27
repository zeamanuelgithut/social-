import "./Share.css"
import {EmojiEmotions, PermMedia, Room, Label} from "@mui/icons-material";
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
        <PermMedia htmlColor="Tomato"color="tomato" className="shareIcon" />
      <span className="shareOptionText">Vedio or Photo</span>
      </div>
        <div className="shareOption">
        <Label htmlColor="blue" className="shareIcon" />
      <span className="shareOptionText">Tag</span>
      </div>
        <div className="shareOption">
        <Room htmlColor="green" className="shareIcon" />
      <span className="shareOptionText">Location</span>
      </div>
        <div className="shareOption">
        <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
      <span className="shareOptionText">Feelings</span>
      </div>
      </div>
        <button className="shareButton">Share</button>
      </div>
      </div>     
    </div>
  )
}