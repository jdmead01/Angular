class Bike {
    price : number;
    max_speed : string;
    miles : number;
    constructor (price: number, max_speed: string){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;

        console.log("Bike created");

    }

    // displayInfo() - have this method display the bike's price, maximum speed, and the total miles.

    displayInfo(){
        console.log("Price : " + this.price + ", Max Speed : " + this.max_speed + ", Total miles : " + this.miles)
    }
    // ride() - have it display "Riding" on the screen and increase the total miles ridden by 10

    ride(){
        console.log("Riding ...");
        this.miles += 10;
        return this;
    }

    // reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...

    reverse(){
        console.log("Reversing ...");
        if (this.miles <= 5) {
            this.miles = 0;
            return this;
        } else {
            this.miles -= 5;
            return this;
        }
    }
}

var bike1 = new Bike(3000, "50mph");
var bike2 = new Bike(8000, "80mph");
var bike3 = new Bike(1000, "30mph");

// Have the first instance ride three times, reverse once and have it displayInfo()
console.log("******** First Bike ********");
bike1.ride().ride().ride().reverse();
bike1.displayInfo();

// Have the second instance ride twice, reverse twice and have it displayInfo()
console.log("******** Second Bike ********");
bike2.ride().ride().reverse().reverse();
bike2.displayInfo();

// Have the third instance reverse three times and displayInfo()
console.log("******** Third Bike ********");
bike3.reverse().reverse().reverse();
bike3.displayInfo();

// What would you do to prevent the instance from having negative miles?

// ***** Answer: if/else statement in the reverse() section of the code above this.miles=0 keeps it at zero. 