// 1. Fungsi Jam Digital
function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    if (clockElement) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}
setInterval(updateClock, 1000);
updateClock();

// 2. Fungsi Galeri Journey
function showGallery(title, images) {
    const grid = document.getElementById('image-grid');
    const gTitle = document.getElementById('gallery-title');
    const gBox = document.getElementById('gallery-box');
    const instr = document.getElementById('instruction');

    gTitle.innerText = "Kenangan Masa " + title;
    if(instr) instr.style.display = "none";
    gBox.style.display = "block";
    grid.innerHTML = "";
    
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.onerror = function() { this.src = 'https://via.placeholder.com/300x250?text=Foto+Proses+Upload'; };
        grid.appendChild(img);
    });

    gBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 3. Fungsi Galeri Prestasi
function showAchieveGallery() {
    document.getElementById('achieve-box').style.display = 'block';
    document.getElementById('achieve-card').innerHTML = "<p><i class='fas fa-check-circle' style='color: #25D366;'></i> Menampilkan koleksi prestasi terbaik.</p>";
    document.getElementById('achieve-box').scrollIntoView({ behavior: 'smooth' });
}

// 4. Update Menu Aktif saat Scroll
window.addEventListener('scroll', () => {
    let current = "";
    document.querySelectorAll('section').forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
