<!doctype html>
<html lang="ru">
  <head>
    
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


     <link rel="stylesheet" type="text/css" href="css/style.css" media="screen">
     
    <title>Кофемашина</title>
  
     <script src="js/js_coffee.js" async></script>
    <script src="js/js_game.js" async></script>
    
    
  </head>
  <body>

    
      <canvas id="game" width="608" height="608"></canvas>
      <div class="container my-3 border-0">
        <div class="row">
          <div class="col-sm-6 left-side">
            <div class="coffee-title row"> 
              <div class="coffee-btn"  alt="1" name="Americano" onclick="getCoffee('Americano', 30)"></div>
              <p>Americano - 30р.</p>
            </div>
            <div class="coffee-title row">
              <div class="coffee-btn" alt="2" onclick="getCoffee('Espresso', 38)"></div>
                <p>Espresso - 38р.</p>
            </div>
            <div class="coffee-title row">
              <div class="coffee-btn" alt="3" onclick="getCoffee('Latte', 42)"></div>
                <p>Latte - 42р.</p>
            </div>
            <div class="coffee-title row">
              <div class="coffee-btn" alt="4" onclick="getCoffee('Cappuccino', 55)"></div>
                <p>Cappuccino - 55р.</p>
            </div>
            <div class="coffee-title row">
              <div class="coffee-btn" alt="5" onclick="getCoffee('Coffee Glace', 93)"></div>
                <p>Coffee Glace - 93p.</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">
                <div id="display">
                  <p id="info"></p>
                  <p id="balance_info"></p>
                  <div class="progress">
                     <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>
                 <button class="btn btn-danger btn-xs btn-block" id="change" onclick="getChange(money.value)">Получить сдачу</button>
                 <div id="coffee_tray"> 
                   <img  src="/img/coffee.png" style="display: none;" onclick="this.style.display = 'none'" id="coffee">
                 </div>
              </div>
            <div class="col-sm-6">
                <input type="hidden" id="money">
                <img src="/img/bill_acc.png" alt="" id="bill_acc">
                <div id="change_tray"></div>
                  <button type="button" class="btn btn-primary btn-sm" name="show" id="show" onclick="show_image()"> Получить скидку </button>
                  <button type="button" class="btn btn-primary btn-sm" name="hold" id="hold" onclick="addition()"> Воспользоваться </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       <img src="/img/50rub.jpg" alt="50">
       <img src="/img/100rub.jpg" alt="100">
       <img src="/img/500rub.jpg" alt="500">
       
     
      
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>