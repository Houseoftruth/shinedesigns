angular.module('userServices', []).config(function () {



    console.log("UserService")



}).factory('User', function($http){


    userFactory = {}
    userFactory.testIp = function(){
        return $http.get("/api/users/getip")
    }
    userFactory.create = function (userObject) {

        return $http.post("qualitylabourhire.herokuapp.com/api/users/create", userObject)

    }
    userFactory.addQuery = function(queryObject){
        return $http.post("qualitylabourhire.herokuapp.com/api/locations/addquery", queryObject)
    }
    userFactory.getProfileImage = function(id){
        return $http.get('/api/users/getprofileimage/'+id)
    }
    userFactory.uploadProfileImage = function(){
        return $http.post('/api/users/uploadprofileimage')
    }
    return userFactory

})