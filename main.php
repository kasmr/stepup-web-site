<?php include_once("index.html");
$to .= 'kasmrxaxaxa@yandex.ru';

// тема письма
$subject = 'Письмо с моего сайта, хочу записаться на собеседование!';

// текст письма
$message = 'Ученик' . $_POST['name'] . $_POST['age'] ' отправил вам письмо:<br />' . $_POST['message'] . '<br />
Связяться с ним можно по email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>' . 'по номеру телефона ' .$_POST['phone'] 
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Алик <kasmrxaxaxa@yandex.ru>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>