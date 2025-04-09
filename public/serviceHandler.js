// Function to get service data from JSON
async function getServiceData(slug) {
    try {
        const response = await fetch('/data/services.json');
        const data = await response.json();
        
        for (const categoryKey in data.services) {
            const category = data.services[categoryKey];
            if (category.items && category.items[slug]) {
                return {
                    ...category.items[slug],
                    category: category.category
                };
            }
        }
        return null;
    } catch (error) {
        console.error('Error loading service data:', error);
        return null;
    }
}

// Function to render service page
async function renderServicePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('service');
    
    if (!slug) {
        window.location.href = '/404.html';
        return;
    }

    const serviceData = await getServiceData(slug);
    if (!serviceData) {
        window.location.href = '/404.html';
        return;
    }

    document.title = `${serviceData.title} - Mandakini Events`;
    
    // Update hero section
    const heroSection = document.querySelector('.service-detail-header');
    if (heroSection) {
        heroSection.style.backgroundImage = `url('${serviceData.heroImage}')`;
        const title = heroSection.querySelector('h1');
        const description = heroSection.querySelector('p');
        if (title) title.textContent = serviceData.title;
        if (description) description.textContent = serviceData.description;
    }

    // Update overview
    const overviewSection = document.querySelector('.service-description');
    if (overviewSection && serviceData.overview) {
        overviewSection.textContent = serviceData.overview;
    }

    // Update features grid
    const featuresGrid = document.querySelector('.features-grid');
    if (featuresGrid && serviceData.features) {
        featuresGrid.innerHTML = serviceData.features.map(feature => `
            <div class="feature-card">
                <div class="flex items-center mb-4">
                    <div class="bg-maroon-100 p-3 rounded-full mr-4">
                        <i class="fas fa-check text-maroon-500"></i>
                    </div>
                    <p class="text-gray-700">${feature}</p>
                </div>
            </div>
        `).join('');
    }

    // Update gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid && serviceData.gallery) {
        galleryGrid.innerHTML = serviceData.gallery.map(image => `
            <img src="${image}" alt="${serviceData.title} Gallery" class="gallery-image">
        `).join('');
    }

    // Update testimonials
    const testimonialsSection = document.querySelector('.testimonials-section > div');
    if (testimonialsSection && serviceData.testimonials) {
        testimonialsSection.innerHTML = serviceData.testimonials.map(testimonial => `
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="text-gray-600 italic mb-4">"${testimonial.text}"</p>
                <div class="flex items-center">
                    <div>
                        <p class="font-semibold">${testimonial.name}</p>
                        <p class="text-sm text-gray-500">${testimonial.company}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update CTA buttons
    const ctaButtons = document.querySelector('.cta-buttons');
    if (ctaButtons) {
        ctaButtons.innerHTML = `
            <a href="/contact.html" class="bg-maroon-600 text-white px-8 py-3 rounded-full hover:bg-maroon-700 transition duration-300 inline-block shine-effect">Contact Us</a>
            ${serviceData.whatsapp ? `<a href="${serviceData.whatsapp}" class="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition duration-300 inline-block shine-effect">WhatsApp</a>` : ''}
        `;
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', renderServicePage);