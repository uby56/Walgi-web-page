const list = document.querySelector('.list');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Replace with your own image URLs
const items = [
    {
        img: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Mountain Landscape',
        description: 'A beautiful view of the mountains.'
    },
    {
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Forest Path',
        description: 'A serene path through the woods.'
    },
    {
        img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Lakeside',
        description: 'A calm and peaceful lakeside view.'
    },
    // Add more items as needed
];

let currentIndex = 0;

function createCarouselItems() {
    list.innerHTML = ''; // Clear existing items
    items.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('item');
        if (index === currentIndex) {
            itemEl.classList.add('active');
        }

        const imgEl = document.createElement('img');
        imgEl.src = item.img;
        imgEl.alt = item.title;

        const contentEl = document.createElement('div');
        contentEl.classList.add('content');

        const titleEl = document.createElement('h2');
        titleEl.textContent = item.title;

        const descEl = document.createElement('p');
        descEl.textContent = item.description;

        contentEl.appendChild(titleEl);
        contentEl.appendChild(descEl);
        itemEl.appendChild(imgEl);
        itemEl.appendChild(contentEl);
        list.appendChild(itemEl);
    });
}

function updateCarousel() {
    const itemWidth = list.querySelector('.item').clientWidth;
    const offset = -currentIndex * itemWidth;
    list.style.transform = `translateX(${offset}px)`;

    const allItems = list.querySelectorAll('.item');
    allItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

// Initial setup
createCarouselItems();
updateCarousel();