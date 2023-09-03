import Container from "../../shared/Container.jsx";
import './Profile.css'
// eslint-disable-next-line react/prop-types
const Profile = ({open}) => {
    return (
        <Container open={open}>
            <div className="profile-wrapper">
                <div className={'div1'}></div>
                <div className={'div1'}></div>
                <div className={'div1'}></div>
            </div>
        </Container>
    )
}

export default Profile