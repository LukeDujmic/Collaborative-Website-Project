class item{
    constructor(name, imageLink, price, sale, percent, synop)
    {
        this.name = name;
        this.image = imageLink;
        this.price = price;
        if(sale === true)
        {
            this.onSale = true;
        }
        else
        {
            this.onSale = false;
        }
        if(this.onSale === true)
        {
            this.percent = percent;
        }
        else
        {
            this.percent = 0;
        }
        if(synop != undefined)
        {
            this.info = synop;
        }
    }
}

var itemList = [new item("bread", "the g drive... wait,no", 30, false, 0, "This is bread. It is wheat, egg, and yeast."), new item("bread2", "the g drive... wait,no", 30, false, 0, "This is bread. It is wheat, egg, and yeast."),new item("bread3", "the g drive... wait,no", 30, false, 0, "This is bread. It is wheat, egg, and yeast.")];

