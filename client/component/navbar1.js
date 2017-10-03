angular.module('myapp',[])
.controller('myctrl',function($scope){

$scope.Login=function(){
var Luser=$('#Luser').val();
var Lpass=$('#Lpass').val();
    $.ajax({
      async:false,
      type:'post',
      url:'/login',
      data:JSON.stringify({
        username:Luser,
        password:Lpass
      })
    })
  },

$scope.SignUp=function(){
var Suser=$('#Suser').val();
var Spass=$('#Spass').val();
      $.ajax({
      async:false,
      type:'POST',
      url:'/signup',
      data:JSON.stringify({
        username:Luser,
        password:Lpass
      })

    })
  },
  $scope.data=[
  {
  image:'component/imgs/1.jpeg',
  disc:'cpu:core i3, ram:4 gb ',
  type: 'Toshipa',
  price:'250 JD',
  name:'Toshipa power',
  user_name:'hanan majli'
  },
  {
  image:'component/imgs/2.jpg',
  disc:'cpu:core i4, ram:5 gb ',
  type: 'Dell',
  price:'300 JD',
  name:'Dell inspairon 5050',
  user_name:'atallah salah'

  },
  {
 image:'component/imgs/3.jpg',
  disc:'cpu:core i5, ram:2 gb ',
  type: 'Toshipa',
  price:'500 JD',
  name:'Toshipa ',
  user_name:'jwan azad'
  },
  {
 image:'component/imgs/4.jpg',
  disc:'cpu:core i4, ram:2 gb ',
  type: 'Toshipa',
  price:'400 JD',
  name:'Toshipa power',
  user_name:'areej'
  }
,
 {
 image:'component/imgs/4.jpg',
  disc:'cpu:core i4, ram:2 gb ',
  type: 'Toshipa',
  price:'400 JD',
  name:'Toshipa power',
  user_name:'areej'
  },
   {
 image:'component/imgs/4.jpg',
  disc:'cpu:core i4, ram:2 gb ',
  type: 'Toshipa',
  price:'400 JD',
  name:'Toshipa power',
  user_name:'areej'
  },
   {
 image:'component/imgs/4.jpg',
  disc:'cpu:core i4, ram:2 gb ',
  type: 'Toshipa',
  price:'400 JD',
  name:'Toshipa power',
  user_name:'areej'
  }
  ]
})
.component('navbar',{

  templateUrl:'component/templates/navbar1.html'
})
