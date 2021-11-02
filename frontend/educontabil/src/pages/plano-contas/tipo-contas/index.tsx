import Head from 'next/head'
import { Layout, TipoConta } from 'components' 

const TipoContas: React.FC = () => {

  return (
    <div>
      <Head>
        <title>Contábil</title>
        <meta name="description" content="Sistema Educacional Contábil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />     
      </Head>
    
       <Layout title="Tipo de Conta">   
          <TipoConta />
       </Layout>      
    </div>
  )
}

export default TipoContas