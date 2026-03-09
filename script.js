const photoData = {
    'tk': { title: 'Masa Kecil Bahagia 🍼', photos: ['tk1.jpeg'] },
    'sd': { title: 'Masa Putih Merah 🎒', photos: ['sd1.jpeg'] },
    'smp': { 
        title: 'Masa Remaja Seru 🏫', 
        photos: ['smp1.jpeg', 'smp2.jpeg', 'smp3.jpeg', 'smp4.jpeg'] 
    },
    'sma': { 
        title: 'Highschool Vibes 🎓', 
        photos: ['sma1.jpeg', 'sma2.jpeg', 'sma3.jpeg', 'sma4.jpeg', 'sma5.jpeg', 'sma6.jpeg'] 
    },
    'uni': { 
        title: 'System Info Era 💻', 
        photos: [
            'uni1.jpeg', 'uni2.jpeg', 'uni3.jpeg', 'uni4.jpeg', 'uni5.jpeg', 
            'uni6.jpeg', 'uni7.jpeg', 'uni8.jpeg', 'uni9.jpeg', 'uni10.jpeg'
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
        img.src = './' + path; // Pakai ./ agar lebih aman di GitHub Pages
        img.alt = "Memory Putri";
        img.onerror = function() { console.log("Gagal muat: " + path); };
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