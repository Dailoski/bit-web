"use strict";
Person.prototype.getData = function () {
    return this.name + this.surname;
}
Passenger.prototype.getData = function () {
    return this.seat.number + " , " + this.seat.category.toUpperCase() + " , " + this.person.getData();
}
Flight.prototype.addPassenger = function (putnikObj) {
    this.listOfPassengers.push(putnikObj);
}
Flight.prototype.getData = function () {
    return this.date + "," + this.relation;
}
Airport.prototype.addFlight = function (letObj) {
    this.list.push(letObj);
}
Airport.prototype.getData = function(){
    var ukupnoPutnika = 0;
    var formatiranTekst= '';
    for (var i = 0; i < this.list.length; i++) {
        formatiranTekst += '\t' + this.list[i].relation + '\n';
        for (var j = 0; j < this.list[i].listOfPassengers.length; j++) {
            formatiranTekst += '\t'+'\t' + this.list[i].listOfPassengers[j].getData()+ '\n';
            
        }
        
    }
    for (var i = 0; i < this.list.length; i++) {
        ukupnoPutnika+=this.list[i].listOfPassengers.length;            
    }
    return "Airport: " + this.airName +", total passengers: " +ukupnoPutnika + "\n" +  formatiranTekst;
};


function Person(nName, sSurname) {
    this.name = nName;
    this.surname = sSurname;
     
}

function Seat(nNumber, cCategory) {
    this.number = nNumber || Math.floor((Math.random() * 90) + 10);
    this.category = cCategory || "e";
}
function Passenger(personObj, seatObj) {
    this.person = personObj;
    this.seat = seatObj;
    
}
function Flight(rRelation, dDate) {
    this.relation = rRelation;
    this.date = dDate;
    this.listOfPassengers = [];
    

}
function Airport() {
    this.airName = "Nikol Tesla";
    this.list = [];
    
    
}




(function () {
    function createFlight(relation, date) {
        return new Flight(relation, date);
    }
    function createPassenger(name, surname, seatNumber, cat) {
        var prs = new Person(name, surname);
        var sea = new Seat(seatNumber, cat);
        return new Passenger(prs, sea);
    }
    var aerodrom = new Airport();
    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Tyrion", "Lannister");

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    aerodrom.addFlight(flight1);
    aerodrom.addFlight(flight2);

    console.log(aerodrom.getData());
})();