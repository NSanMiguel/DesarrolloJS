import {FaOpencart} from 'react-icons/fa'
import './CartWidget.css'
export function CartWidget(){
    return(
        <div className="collapse navbar-collapse" id="navbarColor01">
            <FaOpencart className='icon'/>
        </div>
    )
}