const data = [
    {
        id: 1,
        title: "5 años extraños",
        subtitle: "Doble Neipa",
        detail: "Es nuestra Doble NEIPA de penta aniversario, con un alto factor fiesta y un perfil de fruta del trópico que marida una barbaridá con la jarana que nos traemos entre garras.",
        price: 800,
        img: "/Assets/CardImg/añosExtraños.jpg",
        stock: 20,
        category: "ipa",
        alc: "8.9%",
    }, {
        id: 2,
        title: "Alma gorda",
        subtitle: "Czech Amber Lager",
        detail: "Exhuberante delicia checa. El inconfundible sabor a la corteza del pan recien horneado y un carácter lupulado tan herbal como fresco. Crocante, sequita, maltosa y acaramelada.",
        price: 450,
        img: "/Assets/CardImg/AlmaGorda.jpg",
        stock: 15,
        category: "amber",
        alc: "13.5%",
    }, {
        id: 3,
        title: "Almas muertas",
        subtitle: "Imperial Stout",
        detail: "El postre más peligroso de tu vida. Con agregados de nueces pecán, vainilla y canela. Sedosa, suntuosa, viscosa. Destacadas notas a café y caramelo oscuro con un final decididamente dulce y decadente.",
        price: 650,
        img: "/Assets/CardImg/AlmasMuertas.jpg",
        stock: 20,
        category: "imperial",
        alc: "8.6%",
    }, {
        id: 4,
        title: "Amor amarillo",
        subtitle: "NEPA",
        detail: "Alta en viscosidad, sedosidad y percepción de cuerpo. Mucha resina de pino, mucha fruta dulce. Bien tropical.",
        price: 600,
        img: "/Assets/CardImg/amorAmarillo.jpg",
        stock: 15,
        category: "ipa",
        alc: "5.6%",
    }, {
        id: 5,
        title: "Capitán Nelson",
        subtitle: "NEIPA",
        detail: "Maravilla duraznosa y cítrica. Amargor ligero en cuerpo sedoso, con un final apenitas dulce. Una de nuestras birras más pedidas que se convirtió en un clásico de la casa. Nelson Sauvin, Simcoe, Mosaic y Citra: con un cuarteto así, difícil que algo salga mal.",
        price: 760,
        img: "/Assets/CardImg/capitanNelson.jpg",
        stock: 20,
        category: "ipa",
        alc: "8.5%",
    }, {
        id: 6,
        title: "Casi maduro",
        subtitle: "Sour Ale",
        detail: "Una reposera líquida en las blancas arenas de tu playa favorita. Un licuadito tropical hecho con cantidades inusitadas de maracuyá y guayaba. Relajate, estirá las piernas y disfrutá de una experiencia de tomabilidad trascendental.",
        price: 700,
        img: "/Assets/CardImg/casiMaduro.jpg",
        stock: 15,
        category: "sour",
        alc: "4.4%",
    }, {
        id: 7,
        title: "Catacumbia",
        subtitle: "Imperial Stout",
        detail: " Es nuestra nueva Imperial (Desayuno) Stout: no creíamos que tanto café wush wush pudiera entrar en una lata. Caramelo, bizcocho y mucha malta. Dulce, deliciosa, decadente.",
        price: 790,
        img: "/Assets/CardImg/Catacumbia.jpg",
        stock: 20,
        category: "imperial",
        alc: "12%",
    }, {
        id: 8,
        title: "Cortado, por favor",
        detail: "Un clásico Strange. Bondad chocolatosa, maltosa y cafeinada con un buen kick. El café colombiano y los nibs de cacao te dan todo lo que necesitás para despertar de todos tus males. Contiene lactosa.",
        subtitle: "Oatmeal Milk Stout",
        price: 590,
        img: "/Assets/CardImg/cortadoPorFavor.jpg",
        stock: 15,
        category: "imperial",
        alc: "6.5%",
    }, {
        id: 9,
        title: "Fiestas de focas",
        subtitle: "Festbier",
        detail: "Una Helles con un extra de fiesta. Rubia, cristalina, maltosa; notas a pan y miel. Si estuvieses en el Oktoberfest, ésta sería tu mamadera.",
        price: 450,
        img: "/Assets/CardImg/fiestaDeFocas.jpg",
        stock: 20,
        category: "amber",
        alc: "5.9%",
    }, {
        id: 10,
        title: "Fruta 40",
        detail: "Hecha con avena y trigo. Livianita como una nube y absurdamente tomable. Súper limpia sin ser insulsa. Armonía entre lo frutado, lo cítrico y lo terroso.",
        subtitle: "NEPA",
        price: 600,
        img: "/Assets/CardImg/fruta.jpg",
        stock: 15,
        category: "ipa",
        alc: "5.4%",
    },{
        id: 11,
        title: "Ambar",
        detail: "Una cerveza ligera elaborada a partir de la combinación de 8 variedades de malta que le aportan su característico color cobre y un marcado perfil maltoso, con notas a galleta, pan tostado y caramelos suaves. Ideal para todo momento, refrescante, con final seco y levemente dulce.",
        subtitle: "Amber lager",
        price: 450,
        img: "/Assets/CardImg/ambar.png",
        stock: 20,
        category: "amber",
        alc: "4%",
    },{
        id: 12,
        title: "Cercano oeste",
        detail: "Una IPA de la “vieja escuela”, en la cual se destaca el lúpulo por sobre la malta, con un final seco, amargor limpio y pasajero. Esta combinación de lúpulos nos permite apreciar aromas y sabores a naranja y lima, pimienta negra, maracuyá y damasco. Sin embargo le metimos nuestra impronta con una levadura que genera ésteres frutados (rompiendo un poco con la teoría del estilo). Te acercamos un ejemplar de la costa oeste de EEUU, para que no sea tan lejana.",
        subtitle: "West coast IPA",
        price: 700,
        img: "/Assets/CardImg/CercanoOeste.jpg",
        stock: 15,
        category: "ipa",
        alc: "6.5%",
    }, {
        id: 13,
        title: "Pandora",
        detail: "Como su nombre lo indica, es una caja de sorpresas. Un brebaje de cuerpo aterciopelado, de peligrosa tomabilidad y excelente balance. Un viaje de plenitud entre sabores tropicales y frutas frescas, gracias al tridente de lúpulos Nelson Sauvin, Citra y Simcoe. A sumergirse en esta aventura líquida.",
        subtitle: "NEIPA",
        price: 740,
        img: "/Assets/CardImg/Pandora.jpg",
        stock: 20,
        category: "ipa",
        alc: "6.5%",
    },{
        id: 14,
        title: "Macedonia",
        detail: "Una NEIPA diseñada al alcance de todos. De color pálido, turbio y gran tomabilidad, con elegantes cantidades de avena, trigo y centeno que aportan una compleja textura y cremosidad en boca. El aroma y sabor son un enigma de frutas tropicales y cítricas, producto de un dry-hop de Mosaic y Waimea. Bienvenidos a esta Macedonia de frutas, el postre que se repite.",
        subtitle: "mini NEIPA",
        price: 600,
        img: "/Assets/CardImg/Macedonia.jpg",
        stock: 15,
        category: "ipa",
        alc: "5%",
    },{
        id: 15,
        title: "Casi Hawaii",
        detail: "Una cerveza rubia de alta tomabilidad, con soporte maltoso, portadora de notas a pan/galleta en retrogusto y un final limpio y seco, En aroma y sabor emergen notas frutales y cítricas (mandarina, lima), un sutil perfil a pino y frutos rojos producto de un agregado de lúpulos de zonas oceánicas: Waimea / Wakatu / Pacific Gem.",
        subtitle: "NZ pale",
        price: 530,
        img: "/Assets/CardImg/casiHawaii.jpg",
        stock: 20,
        category: "ipa",
        alc: "5%",
    },{
        id: 16,
        title: "Insolente",
        detail: "Una IPA de bajo amargor y contenido alcohólico, ideal para ser tomada en todo momento. En aroma y sabor se perciben notas a ananá, melón, mango y maracuyá, que evocan una frescura tropical. Capaz de seducir a cualquier paladar, es fiel como ninguna y no se deja cambiar, por eso es nuestra Insolente.",
        subtitle: "Session IPA",
        price: 550,
        img: "/Assets/CardImg/Insolente.jpg",
        stock: 15,
        category: "ipa",
        alc: "5%",
    },{
        id: 17,
        title: "Atolondrada",
        detail: "Una pausa reflexiva en esta permanente y desquiciada rutina. Una cerveza color rubí, de amargor suave y cuerpo ligero. Un perfecto ejemplo de equilibrio entre malta y lúpulo. En aroma y sabor se perciben notas a frutas de carozo, pasas, cítricos y florales.",
        subtitle: "American Amber Ale",
        price: 530,
        img: "/Assets/CardImg/Atolondrada.jpg",
        stock: 20,
        category: "amber",
        alc: "5.3%",
    }
];

export default function getBeer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1500)
    })
}

export function BeerDetail(id) {
    return new Promise((resolve, reject) => {
        let itemFind = data.find((item) => {
            return item.id === parseInt(id);
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else reject ( new Error ("item no encontrado"));
        }, 1500);
    })
}

export function BeerCategory(cat) {
    return new Promise((resolve, reject) => {
        let itemFind = data.filter((item) => {
            return item.category === cat;
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else reject (new Error ("categoria no encontrada"));
        }, 1500);
    })
}
