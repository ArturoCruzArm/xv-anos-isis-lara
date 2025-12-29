#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar el array de fotos para selector.js
"""
import json
from pathlib import Path

def generate_selector_js():
    """Genera el código JavaScript con todas las fotos"""

    # Leer el archivo photos.json
    photos_json = Path("fotos/photos.json")

    if not photos_json.exists():
        print(f"Error: {photos_json} no existe")
        return False

    with open(photos_json, 'r', encoding='utf-8') as f:
        photos_data = json.load(f)

    # Generar el array de nombres de archivos
    photo_files = [photo['filename'] for photo in photos_data]

    # Crear el string del array JavaScript (formato compacto, un archivo por línea)
    js_array = '[\n'
    for i, filename in enumerate(photo_files):
        if i < len(photo_files) - 1:
            js_array += f'"{filename}",\n'
        else:
            js_array += f'"{filename}"\n'
    js_array += ']'

    # Leer el archivo selector.js actual
    selector_js = Path("js/selector.js")

    with open(selector_js, 'r', encoding='utf-8') as f:
        content = f.read()

    # Buscar el lugar donde definir PHOTO_FILES
    # Reemplazar desde "let PHOTO_FILES = [];" hasta "let photosLoaded = false;"
    start_marker = "let PHOTO_FILES = [];"
    end_marker = "let photosLoaded = false;"

    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)

    if start_idx == -1 or end_idx == -1:
        print("Error: No se encontraron los marcadores en selector.js")
        return False

    # Construir el nuevo contenido
    new_declaration = f"""const PHOTO_FILES = {js_array};

const photos = PHOTO_FILES.map(filename => `fotos/${{filename}}`);\n"""

    # Reemplazar la sección
    new_content = content[:start_idx] + new_declaration + content[end_idx + len(end_marker):]

    # Guardar el archivo actualizado
    with open(selector_js, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"[OK] selector.js actualizado")
    print(f"  Total de fotos: {len(photo_files)}")

    return True

if __name__ == "__main__":
    generate_selector_js()
