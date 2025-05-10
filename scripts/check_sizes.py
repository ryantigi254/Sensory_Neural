#!/usr/bin/env python3
import os
from glob import glob
from PIL import Image

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    images_dir = os.path.join(script_dir, '..', 'public', 'img')
    patterns = ['*.jpg', '*.JPG', '*.jpeg', '*.JPEG', '*.png', '*.PNG']
    files = []
    for pat in patterns:
        files.extend(glob(os.path.join(images_dir, pat)))

    if not files:
        print('No images found.')
        return

    sizes = []
    for f in files:
        with Image.open(f) as img:
            sizes.append(img.size)  # (width, height)

    unique_sizes = set(sizes)
    if len(unique_sizes) == 1:
        w, h = unique_sizes.pop()
        print(f"All {len(files)} images are {w}x{h}")
    else:
        print('Images have varying dimensions:')
        counts = {size: sizes.count(size) for size in unique_sizes}
        for (w, h), count in counts.items():
            print(f"  {count} images are {w}x{h}")

if __name__ == '__main__':
    main() 