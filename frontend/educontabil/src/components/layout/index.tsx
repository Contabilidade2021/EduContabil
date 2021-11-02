import { Sidebar } from './sidebar'
import { HeaderMenu } from './header'
import { ReactNode } from 'react'


interface LayoutProps{
    title?: string;
    children?: ReactNode;
}



export const Layout: React.FC<LayoutProps> = (props : LayoutProps) => {

    return (
        <div className="wrapper"> 
            < Sidebar />
            <div id="content">
                < HeaderMenu title= {props.title}/>
                    <div>
                        {props.children}
                    </div>            
            </div>
        </div>
    )
}


