app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: []
        };

        console.log($scope.model.availableToppings);

        $scope.addTopping = function(topping){
            console.log(topping)
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            $scope.model.toppingAdded = true;
            console.log($scope.model.toppings);
        }

        /*
        $scope.hide = function(){
            $scope.model.toppingAdded = false;
        }
        */
    }
]);