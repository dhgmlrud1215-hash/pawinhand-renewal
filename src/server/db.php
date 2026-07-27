<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

$host = "localhost";
$host = "localhost";
$dbName = "dhgmlrud00";
$dbUser = "dhgmlrud00";
$dbPassword = "gksmfqhfl0912@";

try {
    $db = new PDO(
        "mysql:host={$host};dbname={$dbName};charset=utf8mb4",
        $dbUser,
        $dbPassword
    );

    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $error) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "데이터베이스 연결에 실패했습니다."
    ], JSON_UNESCAPED_UNICODE);

    exit;
}