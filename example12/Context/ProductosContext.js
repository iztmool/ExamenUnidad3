import React, {createContext, useState} from 'react';

export const ProductosContext = createContext();

const ProductosProvider = (props)=>{
    const [productos, setProductos] = useState([
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
        {codigo:7,descripcion:"Xiaomi Redmi Note 8s", precio:4989},
        {codigo:8,descripcion:"Mochila Targus", precio:999},
        {codigo:9,descripcion:"Teclado Logitech", precio:1489},
        ]);

    const [carro, setCarro]= useState([]);
    
    const [total, setTotal]= useState([]);

    const agregar =(producto,precio)=>{
        setCarro([...carro,producto])
        setTotal(Number(total)+Number(precio))
    }

    const eliminar =(index,precio)=>{

        const temporal = carro.filter((a,i)=>i!==index)

        setCarro(temporal)
        setTotal(Number(total)-Number(precio))
    }

    
    return(
        <ProductosContext.Provider
            value={{
                productos,
                carro, 
                total,
                setProductos,
                setCarro,
                setTotal,
                eliminar,
                agregar,
            }}
        >
            {props.children}

        </ProductosContext.Provider>
    )
}

export default ProductosProvider;