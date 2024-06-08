document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Client-side validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Username and Password are required.';
        errorMessage.style.display = 'block';
        return;
    }

    // Simulate authentication process
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful');
        // Redirect to restricted content or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});
