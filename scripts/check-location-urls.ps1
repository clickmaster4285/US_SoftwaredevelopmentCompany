param(
    [string]$BaseUrl = "https://clickmasterssoftwaredevelopmentcompany.com",
    [string]$OutFile = "$PSScriptRoot\location-url-status-results.txt"
)

# Location sub-page slugs from data/location-service-data.ts
$slugs = @(
    "software-development-company-los-angeles",
    "software-development-company-houston",
    "software-development-company-in-new-york",
    "software-development-company-san-francisco",
    "software-development-company-chicago",
    "software-development-company-dallas"
)

$urls = @("$BaseUrl/locations") + ($slugs | ForEach-Object { "$BaseUrl/locations/$_" })

$lines = @()
foreach ($u in $urls) {
    $code = & curl.exe -s -o NUL -w "%{http_code}" -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36" --max-time 30 $u
    if ([string]::IsNullOrWhiteSpace($code)) { $code = "NO_RESPONSE" }
    $lines += "$code`t$u"
    Write-Output "$code  $u"
}

$lines | Set-Content -Path $OutFile -Encoding UTF8
Write-Output "Results written to $OutFile"
