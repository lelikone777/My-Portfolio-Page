const btnDarkMode = document.querySelector('.dark-mode-button');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    btnDarkMode.classList.add('dark-mode-button--active');
    document.body.classList.add('dark');
}

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-button--active');
    document.body.classList.add('dark');
} else if  (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark-mode-button--active');
    document.body.classList.remove('dark');
}


window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add('dark-mode-button--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarkMode.classList.remove('dark-mode-button--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }

})

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-button--active');
    const isDark = document.body.classList.toggle('dark');
    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}


