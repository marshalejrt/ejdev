<?php
// Guardar los datos recibidos en variables:
$nombre = $_POST['sendername'];
$telefono = $_POST['senderphone'];
$email = $_POST['senderemail'];
$asunto = 'Nueva Solicitud de Contacto';
$mensaje = $_POST['sendermessage'];
// Definir la dirección de destino:
$dest = "sistemasefrain@gmail.com"; 
 
// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
$headers = "From: $nombre $email\r\n";
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Aqui definimos el asunto y armamos el cuerpo del mensaje
$cuerpo = "Nombre: ".$nombre."<br>";
$cuerpo = "Telefono: ".$telefono."<br>";
$cuerpo .= "Email: ".$email."<br>";
$cuerpo .= "Asunto: ".$asunto."<br>";
$cuerpo .= "Mensaje: ".$mensaje;

// Esta es una pequena validación, que solo envie el correo si todas las variables tiene algo de contenido:
if($nombre != '' && $email != '' && $asunto != '' && $mensaje != ''){
    mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!
}
?>