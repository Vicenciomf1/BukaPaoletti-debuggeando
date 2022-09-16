const data = [
    {
        id: 1,
        title: "5 años extraños",
        subtitle: "Doble Neipa",
        price: 800,
        img: "/Assets/CardImg/añosExtraños.jpg",
        stock: 20,
    }, {
        id: 2,
        title: "Alma gorda",
        subtitle: "Czech Amber Lager",
        price: 450,
        img: "/Assets/CardImg/AlmaGorda.jpg",
        stock: 15,
    }, {
        id: 3,
        title: "Almas muertas",
        subtitle: "Imperial Stout",
        price: 650,
        img: "/Assets/CardImg/AlmasMuertas.jpg",
        stock: 20,
    }, {
        id: 4,
        title: "Amor amarillo",
        subtitle: "NEPA",
        price: 600,
        img: "/Assets/CardImg/amorAmarillo.jpg",
        stock: 15,
    }, {
        id: 5,
        title: "Capitán Nelson",
        subtitle: "NEIPA",
        price: 760,
        img: "/Assets/CardImg/capitanNelson.jpg",
        stock: 20,
    }, {
        id: 6,
        title: "Casi maduro",
        subtitle: "Sour Ale",
        price: 700,
        img: "/Assets/CardImg/casiMaduro.jpg",
        stock: 15,
    }, {
        id: 7,
        title: "Catacumbia",
        subtitle: "Imperial Stout",
        price: 790,
        img: "/Assets/CardImg/Catacumbia.jpg",
        stock: 20,
    }, {
        id: 8,
        title: "Cortado, por favor",
        subtitle: "Oatmeal Milk Stout",
        price: 590,
        img: "/Assets/CardImg/cortadoPorFavor.jpg",
        stock: 15,
    }, {
        id: 9,
        title: "Fiestas de focas",
        subtitle: "Festbier",
        price: 450,
        img: "/Assets/CardImg/fiestaDeFocas.jpg",
        stock: 20,
    }, {
        id: 10,
        title: "Fruta 40",
        subtitle: "NEPA",
        price: 600,
        img: "/Assets/CardImg/fruta.jpg",
        stock: 15,
    }
];

export default function getBeer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

