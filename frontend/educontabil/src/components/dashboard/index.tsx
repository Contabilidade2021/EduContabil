export const Dashboard: React.FC = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-sm-3 ">
                        <div className="card">
                        <div className="card-body card text-white bg-primary">
                            <h5 className="card-title text-center">RECEITA ACUMULADA</h5>
                            <p className="card-text text-center text-white fs-2"> 214.000,00 </p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">  
                        <div className="card">
                        <div className="card-body card text-white bg-danger">
                            <h5 className="card-title text-center">DESPESA ACUMULADA</h5>
                            <p className="card-text text-center text-white fs-2"> 109.134,70 </p>
                           
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">  
                        <div className="card">
                        <div className="card-body card text-white bg-info">
                            <h5 className="card-title text-center">RESULTADO ACUMULADO</h5>
                            <p className="card-text text-center text-white fs-2"> 104.865,30 </p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">  
                        <div className="card">
                        <div className="card-body card text-white bg-success">
                            <h5 className="card-title text-center">EBITDA</h5>
                            <p className="card-text text-center text-white fs-2"> 140.705,00 </p>
                           
                        </div>
                        </div>
                    </div>
                    </div>

                      <br/>
                      <br/>

                        <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">
                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Descrição</th>
                                        <th scope="col">Total</th>                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>                                       
                                        <td>Lucro Líquido</td>
                                        <td>104.865,30</td>                                        
                                        </tr>
                                        <tr>                                       
                                        <td>PL</td>
                                        <td>209.730,60</td>                                                                          
                                        </tr>
                                        <tr>                                       
                                        <td>%</td>
                                        <td>50,00%</td>                                                                          
                                        </tr>
                                    </tbody>
                                    </table>
                                </p>
                                <h6>*O ROE te permite entender o rendimento da empresa</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">
                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Descrição</th>
                                        <th scope="col">Total</th>                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>                                       
                                        <td>Lucro Líquido</td>
                                        <td>104.865,30</td>                                        
                                        </tr>
                                        <tr>                                       
                                        <td>Receita Total</td>
                                        <td>214.000,00</td>                                                                          
                                        </tr>
                                        <tr>                                       
                                        <td>Margem Líquida</td>
                                        <td>49,00%</td>                                                                          
                                        </tr>
                                    </tbody>
                                    </table>
                                </p>
                                <h6>*A margem líquida é o lucro líquido que a empresa faz para cada real em receita</h6>
                            </div>
                            </div>
                        </div>
                        </div>
        </div>
    )
}