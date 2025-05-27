const products = [
    {
        id:1, 
        category:"nuevos", 
        name:"Escalera plegable", 
        img:"https://quepatas.com/cdn/shop/files/ESCPLE-2_8264d937-6787-450f-bb69-19ad8522df8b.jpg?v=1747856676&width=713", 
        description:"Escalera plegable para mascotas, ideal para coches y sofás. Soporta hasta 50 kg, con peldaños antideslizantes. Medidas desplegada: 58 x 38 x 50 cm. Colores: Beige, Gris, Marrón.", 
        price:90
    },
    {
        id:2, 
        category:"nuevos", 
        name:"Cama elevada", 
        img:"https://quepatas.com/cdn/shop/files/CAMA-ELEVADA.jpg?v=1747856568&width=713", 
        description:"Cama elevada para mascotas: alivia las articulaciones y mantiene frescas con su diseño de malla transpirable. Fácil de limpiar, duradera y portátil. Ideal para descanso en casa, terraza o camping.", 
        price:80
    },
    {
        id:3, 
        category:"ofertas", 
        name:"Cama pata de oso", 
        img:"https://quepatas.com/cdn/shop/files/CPO-1_e78899eb-82d5-4d84-b121-b5ebc69dccb0.jpg?v=1747856626&width=713", 
        description:"Cama para mascotas de felpa premium, suave y transpirable. Alivia la ansiedad, brinda soporte para cabeza y cuello. Ideal para interiores y exteriores. Mantiene a tu mascota cálida y cómoda.", 
        price:60
    },
    {
        id:4, 
        category:"ofertas", 
        name:"Correa de nylon", 
        img:"https://quepatas.com/cdn/shop/files/CNYL-1_aefc1d72-b3a7-4278-83ad-b7a52cfc8737.jpg?v=1747856684&width=713", 
        description:"Correa de nylon de 1,5 m, ideal para perros medianos y grandes. Resistente, con hebilla D, detalles reflectantes para visibilidad nocturna y mango antideslizante para un paseo cómodo y seguro.", 
        price:22
    },
    {
        id:5, 
        category:"populares", 
        name:"Bolso Transportador", 
        img:"https://quepatas.com/cdn/shop/files/BOT-1_1506650e-4934-49dc-91e8-c25eb6da5a16.jpg?v=1747856609&width=713", 
        description:"Transportador ligero y cómodo para mascotas hasta 7 kg. Malla transpirable para ventilación, diseño espacioso que reduce la ansiedad. ¡Compra ahora para viajar con comodidad!", 
        price:64
    },
    {
        id:6, 
        category:"populares", 
        name:"Pechera con Correa", 
        img:"https://quepatas.com/cdn/shop/files/PC-2_6ea2eb59-74b0-4554-a7dc-54dd3bcc343d.jpg?v=1747856591&width=713", 
        description:"Arnés para perros de poliéster duradero, cómodo y seguro. Hebillas resistentes y correas ajustables. Disponible en azul, rosado, negro y rojo. Tallas S a XL. ¡Compra ahora y disfruta de paseos seguros!", 
        price:33
    },
    {
        id:7, 
        category:"nuevos", 
        name:"Rascador Palmera", 
        img:"https://quepatas.com/cdn/shop/files/RASPAL-2_2c9c711a-a8e6-4ca3-b1cb-b965cae39c10.jpg?v=1747856755&width=713", 
        description:"Rascador de 40x80 cm, de sisal y madera natural. Ideal para gatos de todos tamaños. Fomenta el rascado, mantiene las garras saludables y protege tus muebles. Incluye pompones para más diversión.", 
        price:148
    },
    {
        id:8, 
        category:"ofertas", 
        name:"Cama Sofá", 
        img:"https://quepatas.com/cdn/shop/files/CASO-1_650f7ac6-49fb-49e7-9956-7989fb1c3fac.jpg?v=1747856618&width=713", 
        description:"Cama rectangular para mascotas con bordes gruesos. Materiales de alta calidad: franela, algodón PP y gamuza. Desarmable, base antideslizante y fácil de lavar. Disponible en azul y gris.", 
        price:95
    },
    {
        id:9, 
        category:"populares", 
        name:"Pechera con Correa Premium", 
        img:"https://quepatas.com/cdn/shop/files/PCP-1_c9788026-afe0-4bdd-b332-bf8234335c79.jpg?v=1747856592&width=713", 
        description:"Kit de arnés y correa para perros, con tela ligera y transpirable. Incluye bandas reflectantes para seguridad nocturna. Disponible en azul, morado, rojo y gris.", 
        price:48
    },
    {
        id:10, 
        category:"nuevos", 
        name:"Arnés de Cuero con Correa", 
        img:"https://quepatas.com/cdn/shop/files/ACC-1_a9c249ab-a46b-4c41-8d37-77bc94ecaba0.jpg?v=1747856583&width=713", 
        description:"Arnés ajustable para perros, de cuero impermeable y material antiadherente. Cómodo, duradero y sin tirones. Ideal para todo el año, con anillo trasero para controlar los tirones. Tallas S, M, L.", 
        price:20
    },

]

export const GetProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
}
export const getSingleProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(p => p.id === Number(id));
            resolve(product);
        }, 500);
    });
};
export const getNewProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newProducts = products.filter(p => p.category === "nuevos");
            resolve(newProducts);
        }, 500);
    });
};
export const getOfertProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newProducts = products.filter(p => p.category === "ofertas");
            resolve(newProducts);
        }, 500);
    });
};
export const getPopularProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newProducts = products.filter(p => p.category === "populares");
            resolve(newProducts);
        }, 500);
    });
};

    
