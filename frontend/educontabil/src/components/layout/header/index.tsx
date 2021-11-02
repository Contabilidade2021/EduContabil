import { IconClose, IconUser } from 'components/icons'
import useLayoutData from 'data/hook/useLayoutData'
import Link from 'next/link'

interface HeaderMenuProps {
    title?: string   
}


export const HeaderMenu: React.FC<HeaderMenuProps> = (props: HeaderMenuProps) => {

    const {toggleSideBar, onClickToggleSideBar} = useLayoutData()


        return (
            <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                <div className = "container-fluid">

                    <button type="button" id="sidebarCollapse" className =  {`navbar-btn ${ toggleSideBar }`} onClick= {onClickToggleSideBar} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button className = "btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className = "fas fa-align-justify"></i>
                    </button>
                    
                    <div className="titleDasboard"> <h5> {props.title} </h5> </div> 
                    <div className = "collapse navbar-collapse" id="navbarSupportedContent">                   
                        <ul className = "nav navbar-nav ml-auto">
                            <MenuItem href= "/" label= "" /> <IconUser />
                            <MenuItem href= "/" label= "" /> <IconClose />                           
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    interface MenuItemProps {
        href: string;
        label: string;
    }

    const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
        return (
            <li  className="nav-item" >
                <Link href={props.href}>
                    <a className="nav-link" >
                        <span className="icon"></span> {props.label}
                    </a>
                </Link>
            </li>
        )
    }