#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para convertir las imágenes restantes a WebP
"""
import os
import sys
import io
from pathlib import Path
from PIL import Image, ImageOps
import pillow_heif

# Configurar salida UTF-8 para Windows
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Registrar el formato HEIF para PIL
pillow_heif.register_heif_opener()

def convert_to_webp(input_path, output_dir, quality=85):
    """Convierte una imagen a WebP con orientación correcta"""
    try:
        # Abrir imagen
        img = Image.open(input_path)

        # Aplicar orientación EXIF automáticamente
        img = ImageOps.exif_transpose(img)

        # Convertir a RGB si es necesario
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        # Generar nombre de salida
        input_name = Path(input_path).stem
        output_path = Path(output_dir) / f"{input_name}.webp"

        # Guardar como WebP
        img.save(output_path, 'WEBP', quality=quality, method=6)

        print(f"✓ {Path(input_path).name} -> {output_path.name}")
        return True

    except Exception as e:
        print(f"✗ Error en {Path(input_path).name}: {str(e)}")
        return False

def process_directory(input_dir, output_dir):
    """Procesa todas las imágenes de un directorio"""
    input_path = Path(input_dir)
    output_path = Path(output_dir)

    # Crear directorio de salida si no existe
    output_path.mkdir(parents=True, exist_ok=True)

    # Buscar todas las imágenes
    extensions = ('.heic', '.jpg', '.jpeg', '.png', '.HEIC', '.JPG', '.JPEG', '.PNG')
    images = []
    for ext in extensions:
        images.extend(input_path.glob(f"*{ext}"))

    if not images:
        print(f"⚠ No se encontraron imágenes en {input_dir}")
        return 0, 0

    print(f"\n📸 Procesando {len(images)} imágenes de {input_dir}...")

    success = 0
    failed = 0

    for i, img_path in enumerate(images, 1):
        print(f"[{i}/{len(images)}] ", end="")
        if convert_to_webp(img_path, output_path):
            success += 1
        else:
            failed += 1

    return success, failed

def main():
    # Solo procesar las carpetas que faltan
    source_dirs = [
        r"E:\DCIM\189D7000",
        r"F:\2025\12\20\isis francia"
    ]

    output_dir = r"D:\eventos\xv-anos-isis-lara\fotos"

    print("=" * 70)
    print("  Conversor de Imágenes Restantes - XV Años Isis Francia Sarabi")
    print("=" * 70)

    total_success = 0
    total_failed = 0

    for source_dir in source_dirs:
        if os.path.exists(source_dir):
            success, failed = process_directory(source_dir, output_dir)
            total_success += success
            total_failed += failed
        else:
            print(f"\n⚠ Directorio no encontrado: {source_dir}")

    print("\n" + "=" * 70)
    print(f"  RESUMEN FINAL")
    print("=" * 70)
    print(f"✓ Exitosas:  {total_success}")
    print(f"✗ Fallidas:  {total_failed}")
    print(f"📁 Destino:  {output_dir}")
    print("=" * 70)

    if total_success > 0:
        print(f"\n✓ {total_success} imágenes convertidas exitosamente")

    return 0 if total_failed == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
