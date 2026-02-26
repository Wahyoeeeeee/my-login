// Inisialisasi Lucide Icons
lucide.createIcons();

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const forgotForm = document.getElementById('forgot-form');

const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const switchText = document.getElementById('switch-text');
const backBtn = document.getElementById('back-btn');

// Toggle Password Visibility
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            this.innerHTML = '<i data-lucide="eye-off"></i>';
        } else {
            input.type = 'password';
            this.innerHTML = '<i data-lucide="eye"></i>';
        }
        lucide.createIcons();
    });
});

function switchForm(type) {
    // Sembunyikan semua form
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    forgotForm.classList.add('hidden');
    backBtn.classList.add('hidden');

    if (type === 'login') {
        loginForm.classList.remove('hidden');
        authTitle.innerText = 'Selamat Datang';
        authSubtitle.innerText = 'Masuk ke akun Anda';
        switchText.innerHTML = 'Belum punya akun? <button class="link-btn" id="to-register">Daftar sekarang</button>';
        attachSwitchEvents();
    } 
    else if (type === 'register') {
        registerForm.classList.remove('hidden');
        authTitle.innerText = 'Daftar Akun';
        authSubtitle.innerText = 'Buat akun baru Anda';
        switchText.innerHTML = 'Sudah punya akun? <button class="link-btn" id="to-login">Masuk</button>';
        attachSwitchEvents();
    } 
    else if (type === 'forgot') {
        forgotForm.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        authTitle.innerText = 'Lupa Password';
        authSubtitle.innerText = 'Kami akan mengirim link reset password';
        switchText.innerHTML = 'Ingat password? <button class="link-btn" id="to-login">Masuk</button>';
        attachSwitchEvents();
    }
}

function attachSwitchEvents() {
    const btnReg = document.getElementById('to-register');
    const btnLog = document.getElementById('to-login');
    const btnForgot = document.getElementById('to-forgot');

    if(btnReg) btnReg.onclick = () => switchForm('register');
    if(btnLog) btnLog.onclick = () => switchForm('login');
    if(btnForgot) btnForgot.onclick = () => switchForm('forgot');
}

backBtn.onclick = () => switchForm('login');

function handleGoogleLogin() {
    alert('Login dengan Google - Demo Mode');
}

// Initial attach
attachSwitchEvents();

// Form Submit Handlers
loginForm.onsubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...");
};

registerForm.onsubmit = (e) => {
    e.preventDefault();
    console.log("Registering...");
};