import Container from "../../shared/Container.jsx";
import './Profile.css'
import {Link} from "react-router-dom";
import {FaTelegram} from "react-icons/fa";
import {useState} from "react";
// eslint-disable-next-line react/prop-types
const Profile = ({open}) => {
    const [tabitem, settabItem] = useState(1)

    function toggleTab(index) {
        settabItem(index)
        console.log(index)
    }

    return (<Container open={open}>
        <div className="title">
        <h1>Profile</h1>
        </div>
        <div className="profile-wrapper">
            <div className="side-profile">
                <div className="profile head">
                    <div className="user">
                        <img src="http://education.almahirhub.com/assets/img/user.png" alt=""/>
                        <div className={"title_top"}>admin</div>
                        <div>kjhgfdsa</div>
                        <h3>Follow hasan On</h3>
                        <div>
                            <Link to={"https://t.me//Hasan"}><FaTelegram/></Link>
                        </div>
                    </div>
                </div>
                <div className="profile footer">
                    <h3 className={"user_brain"}>Personal Details</h3>
                    <div className={"user_brn"}>
                        <h4>Birthday</h4>
                        <h4>30-15-1998</h4>
                    </div>
                    <div className={"user_brn"}>
                        <h4>Phone</h4>
                        <h4>123456789</h4>
                    </div>
                    <div className={"user_brn"}>
                        <h4>Mail</h4>
                        <h4>admin@admin.com</h4>
                    </div>
                </div>
            </div>
            <div className="user-settings">
                <div className="tab-item">
                    <div onClick={() => toggleTab(1)} className={'tab'}>About</div>
                    <div onClick={() => toggleTab(2)} className={'tab'}>Settings</div>
                </div>
                <div className={'tabs'}>
                    <div className = {tabitem === 1 ? "tab-item-block" : "tab-item-block-hide"}>
                        <div className="vs_x">
                             <h4>Full Name</h4>
                             <h4>Mobile</h4>
                             <h4>Email</h4>
                             <h4>Location</h4>
                        </div>
                    </div>
                    <div className={tabitem === 2 ? "tab-item-block" : "tab-item-block-hide"}>item2</div>
                </div>
            </div>
        </div>
    </Container>)
}

export default Profile