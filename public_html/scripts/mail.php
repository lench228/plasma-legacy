<?php

use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\Exception;
header('Location: https://plasmadynamics.ru/');
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные формы
    $name = htmlspecialchars(trim($_POST["user_name"]));
    $phone = htmlspecialchars(trim($_POST["user_phone"]));
    $email = htmlspecialchars(trim($_POST["user_email"]));
    $message = htmlspecialchars(trim($_POST["user_message"]));


    // Создаем экземпляр PHPMailer
    $mail = new PHPMailer(true);
    $mail->CharSet = 'utf-8';

    // Настройка сервера
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.ru';    // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'plasmadynamics@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
    $mail->Password = '***ПАРОЛЬ***'; // Пароль для внешних приложений 
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
    
    $mail->setFrom('plasmadynamics@yandex.ru'); // от кого будет уходить письмо?
    $mail->addAddress('plasmadynamics@yandex.ru');     // Кому будет уходить письмо 
    $mail->isHTML(true);                                  // Set email format to HTML
    
    $mail->Subject = 'Новая заявка с сайта!';
    $mail->Body    = '<strong>Имя: </strong>'.$name. '<br><strong>Тел: </strong>' .$phone. '<br><strong>E-mail: </strong>' .$email. '<br><strong>Сообщение: </strong>' .$message;
    $mail->AltBody = '';
    $mail->send();
    
} else {
    die("Неверный запрос.");
}
