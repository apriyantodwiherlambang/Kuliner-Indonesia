document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    if (validateEmail(email)) {
        console.log('Mengirim permintaan dengan email:', email);

        fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => {
            if (response.ok) {
                alert('Terima kasih telah berlangganan!');
            } else {
                console.error('Respons server tidak OK:', response.status);
                alert('Terjadi kesalahan. Mohon coba lagi.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan. Mohon coba lagi.');
        });
    } else {
        alert('Mohon masukkan email yang valid.');
    }

    emailInput.value = '';
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
