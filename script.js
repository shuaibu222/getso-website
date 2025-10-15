document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
    const navLinks = document.querySelector('.nav-links')

    mobileMenuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active')
        this.querySelector('i').classList.toggle('fa-bars')
        this.querySelector('i').classList.toggle('fa-times')
    })

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active')
                mobileMenuToggle.querySelector('i').classList.add('fa-bars')
                mobileMenuToggle.querySelector('i').classList.remove('fa-times')
            }
        })
    })

    // Theme Toggle with Enhanced Logic
    const themeToggle = document.getElementById('themeToggle')
    const themeIcon = themeToggle.querySelector('i')

    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.body.classList.add('dark-mode')
            themeIcon.classList.remove('fa-moon')
            themeIcon.classList.add('fa-sun')
        } else {
            document.body.classList.remove('dark-mode')
            themeIcon.classList.remove('fa-sun')
            themeIcon.classList.add('fa-moon')
        }
    }

    // Toggle theme
    themeToggle.addEventListener('click', function () {
        const isDark = document.body.classList.toggle('dark-mode')

        if (isDark) {
            localStorage.setItem('theme', 'dark')
            themeIcon.classList.remove('fa-moon')
            themeIcon.classList.add('fa-sun')
        } else {
            localStorage.setItem('theme', 'light')
            themeIcon.classList.remove('fa-sun')
            themeIcon.classList.add('fa-moon')
        }
    })

    // Header scroll effect
    const header = document.querySelector('header')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })

    // Lecture tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn')
    const lectureCards = document.querySelectorAll('.lecture-card')

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            tabButtons.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')

            const category = this.getAttribute('data-category')

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

    // Enhanced fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in')

    const fadeInOnScroll = function () {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top
            const elementVisible = 150

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible')
            }
        })
    }

    // Initialize
    initTheme()
    fadeInOnScroll()
    window.addEventListener('scroll', fadeInOnScroll)
})
