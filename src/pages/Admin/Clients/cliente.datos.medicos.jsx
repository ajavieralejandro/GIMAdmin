import { useState } from "react";
import { Switch,Input } from "antd";
const ClienteDatosMedicos = () =>{
    const [fumador,setFumador] = useState(false);
    const [medicamentos,setMedicamentos] = useState(false);
    const [alergico,setAlergico] = useState(false)
    const [lesion,setLesion] = useState(false);
    const [enfermedadCardiaca,setEnfermedadCardiaca] = useState(false);
    const [enfermedadCronica,setEnfermedadCronica] = useState(false);
    const [datos,setDatos] = useState({
        fumador: "",
        lesiones:"",

    })
    return(
        <div>
        <div className=" rounded  shadow-md">
        <h1 className="text-lg m-auto p-2">Datos Medicos</h1>
        <div className="grid m-2 grid-cols-2 gap-2 pb-6 ">
            <div>
                <Switch onChange={e=>setFumador(!e)} className="bg-blue-300" size="medium" /><h1>Fumador</h1>
            </div>
          
            <Input disabled={fumador} placeholder="Cuantos por día?"></Input>
            <div>
                <Switch onChange={e=>setMedicamentos(!e)} className="bg-blue-300" size="medium" /><h1>Medicamentos</h1>
            </div>
          
            <Input disabled={medicamentos} placeholder="Que medicamentos?"></Input>

            <div>
            <Switch onChange={e=>setAlergico(!e)} className="bg-blue-300" size="medium" /><h1>Alergico</h1>
        </div>
      
        <Input disabled={alergico} placeholder="A que?"></Input>
        <div>
            <Switch onChange={e=>setLesion(!e)} className="bg-blue-300" size="medium" /><h1>Lesion</h1>
        </div>
      
        <Input disabled={lesion} placeholder="Cuál/es?"></Input>

        <div>
        <Switch onChange={e=>setEnfermedadCardiaca(!e)} className="bg-blue-300" size="medium" /><h1>Enfermedad Cardiaca</h1>
    </div>
  
    <Input disabled={enfermedadCardiaca} placeholder="Cuál/es?"></Input>
    
        
        
            
        </div>
        </div>
        </div>
    )
}

export default ClienteDatosMedicos;