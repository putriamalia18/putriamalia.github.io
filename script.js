// 1. Scroll Halus Navigasi
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// 2. Jam Digital
function updateClock() {
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ":" + 
                       now.getMinutes().toString().padStart(2, '0') + ":" + 
                       now.getSeconds().toString().padStart(2, '0');
    document.getElementById('digital-clock').textContent = timeString;
}
setInterval(updateClock, 1000); 
updateClock();

// 3. Galeri Journey
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
        img.onerror = function() { this.src = 'https://via.placeholder.com/300x250?text=Cek+Nama+File'; };
        grid.appendChild(img);
    });

    gBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 4. Galeri Prestasi
function showAchieveGallery() {
    document.getElementById('achieve-box').style.display = 'block';
    document.getElementById('achieve-card').innerHTML = "<p><i class='fas fa-check-circle' style='color: #25D366;'></i> Menampilkan 6 koleksi prestasi terbaik.</p>";
    document.getElementById('achieve-box').scrollIntoView({ behavior: 'smooth' });
}

// 5. Update Active Menu saat Scroll
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