<?php

require_once "../db.php";

$data = json_decode(file_get_contents("php://input"), true);

$userId = trim($data["userId"] ?? "");
$password = $data["password"] ?? "";
$name = trim($data["name"] ?? "");
$nickname = trim($data["nickname"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$marketing = !empty($data["marketing"]) ? 1 : 0;

if (!$userId || !$password || !$name || !$nickname || !$email) {
    echo json_encode([
        "success" => false,
        "message" => "필수 항목을 입력해주세요."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO members
        (user_id, password, name, nickname, email, phone, marketing_agreed)
        VALUES
        (:user_id, :password, :name, :nickname, :email, :phone, :marketing)";

try {
    $stmt = $db->prepare($sql);

    $stmt->execute([
        "user_id" => $userId,
        "password" => $hashedPassword,
        "name" => $name,
        "nickname" => $nickname,
        "email" => $email,
        "phone" => $phone,
        "marketing" => $marketing
    ]);

    echo json_encode([
        "success" => true,
        "message" => "회원가입이 완료되었습니다."
    ], JSON_UNESCAPED_UNICODE);
} catch (PDOException $error) {
    echo json_encode([
        "success" => false,
        "message" => "회원가입에 실패했습니다."
    ], JSON_UNESCAPED_UNICODE);
}