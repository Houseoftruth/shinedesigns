(function(){
var app = angular.module('store',['appRoutes','userServices','ngFileUpload','chart.js']);

																																																  

app.config(function($httpProvider){


	console.log("Angular.js loaded")

	



});
app.controller('mainCtrl', ['$http','$scope','$timeout','User','$interval', function($http,$scope,$timeout,User,$interval) {

        
    $timeout(function(){
        $scope.loaded = true;
    },500)
    $scope.contactSlideInLeft = false;
    $scope.contactSlideUpDown = false;
    $scope.contactSlideInRight = false;
    $scope.contactSlideDownUp = false;
    $scope.homePressed = false;
    $scope.contactPressed = false;
    $scope.fadeInSmallMenu= false;
    $scope.removeLargeMenu = false;
    $scope.initialLoad = true;
    $scope.menuPressed = false;
    $scope.fadeOutHome = false;
    $scope.fadeOutHomePage = true;
    $scope.fadeInContact = false;
    $scope.menuPressedContact = false;
    $scope.homePageOpen = true;
    $scope.nightMode = false;
    $scope.loading = false;
    $scope.fadeOutLoading = false;
    $scope.finishedLoadingSuccess = false;
    $scope.picture="../images/moon.png"
    $scope.progress = 0
    $scope.onexServer = false;
    $scope.twoxServer = false;
    $scope.threexServer = true;
    $scope.smStorage = true;
    $scope.medStorage = false;
    $scope.largeStorage = false;
    $scope.detailedTableOpen = false;
    $scope.clickdog =false
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
      responsive:false,
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

    $scope.userObject = {
        userName : "",
        name : "",
        email : "",
        password : ""
    }
    $scope.openDetailedTable = function(){
        if(!$scope.detailedTableOpen){
            $scope.detailedTableOpen = true;
        }else{
            $scope.detailedTableOpen = false;
        }
    }
    $scope.lock =  new Audio('../audio/ui_lock.wav');
    $scope.tap =  new Audio('../audio/ui_tap-variant-01.wav');
    $scope.down =  new Audio('../audio/down.wav');
    $scope.up =  new Audio('../audio/up.wav');
    $scope.playLock = function(){
        console.log("clicked")
        $scope.lock.play();
    }
    $scope.playTap = function(){
        console.log("clicked")
        $scope.tap.play();
        $scope.clickdog= true;
        $timeout(function(){
            $scope.clickdetail = true;
        },500)
        $timeout(function(){
            $scope.clickcert = true;
        },1000)
        $timeout(function(){
            $scope.clickpay = true;
        },1500)
        $timeout(function(){
            $scope.clickdog = false;
        },3000)
        $timeout(function(){
            $scope.clickdetail = false;
        },3200)
        $timeout(function(){
            $scope.clickcert = false;
        },3400)
        $timeout(function(){
            $scope.clickpay = false;
        },3600)
    }
    $scope.intakeInfo={}
$scope.q1 = null
$scope.q2 = null
$scope.results = []
$scope.loading = false;
$scope.showResults = false;
$scope.noDifference = false;
$scope.pulseSelect = false;
$scope.rollRight = false;

$scope.bigPink = false;
$scope.color = false;
$scope.colortwo = false;
$scope.colorthree = false;
$scope.button = 0;
$scope.darkOneTwo = function(number){
    var button = number;
    if($scope.colorthree){
            $scope.colorthree = false;
            $scope.color = false;
            $scope.colortwo = false;
            $scope.up.play();

        }else if( $scope.color){
            $scope.colorthree = true;
            $scope.color = false;
            $scope.colortwo = false;
            $scope.down.play();
        }else if( $scope.colortwo){
            $scope.colorthree = true;
            $scope.color = false;
            $scope.colortwo = false;
            $scope.down.play();
        }
        else if( !$scope.colortwo && !$scope.colorthree&& !$scope.color){
            $scope.colorthree = true;
            $scope.color = false;
            $scope.colortwo = false;
            $scope.down.play();
        }
}
$scope.darkStorageOneTwo = function(){
    
    if($scope.colorStorageThree){
        $scope.up.play();
        navigator.vibrate([100])
    $scope.colorStorage = false;
    $scope.colorStorageTwo = false;
    $scope.colorStorageThree = false;
    
    }else if( $scope.colorStorageTwo){
        $scope.down.play();
        navigator.vibrate([100])
        $scope.colorStorageThree = true;
        $scope.colorStorage = false;
        $scope.colorStorageTwo = false;
        
    }else if( $scope.colorStorage){
        $scope.down.play();
        navigator.vibrate([100])
        $scope.colorStorageThree = true;
        $scope.colorStorage = false;
        $scope.colorStorageTwo = false;
    }else if( !$scope.colorStorageTwo && !$scope.colorStorageThree&& !$scope.colorStorage){
        $scope.down.play();
        navigator.vibrate([100])
        $scope.colorStorageThree = true;
        $scope.colorStorage = false;
        $scope.colorStorageTwo = false;
    }
    
    
    }
    $scope.darkStorageOneThree = function(){
    
        if($scope.colorStorageTwo){
            $scope.up.play();
            navigator.vibrate([100])
        $scope.colorStorage = false;
        $scope.colorStorageTwo = false;
        $scope.colorStorageThree = false;
        
        }else if( $scope.colorStorage){
            $scope.down.play();
            navigator.vibrate([100])
            $scope.colorStorageThree = false;
            $scope.colorStorage = false;
            $scope.colorStorageTwo = true;
            
        }else if( $scope.colorStorageThree){
            $scope.down.play();
            navigator.vibrate([100])
            $scope.colorStorageThree = false;
            $scope.colorStorage = false;
            $scope.colorStorageTwo = true;
        }else if( !$scope.colorStorageTwo && !$scope.colorStorageThree&& !$scope.colorStorage){
            $scope.down.play();
            navigator.vibrate([100])
            $scope.colorStorageThree = false;
            $scope.colorStorage = false;
            $scope.colorStorageTwo = true;
        }
        
        
        }
$scope.darkOneThree = function(){
    if($scope.colortwo){
            $scope.colortwo = false;
            $scope.color = false;
            $scope.colorthree = false;
            $scope.up.play();
        }else if( $scope.color){
            $scope.colorthree = false;
            $scope.color = false;
            $scope.colortwo = true;
            $scope.down.play();
        }else if( $scope.colorthree){
            $scope.colorthree = false;
            $scope.color = false;
            $scope.colortwo = true;
            $scope.down.play();
        }else if( !$scope.colortwo && !$scope.colorthree&& !$scope.color){
            $scope.colorthree = false;
            $scope.color = false;
            $scope.colortwo = true;
            $scope.down.play();
        }
}
$scope.startPulse = function(){
/*$scope.pulseSelect = true;
$scope.slideOutFirst = true;

$timeout(function(){
    $scope.slideOutSecond = true;
},700)

$timeout(function(){
    $scope.rollRight = true;
},1200)
$timeout(function(){
    $scope.bigPink= true;
},1650)*/
if($scope.color){
    $scope.up.play();
    navigator.vibrate([100])
$scope.color = false;
$scope.colortwo = false;
$scope.colorthree = false;

}else if( $scope.colortwo){
    $scope.down.play();
    navigator.vibrate([100])
    $scope.colorthree = false;
    $scope.color = true;
    $scope.colortwo = false;
    
}else if( $scope.colorthree){
    $scope.down.play();
    navigator.vibrate([100])
    $scope.colorthree = false;
    $scope.color = true;
    $scope.colortwo = false;
}else if( !$scope.colortwo && !$scope.colorthree&& !$scope.color){
    $scope.down.play();
    navigator.vibrate([100])
    $scope.colorthree = false;
    $scope.color = true;
    $scope.colortwo = false;
}


}
$scope.colorStorage = false;
$scope.colorStorageTwo = false;
$scope.colorStorageThree = false;
$scope.startStoragePulse = function(){
    
    if($scope.colorStorage){
        $scope.up.play();
        navigator.vibrate([100])
    $scope.colorStorage = false;
    $scope.colorStorageTwo = false;
    $scope.colorStorageThree = false;
    
    }else if( $scope.colorStorageTwo){
        $scope.down.play();
        navigator.vibrate([100])
        $scope.colorStorageThree = false;
        $scope.colorStorage = true;
        $scope.colorStorageTwo = false;
        
    }else if( $scope.colorStorageThree){
        $scope.down.play();
        navigator.vibrate([100])
        $scope.colorStorageThree = false;
        $scope.colorStorage = true;
        $scope.colorStorageTwo = false;
    }else if( !$scope.colorStorageTwo && !$scope.colorStorageThree&& !$scope.colorStorage){
        $scope.down.play();
        navigator.vibrate([100])
        $scope.colorStorageThree = false;
        $scope.colorStorage = true;
        $scope.colorStorageTwo = false;
    }
    
    
    }

    
$scope.noInput=false;
$scope.runTest = function(){
    $scope.noInput= false;
    $scope.noDifference=false;
    $scope.loading = true;
    console.log($scope.intakeInfo)
    console.log($scope.intakeInfo.question2)
  


    if($scope.intakeInfo.question1 !== undefined && $scope.intakeInfo.question2 !==undefined){


        $scope.q1=JSON.parse($scope.intakeInfo.question1)
        $scope.q2=JSON.parse($scope.intakeInfo.question2)
        for(var i = 0; i< $scope.q1.length; i ++ ){


        if(($scope.q2[i]["Type"] !== $scope.q1[i]["Type"]) && ($scope.q2[i]["Tag Number"] == $scope.q1[i]["Tag Number"])) {
            console.log("Change of Tag Preference")
            var temp = {}
            temp["Number"] = $scope.q2[i]["Tag Number"]
            temp["oldtag"] = $scope.q1[i]["Type"]
            temp["newtag"] = $scope.q2[i]["Type"]
            $scope.results.push(temp)
            console.log($scope.results,"$scope.results")
           if(i == $scope.q1.length-1){
                $scope.loading = false;
                $scope.showResults = true;
               // $scope.results=[]
               // $scope.temp = {}
                console.log("HEE")
            
            }

        }else{

            if(i == $scope.q1.length-1 && $scope.results.length == 0 ){
                $scope.loading = false;
                $scope.noDifference = true
//$scope.results = []
                //$scope.temp ={}
                console.log("HEE2")
            }
            if(i == $scope.q1.length-1 && $scope.results.length > 0 ){
                $scope.loading = false;
                $scope.showResults = true;
                //$scope.results =[]
                //$scope.temp = {}
                console.log("HEE2")
            }
            
        }
    }
}else{  
    $scope.loading = false;
    $scope.noInput = true

}
}
$scope.backToCheck = function(){

        $scope.showResults = false;
        $scope.results = []
        $scope.temp = {}

    
}
    $scope.serverSwitch = function(){
        $interval(function(){
    
            if($scope.largeStorage){
                $scope.smStorage = true;
                $scope.largeStorage =false;

            }else if($scope.medStorage){
                $scope.largeStorage = true;
                $scope.medStorage = false;
            }else if($scope.smStorage){
                $scope.medStorage = true;
                $scope.smStorage = false;
            }
             if($scope.threexServer ){
                $scope.onexServer = false;
                $scope.threexServer = false;
                $scope.twoxServer = true;
                
            }
            else if($scope.twoxServer){
                $scope.threexServer = false;
                $scope.twoxServer= false;
                $scope.onexServer = true;
                console.log(2)
            }
            else if($scope.onexServer){
                $scope.twoxServer= false;
                $scope.onexServer = false;
                $scope.threexServer = true;
               
            }
        },2000)
    }
    $scope.serverSwitch()
    /*User.getProfileImage("5caa4a61b3358b21e831cd2c").then(function(data){
        console.log(data)
    })
    User.uploadProfileImage().then(function(data){
        
    })
    */
   $scope.testIp = function(){
       console.log('click')
       User.testIp().then(function(data){

       })
   }
    $scope.checkProgress = function(){
        $scope.progress = 0;
        $interval(function(){
            if($scope.progress<86){
                $scope.progress =$scope.progress +1;
                console.log("og")
            }else{
                $timeout(function(){
                   
                },3000)
            }
           },50)
    }
 
    $scope.submitUser = function(){
   
        if(($scope.userObject.email !== null || "") &&
            ($scope.userObject.password !== null || "")){
                $scope.loading= true;
                $timeout(function(){
                    $scope.finishedLoadingSuccess= true;
                    
                },3000)
                $timeout(function(){
                   $scope.loading = false;
                   $scope.finishedLoadingSuccess = false;

                    $scope.fadeOutHomePage = true;
                },5000)
               
                    
               
                
                console.log($scope.userObject)
               // User.create($scope.userObject).then(function(data){
               //     console.log(data)
               // })
                
            }else{
                
            }
    }
    ///$scope.submitUser()
    $scope.nightModeToggle = function(){
        console.log("nightModeToggled")
        if(!$scope.nightMode){
            $scope.nightMode = true;
        }else{
            $scope.nightMode = false;
        }
    }
    $scope.openHome = function(){
       // console.log("Home opened")
        //$scope.contactSlideInLeft = false;
        $scope.homePressed = true;
        setTimeout(function(){
            $scope.homePressed = false;
            console.log("homePressed = falseo")
        },1000)

    }
    $scope.openContact = function(){
        console.log("Home opened")
        //$scope.contactSlideInLeft = false;
        //$scope.removeLargeMenu = true;
        //$scope.contactPressed = true;
        $scope.menuPressedContact=true
        //$scope.fadeInSmallMenu = true;
        //$scope.fadeOutHome = true;
        $scope.fadeOutHomePage = true;

        $timeout(function(){
            //$scope.removeLargeMenu = true;
            //$scope.fadeInSmallMenu = true;
            
            $scope.fadeOutHome = true;
            console.log("homePressed = false",$scope.fadeOutHome)
        },1000)
        $timeout(function(){
            $scope.homePageOpen = false;
           
           $scope.fadeInContact = true;
        },2000)
        $timeout(function(){
            //$scope.homePageOpen = false;
            $scope.menuPressedContact=false
            //$scope.fadeOutHome = false;
          // $scope.fadeInContact = true;
        },2500)

        $timeout(function(){
            //$scope.homePageOpen = false;
            //$scope.menuPressedContact=false
            $scope.fadeOutHome = false;
          // $scope.fadeInContact = true;
        },3500)
    }
}]);


}());


    