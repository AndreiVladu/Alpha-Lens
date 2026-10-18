// CONFIGURAȚIE - Verifică dacă ID-urile sunt cele din contul tău!
const MAIL_CONFIG = {
    USER_KEY: 'Jyu4Yct8HwIZwfX60', 
    MAIL_SERVICE: 'service_uoi2b9c', 
    MAIL_TEMPLATE: 'template_spi0i5u' 
};

// Inițializare EmailJS (scriptul poate fi blocat de ad-blockere)
const emailjsLoaded = typeof emailjs !== 'undefined';
if (emailjsLoaded) {
    emailjs.init(MAIL_CONFIG.USER_KEY);
}

// Selectare elemente din HTML
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoader = submitBtn.querySelector('.btn-loading'); // Am pus 'btn-loading' conform HTML-ului tău

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!emailjsLoaded) {
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.textContent = 'Formularul nu poate fi trimis momentan. Scrie-ne la vladulescuandrei6@gmail.com sau sună la +40 762 309 113.';
        }
        return;
    }

    // Stare de încărcare
    submitBtn.disabled = true;
    if(btnText) btnText.style.display = 'none';
    if(btnLoader) btnLoader.style.display = 'block';

    // Colectare date - Numele variabilelor (stânga) trebuie să fie IDENTICE cu cele din {{ }} de mai sus
    const formData = {
        nume: document.getElementById('nume').value,
        prenume: document.getElementById('prenume').value,
        email: document.getElementById('email').value,
        telefon: document.getElementById('telefon').value,
        data: document.getElementById('data').value,
        locatie: document.getElementById('locatie').value,
        mesaj: document.getElementById('mesaj').value,
        title: "Mesaj Nou Site"
    };

    // Trimitere e-mail
    emailjs.send(MAIL_CONFIG.MAIL_SERVICE, MAIL_CONFIG.MAIL_TEMPLATE, formData)
        .then(function() {
            // SUCCES
            if(btnText) {
                btnText.textContent = 'Mesaj Trimis!';
                btnText.style.display = 'block';
            }
            if(btnLoader) btnLoader.style.display = 'none';
            submitBtn.style.background = '#22c55e'; // Verde succes

            contactForm.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                if(btnText) btnText.textContent = 'Trimite Mesajul';
                submitBtn.style.background = '';
            }, 3000);

        }, function(error) {
            // EROARE
            console.error('EmailJS Error:', error);
            if(btnText) {
                btnText.textContent = 'Eroare! Reîncearcă';
                btnText.style.display = 'block';
            }
            if(btnLoader) btnLoader.style.display = 'none';
            submitBtn.style.background = '#ef4444'; // Roșu eroare

            setTimeout(() => {
                submitBtn.disabled = false;
                if(btnText) btnText.textContent = 'Trimite Mesajul';
                submitBtn.style.background = '';
            }, 3000);
        });
});