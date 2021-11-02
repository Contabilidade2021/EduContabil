import { IconLogo } from 'components/icons'
import useLayoutData from 'data/hook/useLayoutData';
import { ReactNode, useState } from 'react'

import Link from 'next/link'


export const Sidebar: React.FC = () => {

    const {toggleSideBar} = useLayoutData()

    const [grupo, setGrupo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [resultado, setResultado] = useState('');
    const [planoConta, setPlanoConta] = useState('');
  
    const  grupoShow = () =>{ grupo == '' ? setGrupo('show'):setGrupo('') }
    const  empresaShow = () =>{ empresa == '' ? setEmpresa('show'):setEmpresa('') }
    const  resultadoShow = () =>{ resultado == '' ? setResultado('show'):setResultado('') }
    const  planoContaShow = () =>{ planoConta == '' ? setPlanoConta('show'):setPlanoConta('') }
   
    
    return (
        <nav id="sidebar" className = {toggleSideBar}>
            <div className="sidebar-header">
                <div className="row justify-content-center">               
                   <IconLogo size = '3x' name = 'EduContábil'/>
                </div>
            </div>

            <ul className="list-unstyled components">          
             <div className = "menuUser homeSubmenu active" ><h6>Usuário - EduContábil</h6></div>

             <Menu onClickTileMenu={grupoShow} toogleMenu={grupo} tileMenu="Grupo">
                 <MenuItem  href= "/dashboards" label= "Alunos" /> 
                 <MenuItem  href= "/" label= "Empresa" />
             </Menu>

             <Menu onClickTileMenu={planoContaShow} toogleMenu={planoConta} tileMenu="Plano de Contas">
                 <MenuItem  href= "/plano-contas/tipo-contas" label= "Tipo de Conta" />  
                 <MenuItem  href= "/" label= "Grupo de Conta" />               
                 <MenuItem  href= "/" label= "Grupo de Conta Reduzido" />
                 <MenuItem  href= "/" label= "Natureza da Conta" />
                 <MenuItem  href= "/" label= "Cadastrar Plano de Conta" />                 
             </Menu>

             <Menu onClickTileMenu={empresaShow} toogleMenu={empresa} tileMenu="Empresa">
                 <MenuItem  href= "/" label= "Capital" /> 
                 <MenuItem  href= "/" label= "Funcionários" />
                 <MenuItem  href= "/" label= "Aquisição de Bens" />
                 <MenuItem  href= "/" label= "Despesas" />
                 <MenuItem  href= "/" label= "Projeção" />
             </Menu>

             <Menu onClickTileMenu={resultadoShow} toogleMenu={resultado} tileMenu="Resultados">
                 <MenuItem  href= "/" label= "DRE Lucro Real" /> 
                 <MenuItem  href= "/" label= "DRE Lucro Presumido" />
                 <MenuItem  href= "/" label= "DRE Simples" />
                 <MenuItem  href= "/" label= "Carga Tributária" />
             </Menu>   
               
            </ul>

            <ul className="list-unstyled CTAs">        
                 <MenuItem  href= "https://www.contabeis.com.br/ferramentas/simples-nacional/" label= "Atividade Simples" />        
                 <MenuItem  href= "https://www.contabeis.com.br/ferramentas/simples-nacional/" label= "CNAE" />                 
            </ul>
        </nav>

    )
}


interface MenuProps {
    onClickTileMenu?: () => void
    tileMenu?: string
    toogleMenu?: string
    children?: ReactNode
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
    return (
        <li>                   
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"  onClick= {props.onClickTileMenu} >{props.tileMenu}</a>
            <ul className={`collapse list-unstyled ${props.toogleMenu}`} id="pageSubmenu">
               { props.children }
            </ul>
        </li>
    )
}

interface MenuItemProps {   
    href: string;
    label?: string;
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

               