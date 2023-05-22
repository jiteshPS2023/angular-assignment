export class Route2Json{
    public title: string;
    public description: string;
    public buttonText: string;
    public price: number;
    constructor(title: string, description: string, buttonText: string, price: number)
    {
        this.title = title;
        this.description = description;
        this.buttonText = buttonText;
        this.price = price;
    }
}