import Firstpart from '../Components/Firstpart'
import Secpart from '../Components/Secpart'
import Singlepagedata from '../lib/SinglePage'

const Singlepage = () => {
  return (
    <div className='flex mx-auto max-w-7xl my-10 '>
  
  <h1>{Singlepagedata.title}</h1>
        <Secpart item={Singlepagedata}/>
        <Firstpart item={Singlepagedata}/>
       

    
      
    </div>
  )
}

export default Singlepage



