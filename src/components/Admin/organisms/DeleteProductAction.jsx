import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductContext";
import DeleteModal from "./DeleteModal";

import React from 'react'
import { useState } from "react";
import DeleteProductBtn from "../atoms/adminCrudBtns/DeleteProductBtn";

const DeleteProductAction = ({ product }) => {
  const { deleteProductById } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
    <DeleteProductBtn
      onClick={onOpen}
    />
    <DeleteModal
      isOpen={isOpen}
      onClose={onClose}
      productId={product?.id}
      deleteProductById={deleteProductById}
    />
    </>
    
  )
}

export default DeleteProductAction;