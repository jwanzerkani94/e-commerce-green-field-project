angular.module('myapp')
.controller('myctrl',function($scope){
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

  template:`
  <nav class="navbar navbar-inverse navbar-fixed-top ">
  <div>
    <ul class="nav navbar-nav">
      <li><a href="#" >E-Commerce Website</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">


               <li> <form class="navbar-form navbar-right" >
                    <div class="form-group">
                        <input type="text" class="form-control" name="username" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-default">Sign In</button>
                </form></li>



      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li>.</li><li>.</li><li>.</li><li>.</li><li>.</li>
    </ul>
  </div>

</nav>

<div>
  <div id="myCarousel" class="carousel slide w3-animate-top" data-ride="carousel" data-interval="1800">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
      <li data-target="#myCarousel" data-slide-to="5"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="component/imgs/1.jpeg" style="width:100%;height:600px;">
      </div>

      <div class="item">
        <img src="component/imgs/2.jpg" style="width:100%;height:600px;">
      </div>
    
      <div class="item">
        <img src="component/imgs/3.jpg"  style="width:100%;height:600px;">
      </div>
       <div class="item">
        <img src="component/imgs/4.jpg"  style="width:100%;height:600px;">
      </div>
       <div class="item">
        <img src="component/imgs/5.jpg"  style="width:100%;height:600px;">
      </div>
       <div class="item">
        <img src="component/imgs/6.jpg"  style="width:100%;height:600px;">
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

  <center>
<nav class="navbar navbar-inverse form-group w3-animate-opacity"><br>
<input class="form-control" id="search" type="text" ng-model="search"  placeholder="Search..">
<br></nav>
</center>


  <style> 
  #search[type=text] {
    width: 230px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;

    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }

  #search[type=text]:focus {
    width: 50%;
  }
  </style>

<br>


<center>

<div ng-controller="myctrl" id="portfolio" class="container-fluid text-center ">
<div class="row slide">
<div id="item" ng-repeat="item in data | filter : search" class="col-sm-2 container w3-animate-zoom" >

   <br>
  <img class="image" style="border-radius: 20px 20px;"  ng-src={{item.image}} /> <br>
  Name:{{item.name}} <br>
  price: {{item.price}}<br>
  
  
<div class="overlay">
    <div class="text">{{item.disc}}<br>By : {{item.user_name}}<br><br><button type="button" class="btn btn-primary btn-md">Buy it</button>
  <button type="button" class="btn btn-primary btn-md">add to list</button><br><br></div>
  </div>
</div>
</div>
</div></center>

 
`

})
  
  