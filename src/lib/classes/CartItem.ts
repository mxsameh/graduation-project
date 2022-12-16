class CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;


  constructor(id :  number, image : string, name : string, price : number, quantity : number){
    this.id = id;
    this.image = image;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

}

export default CartItem;