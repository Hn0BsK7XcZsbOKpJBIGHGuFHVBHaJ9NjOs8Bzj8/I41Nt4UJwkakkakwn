<?php
header("Content-Type: application/xml; charset=utf-8");

$dir = "upload/";
$baseUrl = "https://caritau.kezt.my.id/";

echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

if ($handle = opendir($dir)) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != ".." && pathinfo($file, PATHINFO_EXTENSION) == "html") {
            $url = $baseUrl . $dir . $file;
            echo "<url><loc>$url</loc><lastmod>" . date("Y-m-d") . "</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>";
        }
    }
    closedir($handle);
}

echo '</urlset>';
?>