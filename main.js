const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
    sidebar.style.transform = sidebar.style.transform === 'translateX(0px)' ? 'translateX(-250px)' : 'translateX(0px)';
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
}

function closeSidebar() {
    sidebar.style.transform = 'translateX(-250px)';
    overlay.style.display = 'none';
}
