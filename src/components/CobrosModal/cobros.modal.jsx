import { Button, Modal } from 'antd';
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import CobrosModalMixto from './cobros.modal.mixto';
const CobrosModal = ({isMixto}) => {
  console.log("Mixto es : ");
  console.log(isMixto);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };
  fetch('http://localhost:8000/api/v1/cobros', requestOptions)
      .then(response => console.log(response));
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [cobros,setCobros] = useState([]);
  const [debts,setDebts] = useState([]);
  const [total,setTotal] = useState(0);
  let selector = useSelector(state=>state.client.cobros);
  let selector2 = useSelector(state=>state.client.debts);

  useEffect(()=>{
      setCobros(selector);
      setDebts(selector2);
      let amount = 0;
      selector.map(element=>{
        amount = amount + element.price * element.cantidad;
      })
      selector2.map(element=>{
        amount = amount + parseFloat(element.price) ;
      })
      console.log("amount es : ",amount);
      setTotal(amount);
      
  },[selector,selector2]);
  
  return (
    <>
      <Button type="text" onClick={showModal}>
        Cargar Cobro
      </Button>
      <Modal title="Confirmar Cobro" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {isMixto?<CobrosModalMixto monto={total} />  : null}
        <p>Confirmar Cobro</p>
        <p>Medio de Pago : Mercado Pago</p>
        <p>Vendedor : Josefina</p>
        <p>Cliente : Joseph</p>
        <p>Total : $ {Math.round(parseFloat(total))}</p>
        
      </Modal>
    </>
  );
};
export default CobrosModal;