class Product{
	constructor(name, price, descrption, img_path){
		this.name = name;
		this.price = price;
		this.descrption = descrption;
		this.img_path = img_path;
	}
}

const product = new Product("Cat",
	23,
	"the good stuff",
	"https://i.pinimg.com/originals/ab/3c/60/ab3c60e4cded30d6ece45cf846f983b5.jpg"
);

const product_2 = new Product("dog",
	15,
	"the bad stuff",
	"https://i.pinimg.com/originals/c5/0c/40/c50c40c8017f82e25b9b9b2d69123cb6.jpg"
);

const product_3 = new Product("Cheetah",
	450,
	"the fast stuff",
	"https://th.bing.com/th/id/R.ff5887e2b209732471b889ec8af92a86?rik=lvcWAkjM2RCjag"
);

const product_4 = new Product("Lion",
	1300,
	"the dangerous stuff",
	"https://www.jaiom18.com/wp-content/uploads/2010/11/mane-of-a-lion.jpg"
);

const product_5 = new Product("Spider",
	210,
	"the scary stuff",
	"https://th.bing.com/th/id/R.683f391377805f75fcca66d5dcc90931?rik=DR5IqorrqUHA%2fQ&pid=ImgRaw&r=0"
);

const product_6 = new Product("Bear",
	6523,
	"the stuff that you don't want to play with",
	"https://th.bing.com/th/id/R.26c9abcff82b0303bd13b0b4bf64e786?rik=5rk8wlEXorvMPA&pid=ImgRaw&r=0"
);

const Products = [product, product_2, product_3, product_4, product_5, product_6];

function Shuffle(){
	var j, x, i;
    for (i = Products.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = Products[i];
        Products[i] = Products[j];
        Products[j] = x;
    }
}
Shuffle();

export default Products;