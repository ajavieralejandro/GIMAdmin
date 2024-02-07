import { Menu } from "antd";
import {UserOutlined} from '@ant-design/icons';
const MenuList = () => {
    return (
        <>
        <Menu theme="light"  mode="inline" >
            <Menu.SubMenu
                title="Ventas"
            >
                <Menu.Item>
                    Cuentas
                </Menu.Item>
                <Menu.Item>
                    Nueva Venta
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item icon={UserOutlined} key="Clientes" > 
                Clientes
            </Menu.Item>
        </Menu>
        </>
    )
}

export default MenuList;