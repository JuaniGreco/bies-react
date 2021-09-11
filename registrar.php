<?php
	include "conectar.php";
    $conn = conectarDB();

	$nombre= "Prueba 2";
	$dni= "99999999";
	$password="prueba";
	$email= "probando";
	$password = password_hash($password, PASSWORD_DEFAULT);
	//LA LINEA DE ARRIBA ENCRIPTA LA PASSWORD


	echo $password;
	echo "<br/>";
	

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (nombre, dni, password, email)
VALUES ('$nombre', '$dni', '$password', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>