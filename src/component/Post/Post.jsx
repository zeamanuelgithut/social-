import { MoreVert } from "@mui/icons-material"

import "./Post.css"
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/a.jpg" alt="" />
            <span className="postUsername">zeamanuel Abera</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey is my first post</span>
          <img className="postImg" src="/assets/3.png" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/h.png" alt="" />
            <img className="likeIcon" src="/assets/l.png" alt="" />
            <span claseName="likeCounter">32 people Like it</span>
          </div>
          <div className="postBottomRight"></div>
          <span className="postCommentText">9 comments</span>

        </div>
      </div>

    </div>
  )
}
