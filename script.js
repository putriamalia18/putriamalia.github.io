// 1. Fungsi Scroll Halus Navigasi
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Update Menu Aktif saat di-Scroll
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) {
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

// 3. Fungsi Galeri Journey
function showGallery(title, images) {
    const grid = document.getElementById('image-grid');
    const galleryTitle = document.getElementById('gallery-title');
    const instruction = document.getElementById('instruction');

    galleryTitle.innerText = "Kenangan Masa " + title;
    if(instruction) instruction.style.display = "none";
    grid.innerHTML = "";
    
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Foto " + title;
        img.onerror = function() { 
            this.src = 'https://via.placeholder.com/300x250?text=Foto+Belum+Ada'; 
        };
        grid.appendChild(img);
    });

    document.getElementById('gallery-box').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
}
// --- FUNGSI JAM DIGITAL ---
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('digital-clock').textContent = timeString;
}

// Jalankan fungsi setiap 1 detik
setInterval(updateClock, 1000);
updateClock(); // Panggil sekali di awal agar tidak menunggu 1 detik
// Fungsi untuk Membuka Galeri Prestasi
function showAchieveGallery() {
    const achieveBox = document.getElementById('achieve-box');
    const achieveCard = document.getElementById('achieve-card');
    
    // Munculkan box galeri dengan animasi smooth
    achieveBox.style.display = 'block';
    
    // Otomatis scroll ke bagian galeri agar user langsung melihat fotonya
    achieveBox.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });

    // Opsional: Ubah teks card setelah diklik
    achieveCard.innerHTML = "<p><i class='fas fa-check-circle' style='color: #25D366;'></i> Menampilkan 6 koleksi prestasi terbaik.</p>";
}