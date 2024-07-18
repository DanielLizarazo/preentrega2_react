const products= [
    {
       "id":1,
        "nombre":"ALOCASIA CUPRE",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-ALOCACIA-CUPREA-.jpg",
       "cantidad":8,
       "categoria":"calathea",
       "stock":true
    },
    {
       "id":2,
       "nombre":"AFELANDRA",
       "precio":150,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/01/PLANTA-APHELANDRA-2-.jpg",
       "cantidad":5,
       "categoria":"calathea",
       "stock":true
    },
    {
       "id":3,
       "nombre":"BURLE MARXII",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-CALATHEA-BURLE-MARXII.jpg",
       "cantidad":1,
       "categoria":"calathea",
       "stock":true
    },
    {
       "id":4,
       "nombre":"FREDDIE",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-CALATHEA-FREDDIE-2-.jpg",
       "cantidad":7,
       "categoria":"calathea",
       "stock":true
    },
    {
       "id":5,
       "nombre":"ANTURIO HOLANDES",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-ANTURIO-ANARANJADO.jpg",
       "cantidad":3,
       "categoria":"flor",
       "stock":true
    },
    {
       "id":6,
       "nombre":"BEGONIA",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-BEGONIA-SEMPERFLORENS.jpg",
       "cantidad":1,
       "categoria":"flor",
       "stock":true
    },
    {
       "id":7,
       "nombre":"HORTENSIA",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/08/HORTENSIA-PLANTA.jpg",
       "cantidad":10,
       "categoria":"flor",
       "stock":true
    },
    {
       "id":8,
       "nombre":"ALBAHACA",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-AROMATICA-ALBAHACA-MORADA-2-.jpg",
       "cantidad":9,
       "categoria":"aromaticas",
       "stock":true
    },
    {
       "id":9,
       "nombre":"LAVANDA",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/05/PLANTA-LAVANDA.jpg",
       "cantidad":6,
       "categoria":"aromaticas",
       "stock":true
    },
    {
       "id":10,
       "nombre":"HIERBABUENA",
       "precio":100,
       "imagen":"https://www.mygarden.com.co/wp-content/uploads/2020/01/HIERBABUENA.png",
       "cantidad":1,
       "categoria":"aromaticas",
       "stock":true
    }
 ]


 export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.categoria === categoryId));
      }, 500);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 500);
    });
  };