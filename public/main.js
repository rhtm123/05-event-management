// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

console.log("Hello World")

document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons that should trigger the popup
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        const buttonText = button.textContent.toLowerCase();
        if (buttonText.includes('get details') || 
            buttonText.includes('enquire') || 
            buttonText.includes('download brochure') ||
            buttonText.includes('schedule a visit') ||
            buttonText.includes('view project') ||
            buttonText.includes('contact')) {
            
            // Randomly assign different animation classes
            const animations = [
                'animate-pulse-custom',
                'animate-bounce-custom',
                'animate-shake',
                'animate-scale',
                'animate-glow',
                'btn-animated'
            ];
            
            // Add base classes for all buttons
            button.classList.add('transition-all', 'duration-300');
            
            // Add specific animation class
            // You can either randomly assign animations:
            
            
            // Or assign specific animations based on button type:
            if (buttonText.includes('enquire')) {
                button.classList.add('animate-pulse-custom');
            } else if (buttonText.includes('download')) {
                button.classList.add('animate-pulse-custom');
            } else if (buttonText.includes('schedule')) {
                button.classList.add('animate-pulse-custom');
            } else {
                button.classList.add('animate-pulse-custom');
            }
            
            // Add hover effect for all buttons
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
            });
        }
    });
});


function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => {
                c.classList.remove('active');
                c.style.opacity = '0';
            });

            tab.classList.add('active');
            const content = document.getElementById(tab.dataset.tab);
            content.classList.add('active');
            
            requestAnimationFrame(() => {
                content.style.opacity = '1';
            });
        });
    });
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    function toggleRows(targetId, button) {
        const hiddenRows = document.getElementById(targetId);
        const buttonText = button.querySelector('span');
        const icon = button.querySelector('svg');
        
        if (hiddenRows.classList.contains('hidden')) {
            hiddenRows.classList.remove('hidden');
            buttonText.textContent = 'Show Less';
            icon.style.transform = 'rotate(180deg)';
        } else {
            hiddenRows.classList.add('hidden');
            buttonText.textContent = 'Show More';
            icon.style.transform = 'rotate(0deg)';
        }
    }

    function openEnquiryPopup() {
        document.getElementById('enquiryPopup').classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close enquiry popup
    function closeEnquiryPopup() {
        document.getElementById('enquiryPopup').classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Handle form submission
    function handleEnquirySubmit(event) {
        event.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your enquiry. We will get back to you soon!');
        closeEnquiryPopup();
    }

    // Add click event listeners to all "Get Details" buttons
    document.addEventListener('DOMContentLoaded', function() {
        // Get all buttons that should trigger the popup
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            // Check if the button text contains specific keywords
            const buttonText = button.textContent.toLowerCase();
            if (buttonText.includes('get details') || 
                buttonText.includes('enquire') || 
                buttonText.includes('download brochure') ||
                buttonText.includes('schedule a visit') ||
                buttonText.includes('view project') ||
                buttonText.includes('contact')) {
                button.addEventListener('click', openEnquiryPopup);
            }
        });

        // Close popup when clicking outside
        document.getElementById('enquiryPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closeEnquiryPopup();
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeEnquiryPopup();
            }
        });
    });

    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.trim() === 'Enquire Now') {
            button.addEventListener('click', () => {
                document.getElementById('enquiryPopup').classList.remove('hidden');
            });
        }
    });

    document.getElementById('closePopup').addEventListener('click', () => {
        document.getElementById('enquiryPopup').classList.add('hidden');
    });

    const slider = document.getElementById('portfolioSlider');
    const items = slider.getElementsByClassName('portfolio-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentPosition = 0;
    const itemWidth = 33.333; // Width of each item in percentage
    const maxPosition = (items.length - 3) * itemWidth; // Maximum slide position

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentPosition}%)`;
    }

    function nextSlide() {
        if (currentPosition < maxPosition) {
            currentPosition += itemWidth;
            updateSliderPosition();
        }
    }

    function prevSlide() {
        if (currentPosition > 0) {
            currentPosition -= itemWidth;
            updateSliderPosition();
        }
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Handle responsive behavior
    function handleResize() {
        if (window.innerWidth <= 768) {
            // Mobile view adjustments
            Array.from(items).forEach(item => {
                item.style.flex = '0 0 100%';
            });
            currentPosition = 0;
            updateSliderPosition();
        } else {
            // Desktop view adjustments
            Array.from(items).forEach(item => {
                item.style.flex = '0 0 33.333%';
            });
        }
    }

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);

    document.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('.tab-button');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => {
                    c.classList.remove('active');
                    c.style.opacity = '0';
                });

                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                const content = document.getElementById(tab.dataset.tab);
                content.classList.add('active');
                
                // Trigger reflow for animation
                void content.offsetWidth;
                content.style.opacity = '1';
            });
        });
    });

    // Add this to handle image loading
    const projectImages = document.querySelectorAll('.project-card img');
    projectImages.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Smooth scroll for mobile tab navigation
    const tabNav = document.querySelector('.tab-navigation');
    if (tabNav) {
        let isScrolling = false;
        let startX;
        let scrollLeft;

        tabNav.addEventListener('touchstart', (e) => {
            isScrolling = true;
            startX = e.touches[0].pageX - tabNav.offsetLeft;
            scrollLeft = tabNav.scrollLeft;
        });

        tabNav.addEventListener('touchmove', (e) => {
            if (!isScrolling) return;
            e.preventDefault();
            const x = e.touches[0].pageX - tabNav.offsetLeft;
            const walk = (x - startX) * 2;
            tabNav.scrollLeft = scrollLeft - walk;
        });

        tabNav.addEventListener('touchend', () => {
            isScrolling = false;
        });
    }

    // Active tab indicator position update
    function updateActiveTabIndicator() {
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            const tabNav = document.querySelector('.tab-navigation');
            const activeTabRect = activeTab.getBoundingClientRect();
            const navRect = tabNav.getBoundingClientRect();
            const scrollLeft = activeTabRect.left - navRect.left + tabNav.scrollLeft;
            tabNav.scrollTo({
                left: scrollLeft - (navRect.width - activeTabRect.width) / 2,
                behavior: 'smooth'
            });
        }
    }

    // Call on tab click
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(updateActiveTabIndicator, 100);
        });
    });
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

