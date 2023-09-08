import {BiFullscreen} from "react-icons/bi";
import {Input} from "../search/Input";
import {useState} from "react";
// eslint-disable-next-line react/prop-types
const Navigation = ({open}) => {
    
    return (
        <div className={!open ? "navigation" : "navigation-hide"}>
            <div className="nav-block">
                <div className="full-screen">
                    <BiFullscreen/>
                </div>
                <Input/>
            </div>
        </div>
    );
};

export default Navigation;
