import {Circle} from "./Circle";
class Cylinder extends Circle{
      private height:number
    constructor(radius: number, color: string,height:number) {
        super(radius, color);
        this.height=height
    }

    getHeight(): number {
        return this.height;
    }
    setHeight(value: number) {
        this.height = value;
    }
    getVolum(){
          return super.getArena()*this.getRadius()
    }
    toString(): string {
        return `this Cylinder has the bottom surface area is ${super.getArena()},height=${this.getHeight()},Volum=${this.getVolum()}, color=${this.getColor()}`
    }

}
let cylinder1= new Cylinder(7,"pink",10)
cylinder1.setRadius(5)
cylinder1.setHeight(9)
console.log(cylinder1.toString())

