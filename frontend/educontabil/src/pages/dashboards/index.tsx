import { Dashboard, Layout } from 'components' 

const Dashboards: React.FC = () => {
  return (
    <div>   
       <Layout title="Deshboard"> 
          <Dashboard />
       </Layout>      
    </div>
  )
}

export default Dashboards