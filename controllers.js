angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

//Crepe-Stop

    
.controller('menu', function($scope,$rootScope) {
 
    
$scope.menu1Heding = [
    { title: 'Savoury', id: 1 }
  ];
    
$rootScope.menu1Products = [
    { title: 'Mexicano', id: 1 , state: 'mexicano', bg: 'Menu-Strip(42x73).png' }, 
    { title: 'Pizzalicious', id: 2 , state: 'pizzalicious', bg: 'piz.jpg' }, 
    { title: 'Lahori Love', id: 3 , state: 'lahoriLove', bg: '3.jpg' }, 
    { title: 'Mushroom Heaven', id: 4 , state: 'mushroomHeaven', bg: '' }, 
    { title: 'Veg n Chesse', id: 5 , state: 'vegNChesse', bg: '' } 
  ];
    
    
    
$rootScope.menu2Products = [
    { title: 'Banana Split', id: 1 , state: 'bananaSplit', bg: '' }, 
    { title: 'Rocky Road', id: 2 , state: 'rockyRoad', bg: '' }, 
    { title: 'Naughty Nutella', id: 3 , state: 'naughtyNutella', bg: '' } 
  ];
    
$scope.menu2Heding = [
    { title: 'Sweet', id: 1 } 
  ];
    
    
})



.controller('detail', function($scope, $stateParams,$rootScope) {
    
    var id = $stateParams.detailId;
    $scope.title="";
    $scope.bg="";
//    $scope.des="";
//    $scope.icon="";
    
    for(var i =0 ; i< $rootScope.menu1Products.length;i++){
        
        if( id == $rootScope.menu1Products[i].id  ){
            
            $scope.title = $rootScope.menu1Products[i].title;
            $scope.bg = $rootScope.menu1Products[i].bg;
//            $scope.des = $rootScope.sidemenu[i].des;
//            $scope.icon = $rootScope.sidemenu[i].icon;
            
        }
    }
    
    // $rootScope.sidemenu
    
})





.controller('detail2', function($scope, $stateParams,$rootScope) {
    
    var id = $stateParams.detailId;
    $scope.title="";
    $scope.bg="";
//    $scope.des="";
//    $scope.icon="";
    
    for(var i =0 ; i< $rootScope.menu2Products.length;i++){
        
        if( id == $rootScope.menu2Products[i].id  ){
            
            $scope.title = $rootScope.menu2Products[i].title;
            $scope.bg = $rootScope.menu2Products[i].bg;
//            $scope.des = $rootScope.sidemenu[i].des;
//            $scope.icon = $rootScope.sidemenu[i].icon;
            
        }
    }
    
    // $rootScope.sidemenu
    
})



.controller('showSavoury',function($scope,$mdDialog,$rootScope,$ionicModal,
$ionicPopup){

    //
    
    
         $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.imageSrc = 'http://ionicframework.com/img/ionic-logo-blog.png';

    $scope.showImage = function(index) {
            
      switch(index) {
        case 1:
          $scope.imageSrc = 'img/pizaa.jpg';
          $scope.name = 'PIZZALICIOUS';
          $scope.short_des = 'Spicy Chicken.Sauces,Vegies,Olives,Cheese';
          $scope.price = '240';
          break;
        case 2:
          $scope.imageSrc  = 'img/nn.jpg';
          $scope.name = 'MAXICANO';
          $scope.short_des = 'Veg Salsa,Spicy Chicken,French Mustrad,Sauces And Olives.';
          $scope.price = '220';
          break;
        case 3:
          $scope.imageSrc  = 'img/rr.jpg';
          $scope.name = 'MUSHROOMS HEAVEN';
          $scope.short_des = 'White Sauces,Chicken,Cheese And Mushrooms';
          $scope.price = '220';
          break;
              
         case 4:
          $scope.imageSrc  = 'img/bs.jpg';
          $scope.name = 'LAHORI LOVE';
          $scope.short_des = 'Herb Potatos,Cheese,Mayo,Olives And Imli Sauce.';
          $scope.price = '180';
          break;   
              
         case 5:
          $scope.imageSrc  = 'img/piz.jpg'
          $scope.name = 'VEG & CHEESE';
          $scope.short_des = 'Sauces,Cheese And Vegies';
          $scope.price = '180';
          break;         
      }
      $scope.openModal();
    }
  
    
    
    
    //
    
$ionicModal.fromTemplateUrl('templates/savoury.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.signup_modal = modal;
  });
    
    //open the signup model
     $scope.signup = function() {


         $scope.signup_modal.show();

        };
    
    
    // Triggered in the signup modal to close it
  $scope.closeSignup = function() {
    $scope.signup_modal.hide();
  };
    
    
     $rootScope.menus = [
    { name: 'PIZZALICIOUS', short_des: 'Spicy Chicken.Sauces,Vegies,Olives,Cheese', price: '240',id:1 },
    { name: 'MAXICANO', short_des: 'Veg Salsa,Spicy Chicken,French Mustrad,Sauces And Olives.', price: '220',id:2 },
    { name: 'MUSHROOMS HEAVEN', short_des: 'White Sauces,Chicken,Cheese And Mushrooms', price: '220',id:3 },
    { name: 'LAHORI LOVE', short_des: 'Herb Potatos,Cheese,Mayo,Olives And Imli Sauce.', price: '180',id:4 },
    { name: 'VEG & CHEESE', short_des: 'Sauces,Cheese And Vegies', price: '180',id:5 }
  ];
     
    
    
    $scope.alert = function(name,des,price){
        
        $scope.data  = name;
        $scope.des   = des;
        $scope.price = price;
        
        
        
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title($scope.data)
        .textContent($scope.des)
        .ariaLabel('Alert Dialog Demo')
        .ok("Price: "+$scope.price)
        
        .openFrom({
          top: -80,
          width: 30,
          height: 80
        })
        .closeTo({
          left: 1500
        })
        
        
        .targetEvent(name,des,price)
    );
        
    }
    
    $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
        
        
        
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('PIZZALICIOUS')
        .textContent('Spicy Chicken.Sauces,Vegies,Olives,Cheese')
        .ariaLabel('Alert Dialog Demo')
        .ok('Price 240')
        .targetEvent(ev)
    );
  };

    
})




.controller('showSweets',function($scope,$mdDialog,$rootScope,$ionicModal,
$ionicPopup){
    
    
    
    
         $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.imageSrc = ''; //Default

    $scope.showImage = function(index) {
            
      switch(index) {
        case 1:
          $scope.imageSrc = 'img/bs.jpg';
          $scope.name = 'Banana Split';
          $scope.short_des = 'Banana N Nutella.';
          $scope.price = '150';
          break;
       
        case 2:
          $scope.imageSrc  = 'img/rr.jpg';
          $scope.name = 'Rocky Road';
          $scope.short_des = 'Peanut Butter,Nutella And Cookies.';
          $scope.price = '160';
          break;
              
         case 3:
          $scope.imageSrc  = 'img/nn.jpg';
          $scope.name = 'Naughty Nutella';
          $scope.short_des = 'Plain Nutella.';
          $scope.price = '150';
          break;   
         
      }
      $scope.openModal();
    }
  
    
    
    
     $scope.menus = [
    { name: 'Banana Split', short_des: 'Banana N Nutella.', price: '150' ,id:1}, 
    { name: 'Rocky Road', short_des: 'Peanut Butter,Nutella And Cookies.', price: '160',id:2 },
    { name: 'Naughty Nutella', short_des: 'Plain Nutella.', price: '150',id:3 } 
  ];
    
     
    
    $scope.alert = function(name,des,price){
        
        $scope.data  = name;
        $scope.des   = des;
        $scope.price = price;
        
        
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title($scope.data)
        .textContent($scope.des)
        .ariaLabel('Alert Dialog Demo')
        .ok("Price: "+$scope.price)
        
        .openFrom({
          top: -50,
          width: 30,
          height: 80
        })
        .closeTo({
          left: 1500
        })
        
        .targetEvent(name,des,price)
    );
        
    }
    
    
    $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('PIZZALICIOUS')
        .textContent('Spicy Chicken.Sauces,Vegies,Olives,Cheese')
        .ariaLabel('Alert Dialog Demo')
        .ok('Price 240')
        .targetEvent(ev)
    );
  };

    
    
})

.controller('showAll', function($scope,$mdDialog,$rootScope,$ionicModal,
$ionicPopup) {
    
    
    
         $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

//    $scope.imageSrc = 'http://ionicframework.com/img/ionic-logo-blog.png';

    $scope.showImage = function(index) {
            
      switch(index) {
        case 1:
          $scope.imageSrc = 'img/pizaa.jpg';
          $scope.name = 'PIZZALICIOUS';
          $scope.short_des = 'Spicy Chicken.Sauces,Vegies,Olives,Cheese';
          $scope.price = '240';
          break;
        case 2:
          $scope.imageSrc  = 'img/piz.jpg';
          $scope.name = 'MAXICANO';
          $scope.short_des = 'Veg Salsa,Spicy Chicken,French Mustrad,Sauces And Olives.';
          $scope.price = '220';
          break;
        case 3:
          $scope.imageSrc  = 'img/rr.jpg';
          $scope.name = 'MUSHROOMS HEAVEN';
          $scope.short_des = 'White Sauces,Chicken,Cheese And Mushrooms';
          $scope.price = '220';
          break;
              
         case 4:
          $scope.imageSrc  = 'img/pizaa.jpg';
          $scope.name = 'LAHORI LOVE';
          $scope.short_des = 'Herb Potatos,Cheese,Mayo,Olives And Imli Sauce.';
          $scope.price = '180';
          break;   
              
         case 5:
          $scope.imageSrc  = 'img/piz.jpg';
          $scope.name = 'VEG & CHEESE';
          $scope.short_des = 'Sauces,Cheese And Vegies';
          $scope.price = '180';
          break;    
              
         case 6:
          $scope.imageSrc  = 'img/bs.jpg';
          $scope.name = 'Banana Split';
          $scope.short_des = 'Banana N Nutella.';
          $scope.price = '150';
          break;    
              
          case 7:
          $scope.imageSrc  = 'img/rr.jpg';
          $scope.name = 'Rocky Road';
          $scope.short_des = 'Peanut Butter,Nutella And Cookies.';
          $scope.price = '160';
          break;    
              
          case 8:
          $scope.imageSrc  = 'img/nn.jpg';
          $scope.name = 'Naughty Nutella';
          $scope.short_des = 'Plain Nutella';
          $scope.price = '150';
          break;    
               
              
              
      }
      $scope.openModal();
    }
  
    
    
    
$scope.customFullscreen = false;
    
    
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

   $scope.showAdvanced = function(ev) {
     
       alert('Entered');
       $mdDialog.show({
        
      controller: DialogController,
      templateUrl: 'templates/savoury.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
       
    .then(function(answer) {
console.log('Entering');
           $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
    
    console.log('showAll controller invoke...');
    
    $scope.menus = [
    { name: 'PIZZALICIOUS', short_des: 'Spicy Chicken.Sauces,Vegies,Olives,Cheese', price: '240',id: 1 },
    { name: 'MAXICANO', short_des: 'Veg Salsa,Spicy Chicken,French Mustrad,Sauces And Olives.', price: '220', id: 2},
    { name: 'MUSHROOMS HEAVEN', short_des: 'White Sauces,Chicken,Cheese And Mushrooms', price: '220',id: 3},
    { name: 'LAHORI LOVE', short_des: 'Herb Potatos,Cheese,Mayo,Olives And Imli Sauce.', price: '180',id: 4 },
    { name: 'VEG & CHEESE', short_des: 'Sauces,Cheese And Vegies', price: '180',id: 5 },
         { name: 'Banana Split', short_des: 'Banana N Nutella.', price: '150',id: 6 },
   
    { name: 'Rocky Road', short_des: 'Peanut Butter,Nutella And Cookies.', price: '160',id: 7 },
    { name: 'Naughty Nutella', short_des: 'Plain Nutella.', price: '150',id: 8 } 
  ];
    
    
    
    $scope.alert = function(name,des,price){
        
        $scope.data    = name;
        $scope.des     = des;
        $scope.price   = price;
        $scope.content = 'Price: ';
        
        
        
        
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title($scope.data)
        .textContent($scope.des)
        .ariaLabel('Alert Dialog Demo')
        .ok($scope.content+""+$scope.price)
        
        .openFrom({
          top: -80,
          width: 30,
          height: 80
        })
        .closeTo({
          left: 1500
        })
        
        .targetEvent(name,des,price)
    );
        
    }
    
    
    
    $scope.showAlert = function(ev) {
 
        
        
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
        
        
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('PIZZALICIOUS')
        .textContent('Spicy Chicken.Sauces,Vegies,Olives,Cheese')
        .ariaLabel('Alert Dialog Demo')
        .ok('Price 240')
        .targetEvent(ev)
    );
  };

    
    
})



//Crepe-Stop
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
