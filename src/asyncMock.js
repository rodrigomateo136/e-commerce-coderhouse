const productos= [
    {
        id:`1`,
        name: `iphone 12`,
        price: 1000,
        category:`celular`,
        stock: 25,
        img:`imagenes/iphone12.jpg`,
        descripcion: `El iPhone 12 se estrenó con iOS 14 y funciona con el procesador Apple A14 Bionic. 
        Soporta redes 5G,para mayor velocidad, con la capacidad de cambiar automáticamente a LTE según
        sea necesario para conservar la vida útil de la batería. La pantalla contiene aproximadamente el 
        doble de píxeles que el iPhone 11 con una relación de contraste de 2,000,000:1 y un rendimiento
        de caída 4 veces superior al de los modelos anteriores. El sistema de doble cámara orientado hacia 
        atrás incluye una lente ultra ancha y lente gran angular. Las bobinas cambiantes inalámbricas
        dentro del teléfono incluyen MagSafe para la alineación magnética y la conexión de cargadores y
        accesorios. El conector Lightning actualizado admite una carga más rápida a través de USB`,
    },
    {
        id:`2`,
        name: `samsung s21`,
        price: 900,
        category: `celular`,
        stock: 15, 
        img:`imagenes/samsung21.jpg`,
        descripcion:`La serie Galaxy S21 tiene un diseño similar a su predecesor, con una pantalla
        Infinity-O que contiene un recorte circular en la parte superior central para la cámara frontal
        para selfies. El panel posterior del S21 y S21 FE es de policarbonato reforzado similar al S20
        FE y Note 20 , mientras que el S21 + y el S21 Ultra usan vidrio. A excepción del S21 FE, el 
        conjunto de cámaras traseras se integró en el cuerpo del teléfono y tiene un borde metálico; 
        el S21 Ultra tiene un marco de cámara de fibra de carbono para colores exclusivos. En cambio,
        el conjunto de cámaras traseras S21 FE está integrado en el panel trasero de plástico.`,
    },
    {
        id:`3`,
        name: `xiaomi note10`,
        price: 800,
        category:`celular`,
        stock: 50,
        img:`imagenes/xiaomiNote10.jpg`,
        descripcion:`El Redmi Note 10T japonés tiene la mayoría de las especificaciones como Redmi Note 10 JE
        pero con otra cámara, diseño, capacidad de batería como Note 10 5G y compatibilidad con eSIM . 
        El 24 de mayo de 2022, Xiaomi presentó el Redmi Note 11SE , que tiene las mismas especificaciones que
        el Redmi Note 10 5G chino, pero el diseño es de POCO M3 Pro.`
    },
]

export const getProducts =()=>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(productos)
        }, 1000)
    })
}