<?php
    include_once(__DIR__.'/../../../../../common/database/DBConnection.php');


    $eventId = $_POST['eventId'];
    $componentId = $_POST['componentId'];
    $lang = $_POST['lang'];
    $ip = $_SERVER["REMOTE_ADDR"];
    session_start();
    $sessionId = session_id();

    $connection = new DBConnection();
    $sql = "INSERT INTO event_like_click_log (elcl_id, event_id, component_id, lang, ip, session_id, create_date) ";
    $sql .= " VALUES (0, '$eventId', '$componentId', '$lang', '$ip', '$sessionId', NOW())";


    $connection->query($sql);
    $result = $connection->amount;
?>
