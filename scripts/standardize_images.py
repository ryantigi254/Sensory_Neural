#!/usr/bin/env python3
# type: ignore
# pylint: disable=no-member
"""
Standardize images: detect face, crop with padding, resize/upscale to target size.
Usage:
  python scripts/standardize_images.py \
    --width 512 --height 512 --padding 0.5 \
    --input-dir public/img --output-dir public/img_standardized
"""
import os
import argparse
from glob import glob
from PIL import Image
import cv2  # type: ignore

def process_image(input_path, output_path, target_size, padding_ratio, face_cascade):
    img = cv2.imread(input_path)
    if img is None:
        print(f"Failed to open {input_path}")
        return
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)
    h_img, w_img = img.shape[:2]
    if len(faces) > 0:
        x, y, w, h = max(faces, key=lambda r: r[2] * r[3])
        pad_w = int(w * padding_ratio)
        pad_h = int(h * padding_ratio)
        x1 = max(0, x - pad_w)
        y1 = max(0, y - pad_h)
        x2 = min(w_img, x + w + pad_w)
        y2 = min(h_img, y + h + pad_h)
        cropped = img[y1:y2, x1:x2]
    else:
        cropped = img  # no face: use full image
    pil_img = Image.fromarray(cv2.cvtColor(cropped, cv2.COLOR_BGR2RGB))
    resized = pil_img.resize((target_size[0], target_size[1]), Image.Resampling.LANCZOS)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    resized.save(output_path)
    print(f"Saved standardized image: {output_path}")

def main():
    parser = argparse.ArgumentParser(description="Standardize images with face centering and resizing.")
    parser.add_argument("--width", type=int, default=512)
    parser.add_argument("--height", type=int, default=512)
    parser.add_argument("--padding", type=float, default=0.5,
                        help="padding ratio around detected face bbox")
    parser.add_argument("--input-dir", default=os.path.join("public", "img"))
    parser.add_argument("--output-dir", default=os.path.join("public", "img_standardized"))
    args = parser.parse_args()

    cascade_path = cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    face_cascade = cv2.CascadeClassifier(cascade_path)
    if face_cascade.empty():
        print("Error: could not load Haar cascade from", cascade_path)
        return

    patterns = ["*.jpg", "*.JPG", "*.jpeg", "*.JPEG", "*.png", "*.PNG"]
    files = []
    for pat in patterns:
        files.extend(glob(os.path.join(args.input_dir, pat)))
    if not files:
        print("No images found in", args.input_dir)
        return

    target_size = (args.width, args.height)
    for image_path in files:
        filename = os.path.basename(image_path)
        output_path = os.path.join(args.output_dir, filename)
        process_image(image_path, output_path, target_size, args.padding, face_cascade)

if __name__ == '__main__':
    main() 