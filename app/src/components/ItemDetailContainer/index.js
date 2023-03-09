import React, {useEffect  , useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";



const productos = [
  {
      id:1,
      nombre: "Vanilla",
      imagen: "/vanilla.webp",
      categoria:'Velas',
  },
  {
      id:2,
      nombre: "Bamboo",
      imagen: "/bamboo.webp",
      categoria:'Velas',
  },
  {
    id:3,
    nombre: "Lemon",
    imagen: "/lemon.webp",
    categoria: 'Velas',
  },
  {
    id:4,
    nombre: "Mandarine",
    imagen: "/mandarin.webp",
    categoria: 'Velas',
  },
  {
    id:5,
    nombre: "Fresh",
    imagen: "/fresh.webp",
    categoria: 'Velas',
  },
  {
    id:6,
    nombre: "Difusor Lavanda",
    imagen: "/difusor-lavanda.webp",
    categoria: 'Difusores',
  },
  {
    id:7,
    nombre: "Difusor Frutal",
    imagen: "/difusor-frutal.webp",
    categoria: 'Difusores',
  },
  {
    id:8,
    nombre: "Refill para difusor Lavanda",
    imagen: "/difusor-refill1.jpg",
    categoria: 'Repuestos',
  },
  {
    id:9,
    nombre: "Refill para difusor Frutal",
    imagen: "/difusor-refill2.webp",
    categoria: 'Repuestos',
  },
  
];

const ItemDetailContainer = () => {
    const [data , setData ] = useState ({});
    const { detalleId } = useParams();
  
    useEffect (() => {
      const getData = new Promise((resolve) => {
        setTimeout (() =>{
          resolve(productos);
      } ,2000);
    });

    getData.then((res) => setData(res.find((producto) => producto.id === parseInt(detalleId))),
    ); 
  }, [detalleId]);
  
    return <ItemDetail data={data} />;
};

export default ItemDetailContainer;