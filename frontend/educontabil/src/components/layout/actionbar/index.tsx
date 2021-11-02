import useLayoutData from "data/hook/useLayoutData";
import {  ReactNode } from "react"
import { Modal, Button } from "react-bootstrap";


interface ActionBarProps {
    title?: string;
    actionWidth?: string
    children?: ReactNode
    sizeModal?: "sm" | "lg" | "xl" | undefined
    handleModal?: () => void
}

export const ActionBar : React.FC<ActionBarProps> = (props: ActionBarProps) => {

    const {toggleActionBar, onClickToggleActionBar} = useLayoutData()

    return(
        
        <div>
                <Modal show= {toggleActionBar} onHide={onClickToggleActionBar} size={props.sizeModal} className='modal right fade'>               
                  <Modal.Header closeButton>
                     <Modal.Title>{props.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>                 
                        {props.children}                       
                  </Modal.Body>
                  {/*<Modal.Footer>
                     <Button variant="success" type="submit" onClick={onClickToggleActionBar}>Confirmar</Button>
                     <Button variant="secondary" onClick={onClickToggleActionBar}>Fechar</Button>
                  </Modal.Footer>  */}              
            </Modal>

               
        </div>
    )
}

