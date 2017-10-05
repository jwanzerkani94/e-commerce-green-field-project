angular.module('myapp',[])
.controller('myctrl',['$scope',function($scope){
  $scope.userdata={'a':'hello'};
  $scope.b = {prop: 0};
  $scope.a = $scope.b;
  // $scope.userdata=$scope.userdata1
$scope.isloggedin=true;
$scope.addtocard=function (index) {
  // if($scope.userdata===undefined){
  //   $scope.userdata=[]
  // }

  //  go(x)
  // $scope.$apply()
  console.log("this is index",$scope.data[index])
  console.log("this is data",$scope.userdata)
}
var go=function (userdata) {
  console.log('go fun is work')
       setTimeout(function () {
        $scope.$apply(function () {
            $scope.a.prop = 10;
            $scope.b.prop = 3;
        });
    });
}
$scope.logout=function(){
  console.log($scope.b.prop,$scope.a.prop)
    $.ajax({
      async:false,
      type:'post',
      url:'/logout',
      data:JSON.stringify({
        logout:'logout'
      })

    })
    $.ajax({
      async:false,
      type:'get',
      url:'/result',
      success:function (result) {
        if(result=='false'){
          $scope.isloggedin=false;
        }else{
          $scope.isloggedin=true;

        }
      }
    })

  };

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
    $.ajax({
      async:false,
      type:'get',
      url:'/result',
      success:function (result) {
        if(result=='false'){
          $scope.isloggedin=false;
        }else{
          $scope.isloggedin=true;
          alert('Wrong username or password!!!')
        }
      }
    })

  };

$.ajax({
  async:false,
  type:'get',
  url:'/data',
  success:function (data) {
    $scope.data=data;
    console.log(data)
  }
});

$scope.SignUp=function(){
var Suser=$('#Suser').val();
var Spass=$('#Spass').val();
      $.ajax({
      async:false,
      type:'POST',
      url:'/signup',
      data:JSON.stringify({
        username:Suser,
        password:Spass
      })

    })
      console.log('hi5')
  };

}])
.component('navbar',{
  controller:'myctrl',
  templateUrl:'component/templates/navbar1.html'
})
