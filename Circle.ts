export class Circle{
    private radius:number
    private color:string
    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }


    getRadius(): number {
        return this.radius;
    }

    setRadius(value: number) {
        this.radius = value;
    }

    getColor(): string {
        return this.color;
    }

    setColor(value: string):void {
        this.color = value;
    }
    getArena():number{
        return this.radius*this.radius*Math.PI
    }
    toString():string{
        return `this Circle has radius=${this.getRadius()}, color=${this.getColor()},Arena=${this.getArena()}`
    }
}

let circle1=new Circle(5,"red")
circle1.setRadius(6)
circle1.setColor("blue")
console.log(circle1.toString())
