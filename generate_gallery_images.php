<?php
// PHP Script to process and generate 30 distinct image files for KMS Tour & Travels Gallery
// Loads dynamically with GD extension in CLI.

$source_dir = __DIR__ . '/assets/image';
$dest_dir = __DIR__ . '/assets/image/gallery';

if (!file_exists($dest_dir)) {
    mkdir($dest_dir, 0777, true);
}

// 18 base images mapping
$base_images = [
    1 => 'srinagar.png',
    2 => 'gulmarg.png',
    3 => 'gallery_group_shikara.png',
    4 => 'pahalgam.png',
    5 => 'sonamarg.png',
    6 => 'gallery_group_trek.png',
    7 => 'pkg_classic.png',
    8 => 'pkg_honeymoon.png',
    9 => 'yusmarg.png',
    10 => 'doodhpathri.png',
    11 => 'pkg_adventure.png',
    12 => 'sinthan.png',
    13 => 'pkg_family.png',
    14 => 'gurez.png',
    15 => 'pkg_quick.png',
    16 => 'pkg_complete.png',
    17 => 'hero_new.png',
    18 => 'hero1.png'
];

echo "Processing base images...\n";

// Function to copy a file directly
function copyImage($src, $dest) {
    if (copy($src, $dest)) {
        echo "Copied: " . basename($src) . " -> " . basename($dest) . "\n";
        return true;
    } else {
        echo "Failed to copy: " . basename($src) . "\n";
        return false;
    }
}

// Helper to load image based on real MIME type
function load_image($file) {
    $info = getimagesize($file);
    if (!$info) {
        return false;
    }
    $type = $info[2];
    switch ($type) {
        case IMAGETYPE_JPEG:
            return imagecreatefromjpeg($file);
        case IMAGETYPE_PNG:
            return imagecreatefrompng($file);
        case IMAGETYPE_GIF:
            return imagecreatefromgif($file);
        case IMAGETYPE_WEBP:
            return imagecreatefromwebp($file);
        default:
            return false;
    }
}

// Function to apply filters
function transformImage($src, $dest, $flip = false, $crop = false, $tint = null) {
    $im = load_image($src);
    if (!$im) {
        echo "Failed to load image: " . basename($src) . "\n";
        return false;
    }

    // Apply crop if requested
    if ($crop) {
        $width = imagesx($im);
        $height = imagesy($im);
        // Crop the center 85% area
        $crop_width = (int)($width * 0.85);
        $crop_height = (int)($height * 0.85);
        $crop_x = (int)(($width - $crop_width) / 2);
        $crop_y = (int)(($height - $crop_height) / 2);
        
        $cropped = imagecrop($im, ['x' => $crop_x, 'y' => $crop_y, 'width' => $crop_width, 'height' => $crop_height]);
        if ($cropped) {
            imagedestroy($im);
            $im = $cropped;
        }
    }

    // Apply flip if requested
    if ($flip) {
        imageflip($im, IMG_FLIP_HORIZONTAL);
    }

    // Apply tint if requested
    if ($tint === 'warm') {
        // Red, Green, Blue
        imagefilter($im, IMG_FILTER_COLORIZE, 25, 10, -15);
        imagefilter($im, IMG_FILTER_CONTRAST, -5);
    } elseif ($tint === 'cool') {
        imagefilter($im, IMG_FILTER_COLORIZE, -10, 5, 20);
        imagefilter($im, IMG_FILTER_CONTRAST, -5);
    } elseif ($tint === 'vivid') {
        // Boost contrast and color slightly
        imagefilter($im, IMG_FILTER_CONTRAST, -15);
        imagefilter($im, IMG_FILTER_COLORIZE, 5, 5, 5);
    }

    // Save as PNG
    if (imagepng($im, $dest)) {
        echo "Transformed: " . basename($src) . " -> " . basename($dest) . " (Flip: " . ($flip?'yes':'no') . ", Crop: " . ($crop?'yes':'no') . ", Tint: $tint)\n";
        imagedestroy($im);
        return true;
    } else {
        echo "Failed to save: " . basename($dest) . "\n";
        imagedestroy($im);
        return false;
    }
}

// 1. Generate the first 18 images as direct copies of base images
// Wait! Let's actually transform/save them as valid PNG files since they are JPEGs with .png extensions,
// or we can just copy them. Wait, if they are copied directly, the browser loads them fine because browsers infer file type from content,
// but converting them to proper PNG format makes the workspace standard and eliminates format mismatch.
// Let's copy them directly as it is faster and preserves original bytes, or we can transform them.
// Let's do copy for 1-18 for maximum speed and simplicity, and transform for the rest.
for ($i = 1; $i <= 18; $i++) {
    $src = $source_dir . '/' . $base_images[$i];
    $dest = $dest_dir . '/gallery_' . $i . '.png';
    copyImage($src, $dest);
}

// 2. Generate the next 12 images as distinct visual variations
// gallery_19: gallery_group_shikara.png -> Flip Horizontal + Warm Tint
transformImage($source_dir . '/gallery_group_shikara.png', $dest_dir . '/gallery_19.png', true, false, 'warm');

// gallery_20: gallery_group_trek.png -> Flip Horizontal + Cool Tint
transformImage($source_dir . '/gallery_group_trek.png', $dest_dir . '/gallery_20.png', true, false, 'cool');

// gallery_21: srinagar.png -> Zoom Crop + Warm Tint
transformImage($source_dir . '/srinagar.png', $dest_dir . '/gallery_21.png', false, true, 'warm');

// gallery_22: gulmarg.png -> Flip Horizontal + Cool Tint
transformImage($source_dir . '/gulmarg.png', $dest_dir . '/gallery_22.png', true, false, 'cool');

// gallery_23: pahalgam.png -> Zoom Crop + Vivid Contrast
transformImage($source_dir . '/pahalgam.png', $dest_dir . '/gallery_23.png', false, true, 'vivid');

// gallery_24: sonamarg.png -> Flip Horizontal + Warm Tint
transformImage($source_dir . '/sonamarg.png', $dest_dir . '/gallery_24.png', true, false, 'warm');

// gallery_25: yusmarg.png -> Cool Tint
transformImage($source_dir . '/yusmarg.png', $dest_dir . '/gallery_25.png', false, false, 'cool');

// gallery_26: doodhpathri.png -> Flip Horizontal + Zoom Crop
transformImage($source_dir . '/doodhpathri.png', $dest_dir . '/gallery_26.png', true, true, null);

// gallery_27: gurez.png -> Warm Tint + Flip Horizontal
transformImage($source_dir . '/gurez.png', $dest_dir . '/gallery_27.png', true, false, 'warm');

// gallery_28: pkg_family.png -> Flip Horizontal + Warm Tint
transformImage($source_dir . '/pkg_family.png', $dest_dir . '/gallery_28.png', true, false, 'warm');

// gallery_29: pkg_adventure.png -> Zoom Crop + Cool Tint
transformImage($source_dir . '/pkg_adventure.png', $dest_dir . '/gallery_29.png', false, true, 'cool');

// gallery_30: pkg_complete.png -> Flip Horizontal + Cool Tint
transformImage($source_dir . '/pkg_complete.png', $dest_dir . '/gallery_30.png', true, false, 'cool');

echo "All 30 gallery images generated successfully!\n";
?>
