document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dyslexia-toggle');
    const body = document.body;

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            body.classList.toggle('dyslexia-friendly');

            if (body.classList.contains('dyslexia-friendly')) {
                localStorage.setItem('dyslexiaFriendly', 'true');
            } else {
                localStorage.setItem('dyslexiaFriendly', 'false');
            }
        });
    }

    if (localStorage.getItem('dyslexiaFriendly') === 'true') {
        body.classList.add('dyslexia-friendly');
    }
});
