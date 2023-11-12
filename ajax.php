<?php

header('Content-Type: application/json; charset=utf-8');



$json = file_get_contents('php://input');

$data = json_decode($json, true);

foreach($data as $input => $value) {
    $data[$input] = htmlspecialchars($data[$input], ENT_NOQUOTES);
}

if($data['name'] == 'oleg' || $data == null) {
    header('X-Error-Message: Incorrect username or password', true, 500);
    //432 код поставить на Олега
    die();
}

echo json_encode($data);






?>





<?/*валидация на php от php инъекций
принять json через file_get_contents и вернуть ответ пользователю
передать код ответа */?>