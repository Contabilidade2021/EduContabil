import { createContext, useState } from "react";

type  toggleSideBar = 'active' | ''
type  toggleActionBar = false | true

interface LayoutContextProps {
    toggleSideBar?: toggleSideBar
    onClickToggleSideBar?: () => void

    toggleActionBar?: toggleActionBar
    onClickToggleActionBar?: () => void
}

const LayoutContext = createContext<LayoutContextProps>({})

export function LayoutProvider(props:any){

    const [toggleSideBar, setToggleSideBar] = useState<toggleSideBar>('')
    const [toggleActionBar, setToggleActionBar] = useState<toggleActionBar>(false)
    
    function onClickToggleSideBar(){
        setToggleSideBar( toggleSideBar === '' ? 'active':'')
    }

    function onClickToggleActionBar(){
        setToggleActionBar( toggleActionBar === false ? true: false)
    }
    
    return (
        <LayoutContext.Provider value = {{
            toggleSideBar, onClickToggleSideBar,
            toggleActionBar, onClickToggleActionBar
        }}>
            {props.children}
        </LayoutContext.Provider>    
    )
    
}

export default LayoutContext
