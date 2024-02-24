import { Button, Modal } from 'antd';
import React, { useState } from 'react';
const CobrosModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="text" onClick={showModal}>
        Cargar Cobro
      </Button>
      <Modal title="Confirmar Cobro" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Confirmar Cobro</p>
        <p>Medio de Pago : Mercado Pago</p>
        <p>Vendedor : Josefina</p>
        <p>Cliente : Joseph</p>
        <p>Total : $1551</p>
        
      </Modal>
    </>
  );
};
export default CobrosModal;