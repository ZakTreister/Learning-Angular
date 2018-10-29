export class Product {
    private id: number;
    private name?: string;
    private price: number;
    private unitsInStock: number;
    private image: string;
    public isSelected: boolean;
    public inEditing: boolean;

    public constructor(_id: number, _name: string, _price: number, _units: number = 0, _image: string = "") {
        this.id = _id;
        this.name = _name;
        this.price = _price;
        this.unitsInStock = _units;
        this.image = _image;
        this.isSelected = false;
        this.inEditing=false;
    }
    
    

    set _id(value:number){
        this.id=value;
    }

    set _name(value:string){
        this.name=value;
    }
    set _price(value:number){
        this.price=value;
    }
    set _unitsInStock(value:number){
        this.unitsInStock=value;
    }
    set _image(value:string){
        this.image=value;
    }
    get _id(){
        return this.id;
    }
    get _name(){
        return this.name;
    }
    get _price(){
        return this.price
    }
    get _unitsInStock(){
        return this.unitsInStock
    }
    get _image(){
        return this.image;
    }
}


export const products: Array<Product> = [new Product(1, "Computer", 4000, 10, "https://images-na.ssl-images-amazon.com/images/I/51ZtPTaBl0L._SY355_.jpg"),
new Product(2, "Laptop", 2000, 10, "http://www.reducereuserecycle.co.uk/images/computer.jpg"),
new Product(3, "Radio", 50, 10, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Radio.svg/1024px-Radio.svg.png"),
new Product(4, "Mouse", 75, 10, "https://images-na.ssl-images-amazon.com/images/I/411jXtQp3jL._SX425_.jpg"),
new Product(5, "Keyboard", 40, 10, "https://cougargaming.com/global/img/downloads/products_attackx3_rgb.png")
];


