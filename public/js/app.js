

(function () {
    var app = angular.module('store', ['appRoutes', 'userServices', 'ngFileUpload', 'chart.js']);



    app.config(function ($httpProvider) {


        console.log("Angular.js loaded")





    });
    app.controller('mainCtrl', ['$http', '$scope', '$timeout', 'User', '$interval', '$window', function ($http, $scope, $timeout, User, $interval, $window) {


        $timeout(function () {
            $scope.loaded = true;
        }, 500)

        $scope.fadeInRight = false;
        $scope.fadeInRight2 = false;
        $scope.fadeInRight3 = false;
        $timeout(function () {
            $scope.fadeInRight = true;

        }, 100)
        $timeout(function () {
            $scope.fadeInRight2 = true;

        }, 200)
        $timeout(function () {
            $scope.fadeInRight3 = true;

        }, 300)
        $scope.contactSlideInLeft = false;
        $scope.contactSlideUpDown = false;
        $scope.contactSlideInRight = false;
        $scope.contactSlideDownUp = false;
        $scope.homePressed = false;
        $scope.contactPressed = false;
        $scope.fadeInSmallMenu = false;
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
        $scope.picture = "../images/moon.png"
        $scope.progress = 0
        $scope.onexServer = false;
        $scope.twoxServer = false;
        $scope.threexServer = true;
        $scope.smStorage = true;
        $scope.medStorage = false;
        $scope.largeStorage = false;
        $scope.detailedTableOpen = false;
        $scope.clickdog = false
        $scope.labels3 = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

        $scope.data3 = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];
        $scope.labels2 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series2 = ['Series A', 'Series B'];

        $scope.data2 = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        $timeout(function () {
            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
        }, 2000)
        $scope.webChart = true;
        $scope.barChart = false;
        $scope.hillChart = false;
        $scope.fadeInWeb = false;
        $scope.fadeOutWeb = false;
        $scope.fadeInHill = false;
        $scope.fadeOutHill = false;
        $scope.fadeInBar = false;
        $scope.fadeOutBar = false;
        $scope.firstName = true;
        $scope.contactEmail = false;
        $scope.howCanWeHelp = false;
        $scope.testContact = function(){
            if($scope.firstName){
                $scope.contactEmail = true;
                $scope.firstName = false;
            }else if($scope.contactEmail){
                $scope.contactEmail = false;
                $scope.howCanWeHelp = true;

            }else if ($scope.howCanWeHelp ){
                $scope.howCanWeHelp = false;
                $scope.firstName= true;
            }

        }        // $timeout(function () {
        //  $scope.fadeInBar = true;
        //$scope.barChart = true;
        // },3000)
        $scope.fadeOutWebChart = function () {

            $scope.fadeOutWeb = false;
            $scope.webChart = true;
            $scope.fadeInWeb = true;
            $timeout(function () {
                $scope.fadeInWeb = false;
                $scope.fadeOutWeb = true;
            }, 4000)
            $timeout(function () {
                $scope.fadeOutBar = false;
                $scope.webChart = false;
                $scope.barChart = true;
                $scope.fadeInBar = true;
                
            }, 5000)
            $timeout(function(){
                $scope.fadeInBar = false;
                $scope.fadeOutBar = true;
            },9000)

            $timeout(function(){
                $scope.fadeOutHill = false;
                $scope.barChart = false;
                $scope.hillChart = true;
                $scope.fadeInHill = true;
            },10000)

            $timeout(function(){
                $scope.fadeInHill = false;
                $scope.fadeOutHill = true;
            },14000)

            $timeout(function(){
                $scope.hillChart = false;
                $scope.fadeOutWeb = false;
                $scope.webChart = true;
                $scope.fadeInWeb = true;
            },15000)

        }

        $interval(function(){
            $scope.fadeOutWebChart()
        },16000)    



        $timeout(function () {
            //   $scope.fadeInBar = false;
            //   $scope.fadeOutBar = true;
        }, 5000)
        $timeout(function () {
            //  $scope.barChart = false;
        }, 5500)
        // $scope.hillChartTiming = function(){
        // $timeout(function () {
        //$scope.fadeInHill = true;
        //$scope.hillChart = true;
        //},6000)
        //$timeout(function () {
        //  $scope.fadeInHill = false;
        // $scope.fadeOutHill = true;
        // },2000)
        // $timeout(function(){
        //    $scope.hillChart = false;
        //},2500)

        //$scope.hillChartTiming()

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            responsive: true,
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
            userName: "",
            name: "",
            email: "",
            password: ""
        }
        $scope.openDetailedTable = function () {
            if (!$scope.detailedTableOpen) {
                $scope.detailedTableOpen = true;
            } else {
                $scope.detailedTableOpen = false;
            }
        }
        $scope.lock = new Audio('../audio/ui_lock.wav');
        $scope.tap = new Audio('../audio/ui_tap-variant-01.wav');
        $scope.down = new Audio('../audio/down.wav');
        $scope.up = new Audio('../audio/up.wav');
        $scope.generate = new Audio('../audio/generate.wav');
        $scope.playLock = function () {
            console.log("clicked")
            $scope.lock.play();
        }
        $scope.playTap = function () {
            console.log("clicked")
            $scope.tap.play();
            $scope.clickdog = true;
            $timeout(function () {
                $scope.clickdetail = true;
            }, 500)
            $timeout(function () {
                $scope.clickcert = true;
            }, 1000)
            $timeout(function () {
                $scope.clickpay = true;
            }, 1500)
            $timeout(function () {
                $scope.clickdog = false;
            }, 3000)
            $timeout(function () {
                $scope.clickdetail = false;
            }, 3200)
            $timeout(function () {
                $scope.clickcert = false;
            }, 3400)
            $timeout(function () {
                $scope.clickpay = false;
            }, 3600)
        }
        $scope.intakeInfo = {}
        $scope.q1 = null
        $scope.q2 = null
        $scope.results = []
        $scope.loading = false;
        $scope.showResults = false;
        $scope.noDifference = false;
        $scope.pulseSelect = false;
        $scope.rollRight = false;
        $scope.rocketLaunched = false;
        $scope.launchRocket = function () {
            console.log("clicked")
            if (!$scope.rocketLaunched) {
                $scope.rocketLaunched = true
            } else {
                $scope.rocketLaunched = false

            }
        }
        //RESUME CODE //
        $scope.shineBright = false;
        $scope.qlh = false;
        $scope.rose = false;
        $scope.openExperience3 = function () {
            if ($scope.rose) {
                $scope.rose = false;
            } else {
                $scope.shineBright = true;
                $scope.qlh = false;
                $scope.rose = true;
            }
        }
        $scope.openExperience2 = function () {
            if ($scope.qlh) {
                //$scope.shineBright = false;
                $scope.qlh = false;
            } else {
                $scope.shineBright = true;
                $scope.rose = false;
                $scope.qlh = true;
            }
        }
        $scope.openExperience = function () {
            console.log("Clicked")
            if ($scope.shineBright) {
                $scope.shineBright = false;
            } else {
                $scope.shineBright = true;
                $scope.qlh = false;
                $scope.rose = false;
            }



        }
        $scope.bigPink = false;
        $scope.color = false;
        $scope.colortwo = false;
        $scope.colorthree = false;
        $scope.button = 0;
        $scope.darkThemeOneTwo = function (number) {
            var button = number;
            if ($scope.colorThemeThree) {
                $scope.colorThemeThree = false;
                $scope.colorTheme = false;
                $scope.colorThemeTwo = false;
                $scope.up.play();

            } else if ($scope.colorTheme) {
                $scope.colorThemeThree = true;
                $scope.colorTheme = false;
                $scope.colorThemeTwo = false;
                $scope.down.play();
            } else if ($scope.colorThemeTwo) {
                $scope.colorThemeThree = true;
                $scope.colorTheme = false;
                $scope.colorThemeTwo = false;
                $scope.down.play();
            }
            else if (!$scope.colorThemeTwo && !$scope.colorThemeThree && !$scope.colorTheme) {
                $scope.colorThemeThree = true;
                $scope.colorTheme = false;
                $scope.colorThemeTwo = false;
                $scope.down.play();
            }
        }
        $scope.darkOneTwo = function (number) {
            var button = number;
            if ($scope.colorthree) {
                $scope.colorthree = false;
                $scope.color = false;
                $scope.colortwo = false;
                $scope.up.play();

            } else if ($scope.color) {
                $scope.colorthree = true;
                $scope.color = false;
                $scope.colortwo = false;
                $scope.down.play();
            } else if ($scope.colortwo) {
                $scope.colorthree = true;
                $scope.color = false;
                $scope.colortwo = false;
                $scope.down.play();
            }
            else if (!$scope.colortwo && !$scope.colorthree && !$scope.color) {
                $scope.colorthree = true;
                $scope.color = false;
                $scope.colortwo = false;
                $scope.down.play();
            }
        }
        $scope.thirdBig = false;
        $scope.thirdNormal = true;
        $scope.makeBig = function () {
            if (!$scope.thirdBig) {
                $scope.thirdBig = true;
                $scope.thirdNormal = false;
                $scope.tap.play();
            } else if ($scope.thirdBig) {
                $scope.thirdBig = false;
                $scope.thirdNormal = true;
                $scope.tap.play();
            }

        }
        $scope.firstImage = true;
        $scope.secondImage = false;
        $scope.thirdImage = false;
        $scope.fourthImage = false;

        $scope.changeSlider = function () {
            console.log("clicked")
            if ($scope.firstImage) {
                $scope.firstImage = false;
                $scope.secondImage = true;

            } else
                if ($scope.secondImage) {
                    $scope.secondImage = false;
                    $scope.thirdImage = true;

                } else
                    if ($scope.thirdImage) {
                        $scope.thirdImage = false;
                        $scope.fourthImage = true;

                    } else
                        if ($scope.fourthImage) {
                            $scope.fourthImage = false;
                            $scope.firstImage = true;

                        }
        }
        $scope.darkStorageOneTwo = function () {

            if ($scope.colorStorageThree) {
                $scope.up.play();
                navigator.vibrate([100])
                $scope.colorStorage = false;
                $scope.colorStorageTwo = false;
                $scope.colorStorageThree = false;

            } else if ($scope.colorStorageTwo) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = true;
                $scope.colorStorage = false;
                $scope.colorStorageTwo = false;

            } else if ($scope.colorStorage) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = true;
                $scope.colorStorage = false;
                $scope.colorStorageTwo = false;
            } else if (!$scope.colorStorageTwo && !$scope.colorStorageThree && !$scope.colorStorage) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = true;
                $scope.colorStorage = false;
                $scope.colorStorageTwo = false;
            }


        }
        $scope.darkStorageOneThree = function () {

            if ($scope.colorStorageTwo) {
                $scope.up.play();
                navigator.vibrate([100])
                $scope.colorStorage = false;
                $scope.colorStorageTwo = false;
                $scope.colorStorageThree = false;

            } else if ($scope.colorStorage) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = false;
                $scope.colorStorage = false;
                $scope.colorStorageTwo = true;

            } else if ($scope.colorStorageThree) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = false;
                $scope.colorStorage = false;
                $scope.colorStorageTwo = true;
            } else if (!$scope.colorStorageTwo && !$scope.colorStorageThree && !$scope.colorStorage) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = false;
                $scope.colorStorage = false;
                $scope.colorStorageTwo = true;
            }


        }
        $scope.playGenerate = function () {
            $scope.generate.play();
        }
        $scope.colorThemeOne = false;
        $scope.colorThemeTwo = false;
        $scope.colorThemeThree = false;
        $scope.darkThemeOneThree = function () {
            if ($scope.colorThemeTwo) {
                $scope.colorThemeTwo = false;
                $scope.colorTheme = false;
                $scope.colorThemeThree = false;
                $scope.up.play();
            } else if ($scope.colorTheme) {
                $scope.colorThemeThree = false;
                $scope.colorTheme = false;
                $scope.colorThemeTwo = true;
                $scope.down.play();
            } else if ($scope.colorThemeThree) {
                $scope.colorThemeThree = false;
                $scope.colorTheme = false;
                $scope.colorThemeTwo = true;
                $scope.down.play();
            } else if (!$scope.colorThemeTwo && !$scope.colorThemeThree && !$scope.colorTheme) {
                $scope.colorThemeThree = false;
                $scope.colorTheme = false;
                $scope.colorThemeTwo = true;
                $scope.down.play();
            }
        }
        $scope.darkOneThree = function () {
            if ($scope.colortwo) {
                $scope.colortwo = false;
                $scope.color = false;
                $scope.colorthree = false;
                $scope.up.play();
            } else if ($scope.color) {
                $scope.colorthree = false;
                $scope.color = false;
                $scope.colortwo = true;
                $scope.down.play();
            } else if ($scope.colorthree) {
                $scope.colorthree = false;
                $scope.color = false;
                $scope.colortwo = true;
                $scope.down.play();
            } else if (!$scope.colortwo && !$scope.colorthree && !$scope.color) {
                $scope.colorthree = false;
                $scope.color = false;
                $scope.colortwo = true;
                $scope.down.play();
            }
        }
        $scope.startThemePulse = function () {
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
            if ($scope.colorTheme) {
                $scope.up.play();
                navigator.vibrate([100])
                $scope.colorTheme = false;
                $scope.colorThemeTwo = false;
                $scope.colorThemeThree = false;

            } else if ($scope.colorThemeTwo) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorThemeThree = false;
                $scope.colorTheme = true;
                $scope.colorThemeTwo = false;

            } else if ($scope.colorThemeThree) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorThemeThree = false;
                $scope.colorTheme = true;
                $scope.colorThemeTwo = false;
            } else if (!$scope.colorThemeTwo && !$scope.colorThemeThree && !$scope.colorTheme) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorThemeThree = false;
                $scope.colorTheme = true;
                $scope.colorThemeTwo = false;
            }


        }
        $scope.startPulse = function () {
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
            if ($scope.color) {
                $scope.up.play();
                navigator.vibrate([100])
                $scope.color = false;
                $scope.colortwo = false;
                $scope.colorthree = false;

            } else if ($scope.colortwo) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorthree = false;
                $scope.color = true;
                $scope.colortwo = false;

            } else if ($scope.colorthree) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorthree = false;
                $scope.color = true;
                $scope.colortwo = false;
            } else if (!$scope.colortwo && !$scope.colorthree && !$scope.color) {
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
        $scope.startStoragePulse = function () {

            if ($scope.colorStorage) {
                $scope.up.play();
                navigator.vibrate([100])
                $scope.colorStorage = false;
                $scope.colorStorageTwo = false;
                $scope.colorStorageThree = false;

            } else if ($scope.colorStorageTwo) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = false;
                $scope.colorStorage = true;
                $scope.colorStorageTwo = false;

            } else if ($scope.colorStorageThree) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = false;
                $scope.colorStorage = true;
                $scope.colorStorageTwo = false;
            } else if (!$scope.colorStorageTwo && !$scope.colorStorageThree && !$scope.colorStorage) {
                $scope.down.play();
                navigator.vibrate([100])
                $scope.colorStorageThree = false;
                $scope.colorStorage = true;
                $scope.colorStorageTwo = false;
            }


        }


        $scope.noInput = false;
        $scope.runTest = function () {
            $scope.noInput = false;
            $scope.noDifference = false;
            $scope.loading = true;
            console.log($scope.intakeInfo)
            console.log($scope.intakeInfo.question2)



            if ($scope.intakeInfo.question1 !== undefined && $scope.intakeInfo.question2 !== undefined) {


                $scope.q1 = JSON.parse($scope.intakeInfo.question1)
                $scope.q2 = JSON.parse($scope.intakeInfo.question2)
                for (var i = 0; i < $scope.q1.length; i++) {


                    if (($scope.q2[i]["Type"] !== $scope.q1[i]["Type"]) && ($scope.q2[i]["Tag Number"] == $scope.q1[i]["Tag Number"])) {
                        console.log("Change of Tag Preference")
                        var temp = {}
                        temp["Number"] = $scope.q2[i]["Tag Number"]
                        temp["oldtag"] = $scope.q1[i]["Type"]
                        temp["newtag"] = $scope.q2[i]["Type"]
                        $scope.results.push(temp)
                        console.log($scope.results, "$scope.results")
                        if (i == $scope.q1.length - 1) {
                            $scope.loading = false;
                            $scope.showResults = true;
                            // $scope.results=[]
                            // $scope.temp = {}
                            console.log("HEE")

                        }

                    } else {

                        if (i == $scope.q1.length - 1 && $scope.results.length == 0) {
                            $scope.loading = false;
                            $scope.noDifference = true
                            //$scope.results = []
                            //$scope.temp ={}
                            console.log("HEE2")
                        }
                        if (i == $scope.q1.length - 1 && $scope.results.length > 0) {
                            $scope.loading = false;
                            $scope.showResults = true;
                            //$scope.results =[]
                            //$scope.temp = {}
                            console.log("HEE2")
                        }

                    }
                }
            } else {
                $scope.loading = false;
                $scope.noInput = true

            }
        }
        $scope.backToCheck = function () {

            $scope.showResults = false;
            $scope.results = []
            $scope.temp = {}


        }
        $scope.serverSwitch = function () {
            $interval(function () {

                if ($scope.largeStorage) {
                    $scope.smStorage = true;
                    $scope.largeStorage = false;

                } else if ($scope.medStorage) {
                    $scope.largeStorage = true;
                    $scope.medStorage = false;
                } else if ($scope.smStorage) {
                    $scope.medStorage = true;
                    $scope.smStorage = false;
                }
                if ($scope.threexServer) {
                    $scope.onexServer = false;
                    $scope.threexServer = false;
                    $scope.twoxServer = true;

                }
                else if ($scope.twoxServer) {
                    $scope.threexServer = false;
                    $scope.twoxServer = false;
                    $scope.onexServer = true;
                    console.log(2)
                }
                else if ($scope.onexServer) {
                    $scope.twoxServer = false;
                    $scope.onexServer = false;
                    $scope.threexServer = true;

                }
            }, 2000)
        }
        $scope.serverSwitch()
        /*User.getProfileImage("5caa4a61b3358b21e831cd2c").then(function(data){
            console.log(data)
        })
        User.uploadProfileImage().then(function(data){
            
        })
        */
        $scope.testIp = function () {
            console.log('click')
            User.testIp().then(function (data) {

            })
        }
        $scope.checkProgress = function () {
            $scope.progress = 0;
            $interval(function () {
                if ($scope.progress < 86) {
                    $scope.progress = $scope.progress + 1;
                    console.log("og")
                } else {
                    $timeout(function () {

                    }, 3000)
                }
            }, 50)
        }

        $scope.submitUser = function () {

            if (($scope.userObject.email !== null || "") &&
                ($scope.userObject.password !== null || "")) {
                $scope.loading = true;
                $timeout(function () {
                    $scope.finishedLoadingSuccess = true;

                }, 3000)
                $timeout(function () {
                    $scope.loading = false;
                    $scope.finishedLoadingSuccess = false;

                    $scope.fadeOutHomePage = true;
                }, 5000)




                console.log($scope.userObject)
                // User.create($scope.userObject).then(function(data){
                //     console.log(data)
                // })

            } else {

            }
        }
        ///$scope.submitUser()
        $scope.nightModeToggle = function () {
            console.log("nightModeToggled")
            if (!$scope.nightMode) {
                $scope.nightMode = true;
            } else {
                $scope.nightMode = false;
            }
        }
        $scope.openHome = function () {
            // console.log("Home opened")
            //$scope.contactSlideInLeft = false;
            $scope.homePressed = true;
            setTimeout(function () {
                $scope.homePressed = false;
                console.log("homePressed = falseo")
            }, 1000)

        }
        $scope.openContact = function () {
            console.log("Home opened")
            //$scope.contactSlideInLeft = false;
            //$scope.removeLargeMenu = true;
            //$scope.contactPressed = true;
            $scope.menuPressedContact = true
            //$scope.fadeInSmallMenu = true;
            //$scope.fadeOutHome = true;
            $scope.fadeOutHomePage = true;

            $timeout(function () {
                //$scope.removeLargeMenu = true;
                //$scope.fadeInSmallMenu = true;

                $scope.fadeOutHome = true;
                console.log("homePressed = false", $scope.fadeOutHome)
            }, 1000)
            $timeout(function () {
                $scope.homePageOpen = false;

                $scope.fadeInContact = true;
            }, 2000)
            $timeout(function () {
                //$scope.homePageOpen = false;
                $scope.menuPressedContact = false
                //$scope.fadeOutHome = false;
                // $scope.fadeInContact = true;
            }, 2500)

            $timeout(function () {
                //$scope.homePageOpen = false;
                //$scope.menuPressedContact=false
                $scope.fadeOutHome = false;
                // $scope.fadeInContact = true;
            }, 3500)
        }




        // CODE PRACTICE //

        var kevinBacon = {
            "movies": [{
                "title": "Diner",
                "cast": [
                    "Steve Guttenberg",
                    "Daniel Stern",
                    "Mickey Rourke",
                    "Kevin Bacon",
                    "Tim Daly",
                    "Ellen Barkin",
                    "Paul Reiser",
                    "Kathryn Dowling",
                    "Michael Tucker",
                    "Jessica James",
                    "Colette Blonigan",
                    "Kelle Kipp",
                    "Clement Fowler",
                    "Claudia Cron"
                ]
            },
            {
                "title": "Footloose",
                "cast": [
                    "Kevin Bacon",
                    "Lori Singer",
                    "Dianne Wiest",
                    "John Lithgow",
                    "Sarah Jessica Parker",
                    "Chris Penn",
                    "Frances Lee McCain",
                    "Jim Youngs",
                    "John Laughlin",
                    "Lynne Marta",
                    "Douglas Dirkson"
                ]
            },
            {
                "title": "Flatliners",
                "cast": [
                    "Kiefer Sutherland",
                    "Julia Roberts",
                    "Kevin Bacon",
                    "William Baldwin",
                    "Oliver Platt",
                    "Kimberly Scott",
                    "Joshua Rudoy",
                    "Benjamin Mouton",
                    "Hope Davis",
                    "Patricia Belcher",
                    "Beth Grant"
                ]
            },
            {
                "title": "Eat Pray Love",
                "cast": [
                    "Julia Roberts",
                    "Javier Bardem",
                    "Billy Crudup",
                    "Richard Jenkins",
                    "Viola Davis",
                    "James Franco",
                    "Sophie Thompson",
                    "Mike O 'Malley",
                    "Christine Hakim",
                    "Arlene Tur",
                    "Hadi Subiyanto",
                    "Gita Reddy",
                    "Tuva Novotny",
                    "Luca Argentero",
                    "Rushita Singh"
                ]
            },
            {
                "title": "Spotlight",
                "cast": [
                    "Mark Ruffalo",
                    "Michael Keaton",
                    "Rachel McAdams",
                    "Liev Schreiber",
                    "John Slattery",
                    "Brian d'Arcy James",
                    "Stanley Tucci",
                    "Gene Amoroso",
                    "Jamey Sheridan",
                    "Billy Crudup",
                    "Maureen Keiller",
                    "Richard Jenkins",
                    "Paul Guilfoyle",
                    "Len Cariou",
                    "Neal Huff",
                    "Michael Cyril Creighton",
                    "Laurie Heineman",
                    "Tim Progosh"
                ]
            }
            ]
        }

        // CONSTRUCTOR FUNCTION //
        var data;
        function loadData() {
            data = loadJSON('')
        }

        // CONSTRUCTOR FUNCTION //
        function Graph() {
            this.nodes = []
            this.graph = {};
            this.start = null;
            this.end = null;
        }
        Graph.prototype.addNode = function (node) {
            //NODE INTO ARRAY //
            this.nodes.push(node);
            var title = node.value
            //NODE INTO HASH ///
            this.graph[title] = node


        }
        Graph.prototype.getNode = function (actor) {

            var n = this.graph[actor]
            return n;
        }
        Graph.prototype.setStart = function (actor) {
            this.start = this.graph[actor]
            return this.start

        }
        Graph.prototype.setEnd = function (actor) {

            this.end = this.graph[actor]
            return this.end
        }
        // GRAPH CONSTRUCTOR FUNCTION //
        // NODE CLASS //

        // NODE CONSTRUCTOR FUNCTION  //
        function Node(value) {

            this.value = value;
            this.edges = [];
            this.searched = false;
            this.parent = null;


        }
        // NODE CONSTRUCTOR FUNCTION //

        Node.prototype.addEdge = function (neighbor) {
            this.edges.push(neighbor)
            neighbor.edges.push(this)
        }

        // NODE CLASS //



        function setup() {

            // CREATE A NEW GRAPH //
            var graph = new Graph()
            // CREATE A NEW GRAPH //

            var movies = kevinBacon.movies
            for (var i = 0; i < movies.length; i++) {
                var movie = movies[i].title
                var cast = movies[i].cast
                // CREATE NEW NODE (MOVIE)//
                var movieNode = new Node(movie)
                // ADD NODE TO THE GRAPH //
                graph.addNode(movieNode);
                // ADD NODE TO THE GRAPH //

                for (var j = 0; j < cast.length; j++) {
                    // CREATE NEW NODE (ACTOR)//
                    var actor = cast[j]
                    var actorNode = graph.getNode(actor)

                    if (actorNode === undefined) {
                        actorNode = new Node(actor)
                    }
                    var actorNode = new Node(actor)
                    graph.addNode(actorNode)
                    movieNode.addEdge(actorNode)

                    // CREATE NEW NODE (ACTOR)//

                    //console.log(actor)
                }

            }

            console.log(graph)
            // BEGIN BREADTH FIRST SEARCH //

            // MAKE A QUEUE TO REPRESENT WHICH NODES HAVE BEEN VISITED //
            // THEN CHECK THE CONNECTIONS OF THE FIRST IN LINE//
            var queue = []
            var start = graph.setStart("Rachel McAdams")
            var end = graph.setEnd("Kevin Bacon")
            start.searched = true;
            queue.push(start)

            while (queue.length > 0) {

                var current = queue.shift();
                console.log(current, end)
                if (current.value === end.value) {
                    console.log("Found" + current.value)
                    break;
                }
                var edges = current.edges
                for (var o = 0; o < edges.length; o++) {
                    var neighbor = edges[o]
                    if (!neighbor.searched) {
                        neighbor.searched = true;
                        neighbor.parent = current
                        queue.push(neighbor)
                    }


                }
            }
            var path = []
            path.push(end)
            var next = end.parent
            while (next !== null) {
                path.push(next)
                next = path.parent
            }
        }
        setup()





        function Graph() {
            this.nodes = []
            this.graph = {}
        }
    }]);


}());


