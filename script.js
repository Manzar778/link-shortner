document.getElementById('shortenForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const originalUrl = document.getElementById('originalUrl').value;
    const baseUrl = window.location.origin + "/";
    const shortCode = generateShortCode(5);
    const shortUrl = baseUrl + 'wait_please.html#short=' + shortCode;
    const shortenedUrlElement = document.getElementById('shortenedUrl');
    const shortenedUrlContainer = document.getElementById('shortenedUrlContainer');

    // Store the mapping of shortCode to originalUrl in localStorage or an alternative storage method
    localStorage.setItem(shortCode, originalUrl);

    shortenedUrlElement.href = shortUrl;
    shortenedUrlElement.textContent = shortUrl;
    shortenedUrlContainer.classList.remove('d-none');
});

document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    if (hash.startsWith('#short=')) {
        const shortCode = hash.substring(7);
        const originalUrl = localStorage.getItem(shortCode);
        if (originalUrl) {
            const countdownElement = document.getElementById('countdown');
            let countdown = 5;

            const interval = setInterval(function() {
                countdown--;
                countdownElement.textContent = countdown;
                if (countdown === 0) {
                    clearInterval(interval);
                    window.location.href = originalUrl;
                }
            }, 1000);
        } else {
            alert("Invalid short URL");
        }
    }
});

function generateShortCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
