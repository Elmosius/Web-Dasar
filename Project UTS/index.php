<!-- Team Wangy
Elmosius Suli - 2272008
Joseph Adiwiguna - 2272020 -->
<?php
  if(isset($_POST['sub'])){
    $pass=$_POST['pass'];
  
    if($pass=='teamwangy'){
      header("location:introduction.php");
    }
    else{
      echo ("Password Incorrect");
    }
    }
  else{ 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome To Team Wangy!</title>
    <link rel="stylesheet" type="text/css"href="CSS/style1.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;400&display=swap" rel="stylesheet">

</head>
<body class="index">
  <div class="containerindex">
    <img class="logo"src="images/twgray.png">
  </div>
  <div class="containerindex2">
        <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
            <label class="welcome">Welcome to TeamWangy!</label><br>
            <label class="pass">Password</label>
            <input class="perloginan" type="password" placeholder="(teamwangy)" name="pass">
            <hr class="linepassword">
            <input class="password" type="submit" name="sub" value="Login">       
            
        </form>
  </div>
    <?php
  }
    ?>
</body>
</html>