// Menu Toggle Functions
const sideMenu = document.getElementById('sideMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const desktopMenuBtn = document.getElementById('desktopMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function openMenu() {
    sideMenu.classList.remove('translate-x-full');
}

function closeMenu() {
    sideMenu.classList.add('translate-x-full');
}

mobileMenuBtn.addEventListener('click', openMenu);
desktopMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target) && 
        !desktopMenuBtn.contains(e.target)) {
        closeMenu();
    }
});






// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Function to open modal
    function openModal() {
        if (modal) {
            modal.style.display = 'block';
            modal.classList.add('show');
        }
    }
    
    // Function to close modal
    function closeModalFunc() {
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
        }
    }
    
    // Open modal on page load after 3 seconds
    setTimeout(openModal, 3000);
    
    // Open modal only for specific buttons
    document.addEventListener('click', function(e) {
        console.log('Click detected. Target:', e.target); // Debug log
        
        // List of classes that should trigger the modal
        const triggerClasses = [
            'contact-trigger',
            'btn-pulse',
            'shine-effect',
            'form-submit'
        ];
        
        // Check if the clicked element or its parent has any of the trigger classes
        const shouldTrigger = triggerClasses.some(className => 
            e.target.classList.contains(className) || 
            e.target.closest(`.${className}`)
        );

        const clickedLink = e.target.closest('a'); // Find the nearest ancestor link
        console.log('Closest link found:', clickedLink); // Debug log
        const linkHref = clickedLink?.getAttribute('href');
        console.log('Link href:', linkHref); // Debug log
        
        // Exclude navigation, footer links, service links, and the main contact page link
        const isExcluded = 
            e.target.closest('nav') || 
            e.target.closest('footer') ||
            linkHref?.includes('service.html') || // Check href of the link
            linkHref === '/contact.html'; // Allow direct navigation to /contact.html
        
        console.log('Should Trigger Modal?:', shouldTrigger); // Debug log
        console.log('Is Navigation Excluded?:', isExcluded); // Debug log

        if (shouldTrigger && !isExcluded) {
            console.log('Preventing default navigation and opening modal...'); // Debug log
            e.preventDefault();
            openModal();
        }
    });
    
    // Close modal when clicking close button
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // Handle form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your inquiry. We will contact you soon!');
            closeModalFunc();
        });
    }
}); 