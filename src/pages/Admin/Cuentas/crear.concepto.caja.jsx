import { Select, Input,Checkbox,Button} from "antd";
import { useSelector
 } from "react-redux";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setConceptoCategoria } from "../../../store/caja/caja.actions";
import { useNavigate } from "react-router-dom";


const CrearConceptoCaja = () =>{
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const handleClick = () =>{
        console.log("Hola");
        dispatch(setConceptoCategoria(concepto));
        navigate('/cuentas/conceptos_movimiento');
    }

    const [concepto,setConcepto] = useState({
        categoria:'',
        nombre:'',
        real: '',
        cac : ''
    })
    const [categorias,setCategorias] = useState([]);
    let categorias_selector = useSelector(state=>state.caja.categorias);
    useEffect(()=>{
        let array = categorias_selector.map((e,index)=>{return{...e,key:index,value:e.nombre}});
      setCategorias(array);
    },[categorias_selector]);
    return(
        <>
           
  <div className="block rounded-lg  text-center shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
  <div
    className="border-b-2 bg-blue-300 border-neutral-100 px-6 py-3 dark:border-white/10">
    Crear Concepto
      </div>
  <div className="p-6">
  <div className="grid grid-cols-4 gap-4">
                <Input onChange={e=>setConcepto({...concepto,nombre:e.target.value})} placeholder={"descripcion"} />
                <Select onSelect={e=>setConcepto({...concepto,categoria:e})} options={categorias} placeholder="categoria" />
                <Checkbox>Real</Checkbox>
                <Checkbox>Aplica a CAC</Checkbox>
                <div>
                
</div>

</div>
<div className="text-right">
                        <Button onClick={()=>handleClick()}>Crear</Button>
                    </div>
</div>
</div>

        </>
    )
}

export default CrearConceptoCaja;