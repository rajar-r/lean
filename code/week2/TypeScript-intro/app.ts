

// var isDone:boolean = true;
// isDone = false;


// let list: Array<number> = [1, 2, 3];
// list.push(4);
// // list.push("a");

// let x: [string, number];


// enum Color {Red, Green, Blue};
// let c: Color = Color.Green;

//---------------------------------------

interface Wheel{
    rotate(): void;
}

class Car{
    move(w:Wheel) {
        w.rotate();
        console.log('car is moving..');
    }

}

class MRFWheel implements Wheel{
    rotate() {
        console.log("MRF Wheel rotating...");
    }
}

let c: Car = new Car();
c.move(new MRFWheel());