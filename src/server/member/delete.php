<?php

require_once "../db.php";

$memberId = $_SESSION["member_id"] ?? null;
$data = json_decode(file_get_contents("php://input"), true) ?: [];
$password = $data["password"] ?? "";

if (!$memberId) {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "로그인이 필요합니다."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!$password) {
    echo json_encode([
        "success" => false,
        "message" => "비밀번호를 입력해주세요."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $db->prepare("SELECT password FROM members WHERE id = :id LIMIT 1");
$stmt->execute(["id" => $memberId]);
$member = $stmt->fetch();

if (!$member || !password_verify($password, $member["password"])) {
    echo json_encode([
        "success" => false,
        "message" => "비밀번호가 일치하지 않습니다."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $db->prepare("DELETE FROM members WHERE id = :id");
$stmt->execute(["id" => $memberId]);

$_SESSION = [];
session_destroy();

echo json_encode([
    "success" => true,
    "message" => "회원 탈퇴가 완료되었습니다."
], JSON_UNESCAPED_UNICODE);
