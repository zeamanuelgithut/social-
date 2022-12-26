import Topbar from "../../component/Topbar/Topbar"
import Sidebar from "../../component/Sidebar/Sidebar"
import Rightbar from "../../component/Rightbar/Rightbar"
import Feed from "../../component/Feed/Feed"
import "./Home.css"
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />

      </div>
    </>
  );
}