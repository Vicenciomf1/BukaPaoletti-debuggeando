const data = [
    {
        id: 1,
        title: "5 años extraños",
        subtitle: "Doble Neipa",
        detail:"Es nuestra Doble NEIPA de penta aniversario, con un alto factor fiesta y un perfil de fruta del trópico que marida una barbaridá con la jarana que nos traemos entre garras.",
        price: 800,
        img: "/Assets/CardImg/añosExtraños.jpg",
        stock: 20,
        category:"ipa",
    }, {
        id: 2,
        title: "Alma gorda",
        subtitle: "Czech Amber Lager",
        detail: "Exhuberante delicia checa. El inconfundible sabor a la corteza del pan recien horneado y un carácter lupulado tan herbal como fresco. Crocante, sequita, maltosa y acaramelada.",
        price: 450,
        img: "/Assets/CardImg/AlmaGorda.jpg",
        stock: 15,
        category:"amber",
    }, {
        id: 3,
        title: "Almas muertas",
        subtitle: "Imperial Stout",
        detail: "El postre más peligroso de tu vida. Con agregados de nueces pecán, vainilla y canela. Sedosa, suntuosa, viscosa. Destacadas notas a café y caramelo oscuro con un final decididamente dulce y decadente.",
        price: 650,
        img: "/Assets/CardImg/AlmasMuertas.jpg",
        stock: 20,
        category:"imperial",
    }, {
        id: 4,
        title: "Amor amarillo",
        subtitle: "NEPA",
        detail: "Alta en viscosidad, sedosidad y percepción de cuerpo. Mucha resina de pino, mucha fruta dulce. Bien tropical.",
        price: 600,
        img: "/Assets/CardImg/amorAmarillo.jpg",
        stock: 15,
        category:"ipa",
    }, {
        id: 5,
        title: "Capitán Nelson",
        subtitle: "NEIPA",
        detail: "Maravilla duraznosa y cítrica. Amargor ligero en cuerpo sedoso, con un final apenitas dulce. Una de nuestras birras más pedidas que se convirtió en un clásico de la casa. Nelson Sauvin, Simcoe, Mosaic y Citra: con un cuarteto así, difícil que algo salga mal.",
        price: 760,
        img: "/Assets/CardImg/capitanNelson.jpg",
        stock: 20,
        category:"ipa",
    }, {
        id: 6,
        title: "Casi maduro",
        subtitle: "Sour Ale",
        detail: "Una reposera líquida en las blancas arenas de tu playa favorita. Un licuadito tropical hecho con cantidades inusitadas de maracuyá y guayaba. Relajate, estirá las piernas y disfrutá de una experiencia de tomabilidad trascendental.",
        price: 700,
        img: "/Assets/CardImg/casiMaduro.jpg",
        stock: 15,
        category:"sour",
    }, {
        id: 7,
        title: "Catacumbia",
        subtitle: "Imperial Stout",
        detail: " Es nuestra nueva Imperial (Desayuno) Stout: no creíamos que tanto café wush wush pudiera entrar en una lata. Caramelo, bizcocho y mucha malta. Dulce, deliciosa, decadente.",
        price: 790,
        img: "/Assets/CardImg/Catacumbia.jpg",
        stock: 20,
        category:"imperial",
    }, {
        id: 8,
        title: "Cortado, por favor",
        detail: "Un clásico Strange. Bondad chocolatosa, maltosa y cafeinada con un buen kick. El café colombiano y los nibs de cacao te dan todo lo que necesitás para despertar de todos tus males. Contiene lactosa.",
        subtitle: "Oatmeal Milk Stout",
        price: 590,
        img: "/Assets/CardImg/cortadoPorFavor.jpg",
        stock: 15,
        category:"imperial",
    }, {
        id: 9,
        title: "Fiestas de focas",
        subtitle: "Festbier",
        detail: "Una Helles con un extra de fiesta. Rubia, cristalina, maltosa; notas a pan y miel. Si estuvieses en el Oktoberfest, ésta sería tu mamadera.",
        price: 450,
        img: "/Assets/CardImg/fiestaDeFocas.jpg",
        stock: 20,
        category:"amber",
    }, {
        id: 10,
        title: "Fruta 40",
        detail: "Hecha con avena y trigo. Livianita como una nube y absurdamente tomable. Súper limpia sin ser insulsa. Armonía entre lo frutado, lo cítrico y lo terroso.",
        subtitle: "NEPA",
        price: 600,
        img: "/Assets/CardImg/fruta.jpg",
        stock: 15,
        category:"ipa",
    }
];

export default function getBeer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}

export function BeerDetail(id) {
    return new Promise((resolve) => {
        let itemFind = data.find((item) =>{
            return item.id === parseInt(id);
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
        }, 500);
    })
}

export function BeerCategory(cat){
    return new Promise((resolve)=>{
        let itemFind = data.filter((item)=>{
            return item.category === cat;
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
        }, 500);
    })
}
