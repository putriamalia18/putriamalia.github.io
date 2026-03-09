// Database Foto (Format .JPEG Huruf Kapital)
const photoData = {
    'tk': { title: 'Masa Kecil Bahagia 🍼', photos: ['tk1.JPEG'] },
    'sd': { title: 'Masa Putih Merah 🎒', photos: ['sd1.JPEG'] },
    'smp': { 
        title: 'Masa Remaja Seru 🏫', 
        photos: ['smp1.JPEG', 'smp2.JPEG', 'smp3.JPEG', 'smp4.JPEG'] 
    },
    'sma': { 
        title: 'Highschool Vibes 🎓', 
        photos: ['sma1.JPEG', 'sma2.JPEG', 'sma3.JPEG', 'sma4.JPEG', 'sma5.JPEG', 'sma6.JPEG'] 
    },
    'uni': { 
        title: 'System Info Era 💻', 
        photos: [
            'uni1.JPEG', 'uni2.JPEG', 'uni3.JPEG', 'uni4.JPEG', 'uni5.JPEG', 
            'uni6.JPEG', 'uni7.JPEG', 'uni8.JPEG', 'uni9.JPEG', 'uni10.JPEG'
        ] 
    }
};

function openGallery(stage) {
    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('galleryTitle');
    const grid = document.getElementById('imageGrid');
    
    title.innerText = photoData[stage].title;
    grid.innerHTML = '';
    
    photoData[stage].photos.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = "Memory Putri";
        // Antisipasi jika file tidak ditemukan
        img.onerror = function() { this.style.display='none'; console.log("File tidak ditemukan: " + path); };
        grid.appendChild(img);
    });
    
    modal.style.display = 'flex';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('galleryModal')) {
        closeGallery();
    }
};