// Array of meme templates
const templates = [
    { name: 'Drake', image: 'https://i.imgflip.com/30b1gx.jpg' },
    { name: 'Distracted Boyfriend', image: 'https://i.imgflip.com/1ur9b0.jpg' },
    { name: 'Two Buttons', image: 'https://i.imgflip.com/3sbdmm.jpg' },
    { name: 'Change My Mind', image: 'https://i.imgflip.com/24y43o.jpg' }
];

// Display templates on page load
window.onload = () => {
    const templateContainer = document.getElementById('templates');
    templates.forEach(template => {
        const templateDiv = document.createElement('div');
        templateDiv.classList.add('template');
        const templateImg = document.createElement('img');
        templateImg.src = template.image;
        templateImg.alt = template.name;
        templateImg.addEventListener('click', () => {
            selectTemplate(template);
        });
        templateDiv.appendChild(templateImg);
        templateContainer.appendChild(templateDiv);
    });
};

// Select template and display in form
function selectTemplate(template) {
    const templateSelect = document.getElementById('template-select');
    const topText = document.getElementById('top-text');
    const bottomText = document.getElementById('bottom-text');
    const memeImg = document.getElementById('meme-img');
    templateSelect.value = template.name;
    memeImg.src = template.image;
    topText.value = '';
    bottomText.value = '';
}

// Generate meme
const memeForm = document.getElementById('meme-form');
memeForm.addEventListener('submit', event => {
    event.preventDefault();
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const memeImg = document.getElementById('meme-img');
    memeImg.src = `https://api.memegen.link/images/${memeForm.template.value}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.jpg`;
});