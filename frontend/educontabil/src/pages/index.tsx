import Head from 'next/head'
import { Layout } from 'components' 

const Home: React.FC = () => {

  return (
    <div>
      

      <Head>
        <title>Contábil</title>
        <meta name="description" content="Sistema Educacional Contábil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>
    
       <Layout title="Home">   
        <h4> Bem vindo ao sistema educacional, Bons Estudos!</h4>
       </Layout>      
    </div>
  )
}

export default Home
