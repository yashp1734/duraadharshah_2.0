<?php

function validateHTML($html) {
    $validator_url = 'https://validator.w3.org/nu/';
    $data = [
        'out' => 'json',
        'content' => $html,
    ];

    $options = [
        'http' => [
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($data),
        ],
    ];

    $context  = stream_context_create($options);

    $result = file_get_contents($validator_url, false, $context);

    if ($result === false) {
        // Error handling
        return "Error accessing the validation service.";
    }

    return $result;
}

$html = file_get_contents('index.html');
$validationResult = validateHTML($html);
echo $validationResult;
