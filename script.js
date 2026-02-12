function toggle(id) {
    const content = document.getElementById(id);
    content.classList.toggle("show");

    const media = content.querySelector("audio, video");
    if (media && !content.classList.contains("show")) {
        media.pause();
        media.currentTime = 0;
    }
}
