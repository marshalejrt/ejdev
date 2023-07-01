<?php
$count = $_POST["contador"];
if (isset($count)){
    $file = 'contador.txt';
    file_put_contents($file, $count);
    echo $count . " visistas registradas";
}else{
    echo "no se encontro el valor";
}
die();
?>