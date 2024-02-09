import { Card } from 'antd';
import {Checkbox,Input,Button} from 'antd';
const {TextArea} = Input;

const ConfiguracionFidelizacion = () =>{
    return(
        <div >
            <div className='h-screen'
            >
                <div className='text-right pb-6'>                <Button >Guardar</Button>


                </div>
                <Card title="Invitacion a Contactos" >
                    <div className='text-left'>
                    <Checkbox>Activa</Checkbox>
                    <p>Indica que los clientes van a poder enviar a sus contactos la invitación.</p>
                    <TextArea rows={4} placeholder="Mensaje"  />
                    <p>
Texto por defecto que los clientes envían a sus contactos para invitarlos al centro de actividades físicas. El sistema agregará automáticamente al final del mismo el nombre, apellido y código de referencia del cliente.

</p>
                <p>Recuerde incluir el nombre del centro de actividades físicas en el texto del mensaje.</p>
                    </div>
                </Card>
                <Card title="Tarjeta Online" >
                    <div className='text-left'>
                    <Checkbox>Activa</Checkbox>
                    <p>Indica que los clientes van a tener acceso a validar a su tarjeta online y validación online de la misma.</p>
                    <Input placeholder="Tarjeta Online" allowClear  />                    <p>
Nombre para la tarjeta online o plan de beneficios.

</p>
                    </div>
                </Card>

                <Card title="Mensaje en Aplicacion" >
                    <div className='text-left'>
                    <Checkbox>Mostrar</Checkbox>
                    <p>Mostrar mensaje de sumatoria de puntos en aplicación de clientes.</p>
                    </div>
                </Card>
                <Card title="Ventas Online" >
                    <div className='text-left'>
                    <Checkbox>Aplicar restricciones de nivel a venta online en la App
</Checkbox>
                    <p>Si está marcada, indica que los clientes solamente van a poder comprar items que estén permitidos para su nivel de fidelización o que no tengan restricción por nivel.</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default ConfiguracionFidelizacion;