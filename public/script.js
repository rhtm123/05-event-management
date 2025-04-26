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

// Function to close enquiry popup
function closeEnquiryPopup() {
    document.getElementById('enquiryPopup').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Handle form submission
async function handleEnquirySubmit(event) {
    event.preventDefault();
    let name = document.getElementById('name').value 
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile').value
    let organization = document.getElementById('organization').value
    let location = document.getElementById('location').value
    let service = document.getElementById('service').value
    let requirements = document.getElementById('requirements').value
    let domain = window.location.origin;
    console.log(name,email, mobile,organization,location, service,requirements, domain);

    let html = `<h3>New Inquiry</h3>
    <p>You have a new contact inquiry:</p>
    <ul>
        <li><strong>Name:</strong> <span>${name}</span></li>
        <li><strong>Email:</strong> <span>${email}</span></li>
        <li><strong>Mobile:</strong> <span>${mobile}</span></li>
        <li><strong>Organization:</strong> <span>${organization}</span></li>
        <li><strong>Location:</strong> <span>${location}</span></li>
        <li><strong>Service:</strong> <span>${service}</span></li>
        <li><strong>Requirement:</strong> <span>${requirements}</span></li>
        <li><strong>Source:</strong> <span>${domain}</span></li>
    </ul>
    <p>Thank you.</p>
    `

    // let html = "<h1>New Contact</h1>"


    let encodedHtml = encodeURIComponent(html);
    let url = `https://gt.thelearningsetu.com/api/extra_api/contact?domain=${domain}&name=${name}&html_content=${encodedHtml}`;

    alert('Thank you for your enquiry. We will get back to you soon!');
    closeEnquiryPopup();
    // let url1 = "https://gt.thelearningsetu.com/api/page/pages?page=1&page_size=10"
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);

    document.getElementById('name').value 
    document.getElementById('email').value
    document.getElementById('mobile').value
    document.getElementById('organization').value
    document.getElementById('location').value
    document.getElementById('service').value
    document.getElementById('requirements').value

    // Add your form submission logic here
    
}


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