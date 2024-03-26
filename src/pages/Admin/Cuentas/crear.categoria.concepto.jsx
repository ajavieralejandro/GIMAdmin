import Input from "antd/es/input/Input";
import { Select,Button } from "antd";
import { useDispatch } from "react-redux";
import { setCategoriaConcepto } from "../../../store/caja/caja.actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearCategoriaConcepto = () =>{
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [categoria,setCategoria] = useState({
        nombre : '',
        tipo : ''
    })
    const handleClick = () =>{
        dispatch(setCategoriaConcepto(categoria));
        navigate('/categorias_concepto');

    }

    const handleClick2 = () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
                nombre : categoria.nombre,
                tipo : categoria.tipo
                        })
        };
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/conceptos',requestOptions)
        .then(res=>res.json())
        .then(data=>navigate('/categorias_concepto')
        );
        

    }

    return(
        <>
                     
  <div className="block rounded-lg  text-center shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
  <div
    className="border-b-2 bg-blue-300 border-neutral-100 px-6 py-3 dark:border-white/10">
    Crear Concepto
      </div>
  <div className="p-6">
  <div className="grid grid-cols-4 gap-4">
                <Input onChange={e=>setCategoria({...categoria,nombre:e.target.value})} placeholder={"Nombre"} />
                <Select onSelect={e=>setCategoria({...categoria,tipo:e})} options={[
                    {
                        key:1,
                        value:'Ingreso'
                    },{
                        key:2,
                        value:'Egreso'

                    }
                ]} placeholder="Tipo" />
              
                <div>
                
</div>

</div>
<div className="text-right">
                        <Button onClick={()=>handleClick2()}>Crear</Button>
                    </div>
</div> 
</div>
        </>
    )
}

export default CrearCategoriaConcepto; 