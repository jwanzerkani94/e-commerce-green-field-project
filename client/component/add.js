angular.module('myapp')
.controller('myadd', function($scope){

$scope.AddItem=function(){
var Aname=$('#Aname').val();
var Aprice=$('#Aprice').val();
var Adisc=$('#Adisc').val();
var Aimage=$('#Aimage').val();
    $.ajax({
      async:false,
      type:'post',
      url:'/add',
      data:JSON.stringify({
        name:Aname,
        price:Aprice,
        discribtion:Adisc,
        image:Aimage
      })

    })
    console.log('hi')
  }







})
.component('add',{
	controller:'myadd',
    templateUrl:'component/templates/add.html'

})
