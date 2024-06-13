document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    const gallery = document.getElementById('gallery');
    surpriseMessage.classList.toggle('hidden');
    gallery.classList.toggle('hidden');
    
    if (!surpriseMessage.classList.contains('hidden')) {
        surpriseMessage.classList.add('fadeIn');
    } else {
        surpriseMessage.classList.remove('fadeIn');
    }
    
    if (!gallery.classList.contains('hidden')) {
        gallery.classList.add('fadeIn');
    } else {
        gallery.classList.remove('fadeIn');
    }
});

