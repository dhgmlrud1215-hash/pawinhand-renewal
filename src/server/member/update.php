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

$data = json_decode(file_get_contents("php://input"), true) ?: [];
$nickname = trim($data["nickname"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");

if (!$nickname || !$email) {
    echo json_encode([
        "success" => false,
        "message" => "닉네임과 이메일을 입력해주세요."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $db->prepare(
    "UPDATE members
     SET nickname = :nickname, email = :email, phone = :phone
     WHERE id = :id"
);
$stmt->execute([
    "nickname" => $nickname,
    "email" => $email,
    "phone" => $phone ?: null,
    "id" => $memberId
]);

echo json_encode([
    "success" => true,
    "message" => "회원정보가 수정되었습니다."
], JSON_UNESCAPED_UNICODE);
