
import { faCalculator, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ProposIcons {
    size?: any;   
    name?: string;
}

export const IconLogo: React.FC<ProposIcons> = (props : ProposIcons) => {
    return (
        <div className="iconeMenu">
            <div className="iconeImgLogo"><FontAwesomeIcon icon={faCalculator}  /></div> 
            <span className = "logoText">  {props.name} </span> 
        </div>
    )
}

export const IconUser: React.FC<ProposIcons> = (props : ProposIcons) => {
    return (
        <div className="iconeImg">
            <FontAwesomeIcon icon={faUserAlt} />            
        </div>
    )
}

export const IconClose: React.FC<ProposIcons> = (props : ProposIcons) => {
    return (
        <div className="iconeImg">
            <FontAwesomeIcon icon={faDoorClosed} />            
        </div>
    )
}

export const IconNew: React.FC<ProposIcons> = (props : ProposIcons) => {
        return (
            <div className="-">
                <FontAwesomeIcon icon={faFolder} size={props.size} /> {props.name}           
            </div>
        )
}
