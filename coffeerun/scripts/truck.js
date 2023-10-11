(function (window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        return this.db.add(order.emailAddress, order);
    }

    Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        return this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function (printFn) {
        return this.db.getAll()
            .then(function(orders) {
                var customerIdArray = Object.keys(orders);

                console.log('Truck #' + this.truckId + ' has pending orders:');
                customerIdArray.forEach(function (id) {
                    console.log(orders[id]);
                    if (printFn) {
                        printFn(orders[id]);
                    }
                }.bind(this));
            }.bind(this));
    };

    Truck.runTests = function() {
        var App = window.App;
        var Truck = App.Truck;
        var DataStore = App.DataStore;
        var myTruck= new Truck('ncc1705', new DataStore());

        console.log('---------- running Truck tests ----------')
        myTruck.createOrder({ emailAddress: 'ryker@starfleet.com', order: 'caramel macciato' });
        myTruck.createOrder({ emailAddress: 'laforge@starfleet.com', order: 'boba' });
        myTruck.createOrder({ emailAddress: 'data@starfleet.com', order: 'water' });
        myTruck.createOrder({ emailAddress: 'picard@starfleet.com', order: 'earl grey hot' });
        myTruck.createOrder({ emailAddress: 'crusher@starfleet.com', order: 'coca-cola' });
        myTruck.createOrder({ emailAddress: 'worf@starfleet.com', order: 'triple espresso' });
        myTruck.printOrders();

        myTruck.deliverOrder('laforge@starfleet.com');
        myTruck.deliverOrder('crusher@starfleet.com');
        myTruck.deliverOrder('worf@starfleet.com');
        myTruck.printOrders();

        console.log('---------- finished Truck tests ----------')
    };

    App.Truck = Truck;
    window.App = App;

})(window);