<?php
	include "conectar.php";
    $conn = conectarDB();

	$password= "prueba";

	$nombre= "Prueba 2";
	$dni= "10";
	$email= "probando";
	$clave = password_hash($password, PASSWORD_DEFAULT);
	//LA LINEA DE ARRIBA ENCRIPTA LA PASSWORD


	echo $clave;
	echo "<br/>";
	

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (nombre, dni, clave, email)
VALUES ('$nombre', '$dni', '$clave', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "Cree un registro";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>