// Enhanced Mobile Navigation
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
    const mainNav = document.querySelector('.main-nav')
    const navLinks = document.querySelectorAll('.nav-links li a')

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active')
        this.querySelector('i').classList.toggle('fa-bars')
        this.querySelector('i').classList.toggle('fa-times')
    })

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992) {
                mainNav.classList.remove('active')
                mobileMenuToggle.querySelector('i').classList.add('fa-bars')
                mobileMenuToggle.querySelector('i').classList.remove('fa-times')
            }
        })
    })

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mainNav.classList.remove('active')
            mobileMenuToggle.querySelector('i').classList.add('fa-bars')
            mobileMenuToggle.querySelector('i').classList.remove('fa-times')
        }
    })

    // Language switcher functionality
    const languageButtons = document.querySelectorAll('.language-switcher button')
    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
            languageButtons.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            // Here you would add logic to change the language
        })
    })

    // Lecture tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn')
    const lectureCards = document.querySelectorAll('.lecture-card')

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'))
            // Add active class to clicked button
            this.classList.add('active')

            const category = this.getAttribute('data-category')

            // Filter lecture cards
            lectureCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block'
                } else {
                    card.style.display = 'none'
                }
            })
        })
    })

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const targetId = this.getAttribute('href')
            const targetElement = document.querySelector(targetId)

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth',
                })
            }
        })
    })

    // Add animation to elements when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll(
            '.bio-content, .book-card, .lecture-card, .article-card'
        )

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1'
                element.style.transform = 'translateY(0)'
            }
        })
    }

    // Set initial state for animation
    const animatedElements = document.querySelectorAll(
        '.bio-content, .book-card, .lecture-card, .article-card'
    )
    animatedElements.forEach(element => {
        element.style.opacity = '0'
        element.style.transform = 'translateY(20px)'
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    })

    // Run on load and scroll
    animateOnScroll()
    window.addEventListener('scroll', animateOnScroll)
})
