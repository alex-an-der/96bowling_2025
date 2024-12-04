let sidebartoggle = document.querySelector('.sidebar-toggle-bttn');
sidebartoggle.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('active');
});