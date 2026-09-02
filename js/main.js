;(function () {
  'use strict'

  /* ── Nav scroll effect ── */
  const nav = document.getElementById('nav')
  let lastScroll = 0

  function handleNavScroll() {
    const scrollY = window.scrollY
    if (scrollY > 80) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
    lastScroll = scrollY
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true })
  handleNavScroll()

  /* ── Mobile nav toggle ── */
  const toggle = document.getElementById('navToggle')
  const links = document.getElementById('navLinks')

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open')
    })

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        links.classList.remove('open')
      }
    })

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open')
      })
    })
  }

  /* ── Fade-in on scroll ── */
  const fadeElements = document.querySelectorAll('.fade-in')

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    fadeElements.forEach(function (el) {
      observer.observe(el)
    })
  }
})()
