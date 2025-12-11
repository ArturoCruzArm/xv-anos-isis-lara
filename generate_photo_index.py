#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar un índice JSON de las fotos convertidas
"""
import json
import os
from pathlib import Path

def generate_photo_index():
    """Genera un archivo JSON con la lista de fotos disponibles"""
    photos_dir = Path("fotos")

    if not photos_dir.exists():
        print(f"Error: El directorio {photos_dir} no existe")
        return

    # Buscar todos los archivos webp
    photos = sorted(photos_dir.glob("*.webp"))

    if not photos:
        print("No se encontraron fotos WebP")
        return

    # Crear lista de fotos
    photo_list = []
    for i, photo in enumerate(photos):
        photo_list.append({
            "id": i,
            "filename": photo.name,
            "url": f"fotos/{photo.name}"
        })

    # Guardar como JSON
    output_file = "fotos/photos.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(photo_list, f, ensure_ascii=False, indent=2)

    print(f"[OK] Indice generado: {output_file}")
    print(f"  Total de fotos: {len(photo_list)}")

if __name__ == "__main__":
    generate_photo_index()
