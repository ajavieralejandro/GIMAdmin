import Input from "antd/es/input/Input";
import Checkbox from "antd/es/checkbox/Checkbox";
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";
const CrearActividad = () =>{
    return(
        <>
            <div>
            <div
  className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div
    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
    Crear Actividad
  </div>
  <div className="p-6 text-black">
    <div className="grid grid-cols-3 gap-4">
        <Input placeholder="Nombre" />
        <Input placeholder="Reservas por día cliente" />
        <Checkbox>Permitir Reserva y anulación</Checkbox>

    </div>
    <div className="grid grid-cols-3 gap-4 pt-12">
      <TextArea placeholder="Comentarios" />
      <TextArea placeholder="Recomendaciones Reserva" />


    </div>
    <div className="text-right ml-2">
          <Button > Guardar</Button>
        </div>
  </div>
      
  </div>
  
            </div>
        </>
    )
}

export default CrearActividad;