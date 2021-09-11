<?php
	include "conectar.php";
    $conn = conectarDB();
	
	$password= "456";
	
	
	
	$nombre= "Prueba 2";
	$dni= "99999999";
	$password="";
	$email= "probando";
	$idRol= 1;	
	//$clave = password_hash($password, PASSWORD_DEFAULT);
	
	echo $password;
	echo "<br/>";
	echo $clave;
	echo "<hr/>";
	

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (nombre, dni, password, email, idRol)
VALUES ('$nombre', '$dni', '$password', '$email', '$idRol' )";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>