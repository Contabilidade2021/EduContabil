import { ActionBar } from "components/layout/actionbar";
import useLayoutData from "data/hook/useLayoutData";
import { useFormik } from "formik";
import * as Icon from 'react-bootstrap-icons';
import axios from "axios";
import { useState } from "react";
import { TipoContas } from "app/models/plano-contas/tipo-conta";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const TipoConta: React.FC = () =>{

  const [ tipoContas, setTipoContas ] = useState<TipoContas[]>(
     [
        {codigo: 1 , tipoConta: "teste"}
     ]
  )

   const formik = useFormik({
      initialValues: {
         codigo: '',
         tipoConta: '',       
      },
      onSubmit: values => {      
        alert(JSON.stringify(values, null, 2))   
        const dados = axios.get('http://localhost:8080/api/tipo-contas').then(response => {
         console.log(response.data);
      });
      
      },
    });

   
    
    const { onClickToggleActionBar } = useLayoutData()

 
    return (
             <div>

                  <button className="btn btn-primary mb-3" onClick={onClickToggleActionBar}> <Icon.FileEarmarkMedical color="white" size={18} /> Novo </button>

                  <table className="table table-hover">
                  <thead>
                     <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Tipo de Conta</th>                        
                        <th colSpan={2} scope="col">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th scope="row">1</th>
                        <td>Analítico</td>
                        <td ><Icon.Pencil className="cursorBtn" color="Orange" size={18} onClick={onClickToggleActionBar} /> </td>
                        <td ><Icon.Trash className="cursorBtn" color="Red" size={18} onClick={onClickToggleActionBar} /> </td>                                              
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Sintético</td>
                        <td ><Icon.Pencil className="cursorBtn" color="Orange" size={18} onClick={onClickToggleActionBar}  /> </td>
                        <td ><Icon.Trash className="cursorBtn" color="Red" size={18} onClick={onClickToggleActionBar} /> </td>                     
                     </tr>                     
                  </tbody>
                  </table>

                  <ActionBar title="Filtro Plano de Contas" sizeModal='xl'>

                  <form className="row g-3" onSubmit={formik.handleSubmit}>                     
                     <div className="col-12">
                        <label htmlFor="codTipoConta" className="form-label">Código</label>
                        <input 
                           type="text" 
                           className="form-control" 
                           id="codTipoConta" 
                           name="codTipoConta" 
                           placeholder="código tipo de conta"
                           onChange={formik.handleChange}
                           value={formik.values.codigo} 
                        />
                     </div>
                     <div className="col-12">
                        <label htmlFor="nomeTipoConta" className="form-label">Nome Tipo Conta</label>
                        <input 
                           type="text" 
                           className="form-control" 
                           id="nomeTipoConta" 
                           name="nomeTipoConta" 
                           placeholder="nome do tipo de conta"
                           onChange={formik.handleChange}
                           value={formik.values.tipoConta}
                         />
                     </div> 
                     <div className="border-top my-3 mt-5"></div>
                     <div className="d-flex align-items-center flex-column">
                         <button className="btn btn-success col-10 mb-2" type="submit" onClick={onClickToggleActionBar}> <Icon.CheckLg className="text-left" color="white" size={18} /> Confirmar </button>
                         <button className="btn btn-secondary col-10 mb-2" type="submit" onClick={onClickToggleActionBar}> <Icon.DoorClosed color="white" size={18} /> Fechar </button>                   
                         <button className="btn btn-danger col-10 mb-2" type="submit" onClick={onClickToggleActionBar}> <Icon.Trash color="white" size={18} /> Excluir </button>  
                     </div>

                     
                     </form>  
                  </ActionBar>

                <div className=""> 
                     <div className=""> 
                        <DataTable value={tipoContas}>
                           <Column field='codigo' header='Código' />
                           <Column field='tipoConta' header='Tipo Conta' />

                        </DataTable>
                     </div>
                </div>

             </div>
        )
}