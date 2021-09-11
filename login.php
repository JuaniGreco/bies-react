<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
    include "conectar.php";
    $mysqli = conectarDB();
    //sleep(1);	
	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);    
    session_start();    
    $mysqli->set_charset('utf8');
	    
	$dni = $dataObject-> dni;
	$pas =	$dataObject-> password;
    
  if ($nueva_consulta = $mysqli->prepare("SELECT 
  u.idUsuario, u.nombre, u.dni, u.password, u.email, u.idRol, r.nombreRol
  FROM usuarios u
  INNER JOIN roles r ON u.idRol = r.idRol
  WHERE dni = ?")) {
        $nueva_consulta->bind_param('s', $dni);
        $nueva_consulta->execute();
        $resultado = $nueva_consulta->get_result();
        if ($resultado->num_rows == 1) {
            $datos = $resultado->fetch_assoc();
             $encriptado_db = $datos['password'];
            if (password_verify($pas, $encriptado_db))
            {
                $_SESSION['dni'] = $datos['dni'];
                echo json_encode(array('conectado'=>true,'idUsuario'=>$datos['idUsuario'], 'nombre'=>$datos['nombre'], 'dni'=>$datos['dni'], 'password'=>$datos['password'], 'email'=>$datos['email'],'nombreRol'=>$datos['nombreRol']  ) );
              }

               else {

                 echo json_encode(array('conectado'=>false, 'error' => 'La clave es incorrecta, vuelva a intentarlo.'));
                    }
        }
        else {
              echo json_encode(array('conectado'=>false, 'error' => 'El usuario no existe.'));
        }
        $nueva_consulta->close();
      }
      else{
        echo json_encode(array('conectado'=>false, 'error' => 'No se pudo conectar a BD'));
      }
 // }
$mysqli->close();
?>