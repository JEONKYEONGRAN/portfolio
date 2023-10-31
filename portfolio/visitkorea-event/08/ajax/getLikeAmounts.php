<?php
    include_once(__DIR__.'/../../../../../common/database/DBConnection.php');


    $eventId = $_POST['eventId'];
    $lang = $_POST['lang'];

    $connection = new DBConnection();
    $sql = "SELECT LCL.*, COUNT(*) AS like_cnt FROM event_like_click_log LCL WHERE 1=1 AND LCL.event_id = '$eventId' AND LCL.lang = '$lang' GROUP BY LCL.component_id";


    $resultList = $connection->selectList($sql);
    echo json_encode($resultList);
?>
