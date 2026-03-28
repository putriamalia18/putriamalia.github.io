// 1. Digital Clock
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('digital-clock');
    if(clock) clock.textContent = now.toLocaleTimeString('id-ID');
}
setInterval(updateClock, 1000);
updateClock();

// 2. Smooth Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// 3. Highlight Menu on Scroll
window.addEventListener('scroll', () => {
    let current = "";
    document.querySelectorAll('section').forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});

// 4. Perbaikan Fungsi Galeri Journey
function showGallery(title, images) {
    const grid = document.getElementById('image-grid');
    const box = document.getElementById('gallery-box');
    const galleryTitle = document.getElementById('gallery-title');
    const instr = document.getElementById('instruction');
    
    box.style.display = "block";
    galleryTitle.innerText = "Kenangan: " + title;
    if(instr) instr.style.display = "none";
    grid.innerHTML = "";
    
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.onerror = () => img.src = 'https://via.placeholder.com/150?text=No+Photo';
        grid.appendChild(img);
    });

    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 5. Galeri Prestasi
function showAchieveGallery() {
    const box = document.getElementById('achieve-box');
    const card = document.getElementById('achieve-card');
    box.style.display = 'block';
    card.innerHTML = "<p><i class='fas fa-check-circle' style='color: #25D366;'></i> Koleksi Prestasi Putri Amalia</p>";
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
}