<?php
$source_dir = __DIR__ . '/assets/image';
$base_images = [
    'srinagar.png',
    'gulmarg.png',
    'gallery_group_shikara.png',
    'pahalgam.png',
    'sonamarg.png',
    'gallery_group_trek.png',
    'pkg_classic.png',
    'pkg_honeymoon.png',
    'yusmarg.png',
    'doodhpathri.png',
    'pkg_adventure.png',
    'sinthan.png',
    'pkg_family.png',
    'gurez.png',
    'pkg_quick.png',
    'pkg_complete.png',
    'hero_new.png',
    'hero1.png'
];

foreach ($base_images as $img) {
    $file = $source_dir . '/' . $img;
    if (file_exists($file)) {
        $info = getimagesize($file);
        echo "$img: mime = " . ($info['mime'] ?? 'unknown') . ", type = " . ($info[2] ?? 'unknown') . "\n";
    } else {
        echo "$img: NOT FOUND\n";
    }
}
?>
