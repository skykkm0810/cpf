<?php
$ch = curl_init();
$url = 'http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart'; /*URL*/
$queryParams = '?' . urlencode('ServiceKey') . '=vXn1GcCbThjen%2FHtgC06qPtxZB%2BEOg5IdRIixYzwEL%2BRCBOwaWigCjFgrex70bGZwwtVpdFhrHdHsv2lIDjgnQ%3D%3D'; /*Service Key*/
$queryParams .= '&' . urlencode('pageNo') . '=' . urlencode('1'); /**/
$queryParams .= '&' . urlencode('numOfRows') . '=' . urlencode('10'); /**/
$queryParams .= '&' . urlencode('dataType') . '=' . urlencode('XML'); /**/
$queryParams .= '&' . urlencode('code') . '=' . urlencode('24'); /**/
$queryParams .= '&' . urlencode('time') . '=' . urlencode('20151013'); /**/

curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
$response = curl_exec($ch);
curl_close($ch);

$data = var_dump($response);


?>

[
    {
        "data": "<?=$data?>"
    }
]