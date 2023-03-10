import './styles.scss';
import React , {useState, useEffect} from 'react';
import ItemList  from '../ItemList';
import ItemDetailContainer from '../ItemDetail';
import Titulo from '../Titulo';
import { useParams } from 'react-router-dom';


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
    nombre:"Mandarine",
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


export const ItemListContainer = ({ texto }) => {
  const [data , setData ] = useState ([]);
  const { categoriaId } = useParams();

  useEffect (() => {
    const getData = new Promise((resolve) => {
      setTimeout (() => {
        resolve(productos);
    } ,1000);
  });
    
  if (categoriaId) {
    getData.then ((res) => 
      setData(res.filter((producto) => producto.categoria === categoriaId)),
    );
    } else { 
      getData.then ((res) => setData(res));
  }
}, [categoriaId]);


  return (
    <div className="item-list-container">
      <Titulo greeting={texto} />
      <ItemList data={data}  />
  </div>
  );
}

  export default ItemListContainer;