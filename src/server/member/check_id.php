<?php

require_once "../db.php";

$data = json_decode(file_get_contents("php://input"), true) ?: [];
$userId = trim($data["userId"] ?? $_GET["userId"] ?? "");

if (!$userId) {
    echo json_encode([
        "success" => false,
        "available" => false,
        "message" => "아이디를 입력해주세요."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $db->prepare(
    "SELECT COUNT(*) FROM members WHERE user_id = :user_id"
);
$stmt->execute(["user_id" => $userId]);
$available = (int) $stmt->fetchColumn() === 0;

echo json_encode([
    "success" => true,
    "available" => $available,
    "message" => $available
        ? "사용 가능한 아이디입니다."
        : "이미 사용 중인 아이디입니다."
], JSON_UNESCAPED_UNICODE);
