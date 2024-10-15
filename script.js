const videos = [
    { category: 'short', title: 'Short Video 1', url: 'https://www.youtube.com/shorts/E8Lm9nThOzo', thumbnail: 'https://img.youtube.com/vi/E8Lm9nThOzo/0.jpg' },
    { category: 'long', title: 'Long Video 1', url: 'https://www.youtube.com/watch?v=4f-wYYxTlQw', thumbnail: 'https://img.youtube.com/vi/4f-wYYxTlQw/0.jpg' },
    { category: 'gaming', title: 'Gaming Video 1', url: 'https://www.youtube.com/watch?v=hufPbvepp4U', thumbnail: 'https://img.youtube.com/vi/hufPbvepp4U/0.jpg' },
    { category: 'football', title: 'Football Edit 1', url: 'https://www.youtube.com/shorts/VRZXvxx6o_k', thumbnail: 'https://img.youtube.com/vi/VRZXvxx6o_k/0.jpg' },
    { category: 'ads', title: 'Ad Video 1', url: 'https://www.youtube.com/watch?v=5Od0aOse1wc', thumbnail: 'https://img.youtube.com/vi/5Od0aOse1wc/0.jpg' },
    { category: 'anime', title: 'Anime Video 1', url: 'https://www.youtube.com/watch?v=1zXhFzbQA_w', thumbnail: 'https://img.youtube.com/vi/1zXhFzbQA_w/0.jpg' },
];

function filterVideos(filter) {
    const gallery = document.getElementById('videoGallery');
    gallery.innerHTML = ''; // Clear previous videos

    const filteredVideos = filter === 'all' ? videos : videos.filter(video => video.category === filter);

    filteredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <a href="${video.url}" target="_blank">
                <img src="${video.thumbnail}" alt="${video.title}" width="320" height="180">
                <h3>${video.title}</h3>
            </a>`;
        gallery.appendChild(videoItem);
    });

    // Show all buttons when "All" is clicked
    if (filter === 'all') {
        document.querySelectorAll('.hidden').forEach(button => {
            button.style.display = ''; // Show the hidden buttons
        });
    } else {
        // Hide all other buttons except "All"
        document.querySelectorAll('.filter-buttons button:not(:first-child)').forEach(button => {
            button.style.display = 'none'; // Hide all other buttons
        });
    }
}
// Theme Toggle Functionality
// Select the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Add an event listener for changes to the toggle button
themeToggleButton.addEventListener('change', () => {
    // Toggle the 'inverted' class on the body
    document.body.classList.toggle('inverted');

    // Toggle classes for header and sections
    const header = document.querySelector('header');
    header.classList.toggle('inverted');

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.classList.toggle('inverted');
    }

    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
        portfolioSection.classList.toggle('inverted');
    }

    // Toggle heading colors
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => heading.classList.toggle('inverted'));

    // Toggle video item colors
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => item.classList.toggle('inverted'));
});

// Initial display of all videos (if applicable)
filterVideos('all'); // Assuming you have this function defined elsewhere