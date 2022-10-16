import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

function Rightbar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        {" "}
                        <b>karan</b> and<b> 3 other friends</b> have a birthday
                        today
                    </span>
                </div>
                {/* <div className="birthdayContainer"> */}
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>

                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
        <> 
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoKey">Delhi</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoKey">Meerut</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoKey">Single</span>
                </div>
            </div>

            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Wick</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Wick</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Wick</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Wick</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/8.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Wick</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Wick</span>
                </div>
            </div>
        </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}

export default Rightbar;
