angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({
        "code": $scope.input.code,
        "name": $scope.input.BuildingName,
        "coordinates": {
          "latitude": $scope.input.Latitude,
          "longitude":$scope.input.Longitude
        },
        "address" : $scope.input.Address
      })
    };
    $scope.deleteListing = function(index) {
       $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detaile = $scope.listings[index];
    };

    $scope.open = function() {
      $scope.showModal = true;
    };

    $scope.ok = function() {
      $scope.showModal = false;
      $scope.clearData();
    };

    $scope.cancel = function() {
      $scope.showModal = false;
      $scope.clearData();
    };

    $scope.clearData = function(){
      $scope.input.code = null;
      $scope.input.BuildingName = null;
      $scope.input.Address = null;
      $scope.input.Latitude = "";
      $scope.input.Longitude = "";

    }

  }
]);
