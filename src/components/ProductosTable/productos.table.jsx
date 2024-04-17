import GenericTable from '../GenericTable/GenericTable';
import Input from 'antd/es/input/Input';
import { Space } from 'antd';
const ProductosTable = ({productos}) =>{
    console.log("Productos es :",productos)
    const columns = [{
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Cantidad',
        render: () => (
        <Space size="middle">
        <Input placeholder='Cantidad' />
        </Space>
      )}
    ];
    return(
        <div className='pt-4'>
            <GenericTable columns={columns} data={productos} />
        </div>
    )
}

export default ProductosTable;