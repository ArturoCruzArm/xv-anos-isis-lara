// ========================================
// GLOBAL VARIABLES
// ========================================
// Lista de fotos - 344 fotos de la sesión previa
const PHOTO_FILES = [
"DJI_20251208154335_0209_D.webp","DJI_20251208154341_0210_D.webp","DJI_20251208154343_0211_D.webp","DJI_20251208154415_0212_D.webp","DJI_20251208154425_0213_D.webp","DJI_20251208154448_0214_D.webp","DJI_20251208154452_0215_D.webp","DJI_20251208154605_0216_D.webp","DJI_20251208154607_0217_D.webp","DJI_20251208154611_0218_D.webp","DSC_6976.webp","DSC_6977.webp","DSC_6978.webp","DSC_6979.webp","DSC_6980.webp","DSC_6981.webp","DSC_6982.webp","DSC_6983.webp","DSC_6984.webp","DSC_6985.webp","DSC_6986.webp","DSC_6987.webp","DSC_6988.webp","DSC_6989.webp","DSC_6990.webp","DSC_6991.webp","DSC_6992.webp","DSC_6993.webp","DSC_6994.webp","DSC_6995.webp","DSC_6996.webp","DSC_6997.webp","DSC_6998.webp","DSC_6999.webp","DSC_7000.webp","DSC_7001.webp","DSC_7002.webp","DSC_7003.webp","DSC_7004.webp","DSC_7005.webp","DSC_7006.webp","DSC_7007.webp","DSC_7008.webp","DSC_7009.webp","DSC_7010.webp","DSC_7011.webp","DSC_7012.webp","DSC_7013.webp","DSC_7014.webp","DSC_7015.webp","DSC_7016.webp","DSC_7017.webp","DSC_7018.webp","DSC_7019.webp","DSC_7020.webp","DSC_7021.webp","DSC_7022.webp","DSC_7023.webp","DSC_7024.webp","DSC_7025.webp","DSC_7026.webp","DSC_7027.webp","DSC_7028.webp","DSC_7029.webp","DSC_7030.webp","DSC_7031.webp","DSC_7032.webp","DSC_7033.webp","DSC_7034.webp","DSC_7035.webp","DSC_7036.webp","DSC_7037.webp","DSC_7038.webp","DSC_7039.webp","DSC_7040.webp","DSC_7041.webp","DSC_7042.webp","DSC_7043.webp","DSC_7044.webp","DSC_7045.webp","DSC_7046.webp","DSC_7047.webp","IMG_5826.webp","IMG_5827.webp","IMG_5828.webp","IMG_5829.webp","IMG_5830.webp","IMG_5831.webp","IMG_5832.webp","IMG_5833.webp","IMG_5834.webp","IMG_5835.webp","IMG_5836.webp","IMG_5837.webp","IMG_5838.webp","IMG_5839.webp","IMG_5840.webp","IMG_5841.webp","IMG_5842.webp","IMG_5843.webp","IMG_5844.webp","IMG_5845.webp","IMG_5846.webp","IMG_5847.webp","IMG_5848.webp","IMG_5849.webp","IMG_5850.webp","IMG_5851.webp","IMG_5852.webp","IMG_5853.webp","IMG_5854.webp","IMG_5855.webp","IMG_5856.webp","IMG_5857.webp","IMG_5858.webp","IMG_5859.webp","IMG_5860.webp","IMG_5861.webp","IMG_5862.webp","IMG_5863.webp","IMG_5864.webp","IMG_5865.webp","IMG_5866.webp","IMG_5867.webp","IMG_5868.webp","IMG_5869.webp","IMG_5870.webp","IMG_5871.webp","IMG_5872.webp","IMG_5873.webp","IMG_5874.webp","IMG_5875.webp","IMG_5876.webp","IMG_5877.webp","IMG_5878.webp","IMG_5879.webp","IMG_5880.webp","IMG_5881.webp","IMG_5882.webp","IMG_5883.webp","IMG_5884.webp","IMG_5885.webp","IMG_5886.webp","IMG_5887.webp","IMG_5888.webp","IMG_5889.webp","IMG_5890.webp","IMG_5891.webp","IMG_5892.webp","IMG_5893.webp","IMG_5894.webp","IMG_5895.webp","IMG_5896.webp","IMG_5897.webp","IMG_5898.webp","IMG_5899.webp","IMG_5900.webp","IMG_5901.webp","IMG_5902.webp","IMG_5903.webp","IMG_5904.webp","IMG_5905.webp","IMG_5906.webp","IMG_5907.webp","IMG_5908.webp","IMG_5909.webp","IMG_5910.webp","IMG_5911.webp","IMG_5912.webp","IMG_5913.webp","IMG_5914.webp","IMG_5915.webp","IMG_5916.webp","IMG_5917.webp","IMG_5918.webp","IMG_5919.webp","IMG_5920.webp","IMG_5921.webp","IMG_5922.webp","IMG_5923.webp","IMG_5924.webp","IMG_5925.webp","IMG_5926.webp","IMG_5927.webp","IMG_5928.webp","IMG_5929.webp","IMG_5930.webp","IMG_5931.webp","IMG_5932.webp","IMG_5933.webp","IMG_5934.webp","IMG_5935.webp","IMG_5936.webp","IMG_5937.webp","IMG_5938.webp","IMG_5939.webp","IMG_5940.webp","IMG_5941.webp","IMG_5942.webp","IMG_5943.webp","IMG_5944.webp","IMG_5945.webp","IMG_5946.webp","IMG_5947.webp","IMG_5948.webp","IMG_5949.webp","IMG_5950.webp","IMG_5951.webp","IMG_5952.webp","IMG_5953.webp","IMG_5954.webp","IMG_5955.webp","IMG_5956.webp","IMG_5957.webp","IMG_5958.webp","IMG_5959.webp","IMG_5960.webp","IMG_5961.webp","IMG_5962.webp","IMG_5963.webp","IMG_5964.webp","IMG_5965.webp","IMG_5966.webp","IMG_5967.webp","IMG_5968.webp","IMG_5969.webp","IMG_5970.webp","IMG_5971.webp","IMG_5972.webp","IMG_5973.webp","IMG_5974.webp","IMG_5975.webp","IMG_5976.webp","IMG_5977.webp","IMG_5978.webp","IMG_5979.webp","IMG_5980.webp","IMG_5981.webp","IMG_5982.webp","IMG_5983.webp","IMG_5984.webp","IMG_5985.webp","IMG_5986.webp","IMG_5987.webp","IMG_5988.webp","IMG_5989.webp","IMG_5990.webp","IMG_5991.webp","IMG_5992.webp","IMG_5993.webp","IMG_5994.webp","IMG_5995.webp","IMG_5996.webp","IMG_5997.webp","IMG_5998.webp","IMG_5999.webp","IMG_6001.webp","IMG_6002.webp","IMG_6003.webp","IMG_6004.webp","IMG_6005.webp","IMG_6006.webp","IMG_6007.webp","IMG_6008.webp","IMG_6009.webp","IMG_6010.webp","IMG_6011.webp","IMG_6012.webp","IMG_6013.webp","IMG_6014.webp","IMG_6015.webp","IMG_6016.webp","IMG_6017.webp","IMG_6018.webp","IMG_6019.webp","IMG_6020.webp","IMG_6021.webp","IMG_6022.webp","IMG_6023.webp","IMG_6024.webp","IMG_6025.webp","IMG_6026.webp","IMG_6027.webp","IMG_6028.webp","IMG_6029.webp","IMG_6030.webp","IMG_6031.webp","IMG_6032.webp","IMG_6033.webp","IMG_6034.webp","IMG_6035.webp","IMG_6036.webp","IMG_6037.webp","IMG_6038.webp","IMG_6039.webp","IMG_6040.webp","IMG_6041.webp","IMG_6042.webp","IMG_6043.webp","IMG_6044.webp","IMG_6045.webp","IMG_6046.webp","IMG_6047.webp","IMG_6048.webp","IMG_6049.webp","IMG_6050.webp","IMG_6051.webp","IMG_6052.webp","IMG_6053.webp","IMG_6054.webp","IMG_6055.webp","IMG_6056.webp","IMG_6057.webp","IMG_6058.webp","IMG_6059.webp","IMG_6060.webp","IMG_6061.webp","IMG_6062.webp","IMG_6063.webp","IMG_6064.webp","IMG_6065.webp","IMG_6066.webp","IMG_6067.webp","IMG_6068.webp","IMG_6069.webp","IMG_6070.webp","IMG_6071.webp","IMG_6072.webp","IMG_6073.webp","IMG_6074.webp","IMG_6075.webp","IMG_6076.webp","IMG_6077.webp","IMG_6078.webp","IMG_6079.webp","IMG_6080.webp","IMG_6081.webp","IMG_6082.webp","IMG_6083.webp","IMG_6084.webp","IMG_6085.webp","IMG_6086.webp","IMG_6087.webp","IMG_6088.webp"
];

const photos = PHOTO_FILES.map(filename => `fotos/${filename}`);

// LIMITS FOR ISIS'S PACKAGE
const LIMITS = {
    impresion: 80,    // Máximo 80 fotos para impresión
    ampliacion: 1     // Máximo 1 foto para ampliación
    // redes_sociales: sin límite
    // web: sin límite
};

const STORAGE_KEY = 'isis_xv_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás segura de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        redes_sociales: 0,
        web: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.redes_sociales) stats.redes_sociales++;
        if (selection.web) stats.web++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    // Update counters
    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countRedesSociales').textContent = stats.redes_sociales;
    document.getElementById('countWeb').textContent = stats.web;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    // Add warning class if limits exceeded
    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITS.ampliacion) {
            ampliacionCard.classList.add('exceeded');
        } else {
            ampliacionCard.classList.remove('exceeded');
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITS.impresion) {
            impresionCard.classList.add('exceeded');
        } else {
            impresionCard.classList.remove('exceeded');
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.redes_sociales || selection.web || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.redes_sociales) categories.push('redes_sociales');
            if (selection.web) categories.push('web');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.redes_sociales) badgesHTML += '<span class="badge badge-redes-sociales">📱 Redes</span>';
            if (selection.web) badgesHTML += '<span class="badge badge-web">🌐 Web</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function isPhotoVisible(index) {
    const selection = photoSelections[index] || {};
    let show = false;

    switch (currentFilter) {
        case 'all':
            show = true;
            break;
        case 'ampliacion':
            show = selection.ampliacion === true;
            break;
        case 'impresion':
            show = selection.impresion === true;
            break;
        case 'redes-sociales':
            show = selection.redes_sociales === true;
            break;
        case 'web':
            show = selection.web === true;
            break;
        case 'descartada':
            show = selection.descartada === true;
            break;
        case 'sin-clasificar':
            show = !selection.ampliacion && !selection.impresion && !selection.redes_sociales && !selection.web && !selection.descartada;
            break;
    }
    return show;
}

function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        card.classList.toggle('hidden', !isPhotoVisible(index));
    });
}

function setFilter(filter) {
    console.log('Setting filter to:', filter);
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion}/${LIMITS.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion}/${LIMITS.impresion})`;
    document.getElementById('btnFilterRedesSociales').textContent = `Redes (${stats.redes_sociales})`;
    document.getElementById('btnFilterWeb').textContent = `Web (${stats.web})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

function findNextVisiblePhoto(startIndex, direction) {
    let newIndex = startIndex;
    const totalPhotos = photos.length;

    if (direction === 'next') {
        for (let i = startIndex + 1; i < totalPhotos; i++) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    } else { // 'prev'
        for (let i = startIndex - 1; i >= 0; i--) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    }

    return null;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    // Update navigation button states
    updateNavigationButtons();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');

    if (btnPrev && btnNext) {
        const prevIndex = findNextVisiblePhoto(currentPhotoIndex, 'prev');
        const nextIndex = findNextVisiblePhoto(currentPhotoIndex, 'next');

        btnPrev.disabled = prevIndex === null;
        btnPrev.style.opacity = prevIndex === null ? '0.3' : '1';
        btnPrev.style.cursor = prevIndex === null ? 'not-allowed' : 'pointer';

        btnNext.disabled = nextIndex === null;
        btnNext.style.opacity = nextIndex === null ? '0.3' : '1';
        btnNext.style.cursor = nextIndex === null ? 'not-allowed' : 'pointer';
    }
}

function hasUnsavedChanges() {
    if (currentPhotoIndex === null) return false;

    const savedSelection = photoSelections[currentPhotoIndex] || {};
    const currentSelection = {};
    document.querySelectorAll('.option-btn.selected').forEach(btn => {
        currentSelection[btn.dataset.category] = true;
    });

    const savedKeys = Object.keys(savedSelection).filter(k => savedSelection[k]);
    const currentKeys = Object.keys(currentSelection);

    if (savedKeys.length !== currentKeys.length) return true;

    const allKeys = new Set([...savedKeys, ...currentKeys]);

    for (const key of allKeys) {
        if (!!savedSelection[key] !== !!currentSelection[key]) {
            return true;
        }
    }

    return false;
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    const proceed = () => {
        const newIndex = findNextVisiblePhoto(currentPhotoIndex, direction);

        if (newIndex !== null) {
            currentPhotoIndex = newIndex;
            const modalImage = document.getElementById('modalImage');
            const modalPhotoNumber = document.getElementById('modalPhotoNumber');

            modalImage.src = photos[newIndex];
            modalPhotoNumber.textContent = `Foto ${newIndex + 1}`;

            const selection = photoSelections[newIndex] || {};
            document.querySelectorAll('.option-btn').forEach(btn => {
                const category = btn.dataset.category;
                btn.classList.toggle('selected', selection[category] === true);
            });

            updateNavigationButtons();
        }
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de continuar?')) {
            saveModalSelection(proceed);
        } else {
            proceed();
        }
    } else {
        proceed();
    }
}

function closeModal() {
    const doClose = () => {
        const modal = document.getElementById('photoModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentPhotoIndex = null;
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de salir?')) {
            saveModalSelection(doClose);
        } else {
            doClose();
        }
    } else {
        doClose();
    }
}

function saveModalSelection(callback) {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    showToast('Selección guardada correctamente', 'success');

    if (callback && typeof callback === 'function') {
        callback();
    } else {
        closeModal();
    }
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        INSTRUCCIONES: '⚠️ IMPORTANTE: Por favor envía este archivo por WhatsApp al 4779203776',
        whatsapp: '4779203776',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.redes_sociales || selection.web || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: PHOTO_FILES[index],
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                redes_sociales: selection.redes_sociales || false,
                web: selection.web || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-isis-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('📥 Reporte descargado. ¡Envíalo por WhatsApp al 4779203776!', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - XV AÑOS ISIS FRANCIA SARABI\n';
    summary += '═══════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   📱 Para redes sociales: ${stats.redes_sociales}\n`;
    summary += `   🌐 Para web: ${stats.web}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'redes_sociales', 'web', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        redes_sociales: '📱 REDES SOCIALES',
        web: '🌐 WEB',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    summary += `\n📱 WhatsApp: 477-920-3776\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterRedesSociales').addEventListener('click', () => setFilter('redes-sociales'));
    document.getElementById('btnFilterWeb').addEventListener('click', () => setFilter('web'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterRedesSociales').dataset.filter = 'redes-sociales';
    document.getElementById('btnFilterWeb').dataset.filter = 'web';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            // If selecting descartada, deselect all others
            if (category === 'descartada' && !isCurrentlySelected) {
                document.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.remove('selected');
                });
            }

            // If selecting any other, deselect descartada
            if (category !== 'descartada' && !isCurrentlySelected) {
                document.querySelector('.option-btn[data-category="descartada"]').classList.remove('selected');
            }

            btn.classList.toggle('selected');

            // Show warning if exceeding recommended limit
            if (!isCurrentlySelected && LIMITS[category]) {
                const stats = getStats();
                const futureCount = stats[category] + 1;
                if (futureCount > LIMITS[category]) {
                    const messages = {
                        impresion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para impresión (se recomiendan ${LIMITS.impresion})`,
                        ampliacion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para ampliación (se recomienda ${LIMITS.ampliacion})`
                    };
                    showToast(messages[category], 'warning');
                }
            }
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigatePhoto('next');
            }
        }
    });

    // Navigation button click handlers
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) {
        btnPrevPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('prev');
        });
    }

    if (btnNextPhoto) {
        btnNextPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('next');
        });
    }

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
