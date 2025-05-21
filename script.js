// Text Content Modification
document.getElementById('text-changer').addEventListener('click', function() {
    const textElement = document.getElementById('dynamic-text');
    const texts = [
        "Text successfully changed!",
        "JavaScript is working!",
        "Content updated dynamically",
        "Hello World!",
        "Final text variation"
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    textElement.textContent = texts[randomIndex];
});

// CSS Style Modification
document.getElementById('style-changer').addEventListener('click', function() {
    const styleBox = document.getElementById('style-box');
    styleBox.classList.toggle('highlight');
    
    // Additional inline style modification
    if (styleBox.classList.contains('highlight')) {
        styleBox.style.border = "2px solid #4CAF50";
    } else {
        styleBox.style.border = "none";
    }
});

// Element Addition/Removal
document.getElementById('element-toggler').addEventListener('click', function() {
    const container = document.getElementById('element-container');
    const existingElement = container.querySelector('.dynamic-element');
    
    if (existingElement) {
        existingElement.remove();
    } else {
        const newElement = document.createElement('p');
        newElement.classList.add('dynamic-element');
        newElement.textContent = "New dynamically added element!";
        container.appendChild(newElement);
    }
});
