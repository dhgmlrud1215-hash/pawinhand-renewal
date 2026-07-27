<?php

require_once "../db.php";

$data = json_decode(file_get_contents("php://input"), true);

$userId = trim($data["userId"] ?? "");
$password = $data["password"] ?? "";

if (!$userId || !$password) {
    echo json_encode([
        "success" => false,
        "message" => "아이디와 비밀번호를 입력해주세요."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $db->prepare(
    "SELECT id, user_id, password, name, nickname, email, phone
     FROM members
     WHERE user_id = :user_id
     LIMIT 1"
);

$stmt->execute([
    "user_id" => $userId
]);

$member = $stmt->fetch();

if (!$member || !password_verify($password, $member["password"])) {
    echo json_encode([
        "success" => false,
        "message" => "아이디 또는 비밀번호가 일치하지 않습니다."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

unset($member["password"]);

echo json_encode([
    "success" => true,
    "message" => "로그인되었습니다.",
    "member" => $member
], JSON_UNESCAPED_UNICODE);