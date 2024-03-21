import CajasTables from '../../../components/CajasTables/CajasTables'
import { Space,Button,} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect,useState
 } from 'react';
const columns = [

    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
   
  
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Editar {record.name}</a>
          <a>Saldos</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      descripcion: 'ABONOS',
      abreviatura: '07',
     
      active: true,
    },
    
   
  ];
const Categorias = () =>{
  /*
    const [user,setUser] = useState(null);
  let user_selector = useSelector(state=>state.user.currentUser);
  useEffect(() => {
      if(user_selector!=null)
        setUser(user_selector);
    }, [user_selector])

  */ 
  const [categorias,setCategorias] = useState([]);
  let categorias_selector = useSelector(state=>state.caja.categorias);
  useEffect(()=>{
    console.log(categorias_selector);
    setCategorias(categorias_selector);
  },[categorias_selector]);
  let navigate =  useNavigate();
  const handleClick = () =>{
    navigate('/cuentas/crear_categoria_concepto');
  }
    return <>
                <div className='text-right'>
                  <Button onClick={()=>handleClick()}>Crear Categoria Concepto</Button>
                </div>
                <CajasTables data={categorias} columns={columns} />

    </>
}

export default Categorias;