<?php

require_once "../db.php";

$memberId = $_SESSION["member_id"] ?? null;

if (!$memberId) {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "로그인이 필요합니다."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $db->prepare(
    "SELECT id, user_id, name, nickname, email, phone
     FROM members
     WHERE id = :id
     LIMIT 1"
);
$stmt->execute(["id" => $memberId]);
$member = $stmt->fetch();

if (!$member) {
    $_SESSION = [];
    session_destroy();
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "회원정보를 찾을 수 없습니다."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    "success" => true,
    "member" => $member
], JSON_UNESCAPED_UNICODE);
