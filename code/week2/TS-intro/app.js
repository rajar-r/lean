// var isDone:boolean = true;
// isDone = false;
class Car {
    move(w) {
        w.rotate();
        console.log('car is moving..');
    }
}
class MRFWheel {
    rotate() {
        console.log("MRF Wheel rotating...");
    }
}
let c = new Car();
c.move(new MRFWheel());
