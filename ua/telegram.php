<?php

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$text = $_POST['user_text'];
$token = "5543978583:AAHv3-5qwkgPO-H8bJ9EUcqczTvhA9PlHLA";
$chat_id = "-1001713536587";
$arr = array(
  'Name: ' => $name,
  'Email ' => $email,
  'Text: ' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo 'OK';
  // header('Location: index.html');
} else {
  // header('Location: index.html');
}
?>