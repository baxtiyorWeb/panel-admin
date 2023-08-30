import { GiHamburgerMenu } from "react-icons/gi"
import { BiFullscreen } from "react-icons/bi"
import { Input } from "../search/Input"
import { useState } from "react"




const Navigation = ({open, setOpen}) => {
    const [full, setFull] = useState(false)

    function fullscreen (){
        if(full){
            setFull(document.body.requestFullscreen())
        }else{
            setFull(!full)
        }
    }
    
    return (
        <div className="navigation">
            <div className="nav-block">
                <div className="burger-menu">
                    <GiHamburgerMenu onClick={()=> setOpen(!open)} />
                </div>

                <div className="full-screen">
                    <BiFullscreen onClick={fullscreen} />
                </div>
                <Input />
            </div>

        </div>
    )
}

export default Navigation