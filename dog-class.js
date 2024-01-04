
class Dog {
    static allDogs = [];

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.walks = [];
        this.totalDistance = 0;
        Dog.allDogs.push(this);
    }
    walk(distance) {
        this.totalDistance += distance;
        this.walks.push(distance);
    }
    totalWalkDistance() {
        return Number(this.totalDistance);
    }
    averageWalkDistance() {
        return Number(this.totalDistance/this.walks.length);
    }
    walkSummary() {
        console.log(this.walks);
    }

    static getByBreed(breed) {
        return this.allDogs.filter(dog => dog.breed == breed);
    }

    //NOT CORRECT - should divide by total number of walks by all dogs, not bynumber of dogs
    static averageWalkDistance() {
        const averages = this.allDogs.map(dog => dog.averageWalkDistance());
        const sum = averages.reduce((total, average) => (total + average), 0);
        return sum/this.allDogs.length;
    }
}

const rex = new Dog("Rex", "Poodle");

console.log(rex.totalWalkDistance());
rex.walk(10);
console.log(rex.totalWalkDistance());
rex.walk(20);
console.log(rex.totalWalkDistance());
rex.walkSummary();


const bob = new Dog("Bob", "Pug");
console.log(bob.totalWalkDistance());
bob.walk(5);
console.log(bob.totalWalkDistance());
bob.walk(5);
console.log(bob.totalWalkDistance());
bob.walkSummary();

console.log(Dog.getByBreed("Pug"));

console.log(Dog.averageWalkDistance());
