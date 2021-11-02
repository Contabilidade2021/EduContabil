import { httpClient } from 'app/http'
import { AxiosResponse } from 'axios'
import { TipoContas } from '../models/plano-contas/tipo-conta'
import { Page } from '../models/common/page'


const URL: string = 'api/tipo-contas'



export const useTipoContaService = () => {

    const obter = async (): Promise<TipoContas> => {        
        const response: AxiosResponse<TipoContas> = await httpClient.get(URL)        
        return response.data
    }

    const find = async (
        tipoConta: String = '', 
        page:number = 0, 
        size: number = 1
        ): Promise<Page<TipoContas>> =>{
         const url = `${URL}?tipoConta=${tipoConta}&${page}&size${size}`
         const response: AxiosResponse<Page<TipoContas>> = await  httpClient.get(url) ;
         return response.data;     
    }

    return {
        obter,
        find
    }
}


