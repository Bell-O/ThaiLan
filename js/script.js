// DOM Elements
const header = document.getElementById("header")
const themeToggle = document.getElementById("theme-toggle")
const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")
const languageSelect = document.getElementById("language-select")
const navLinks = document.querySelectorAll(".nav-menu a, .mobile-menu a")
const contactForm = document.getElementById("contact-form")
const newsletterForm = document.getElementById("newsletter-form")

// Sample Data
const services = [
  {
    id: 1,
    title: "Traditional Thai Massage",
    description:
      "Experience the ancient healing art of Thai massage, combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
    price: "$80",
    duration: "60 min",
    image: "images/service-1.jpg",
  },
  {
    id: 2,
    title: "Thai Herbal Compress",
    description:
      "A unique therapy using heated herbal compresses to release tension and promote healing through the medicinal properties of Thai herbs.",
    price: "$95",
    duration: "75 min",
    image: "images/service-2.jpg",
  },
  {
    id: 3,
    title: "Foot Reflexology",
    description:
      "Based on the principle that specific points on the feet correspond to organs and systems, this massage promotes overall health.",
    price: "$60",
    duration: "45 min",
    image: "images/service-3.jpg",
  },
  {
    id: 4,
    title: "Thai Oil Massage",
    description:
      "A perfect blend of traditional Thai massage techniques with the use of aromatic oils to nourish the skin and relax the mind.",
    price: "$90",
    duration: "60 min",
    image: "images/service-4.jpg",
  },
  {
    id: 5,
    title: "Thai Aromatherapy",
    description:
      "Combines the therapeutic properties of essential oils with gentle massage techniques to balance the body and mind.",
    price: "$100",
    duration: "90 min",
    image: "images/service-5.jpg",
  },
  {
    id: 6,
    title: "Thai Head & Shoulder Massage",
    description:
      "Focused on relieving tension in the upper body, this massage is perfect for those suffering from stress and computer-related strain.",
    price: "$50",
    duration: "30 min",
    image: "images/service-6.jpg",
  },
]

const galleryItems = [
  {
    id: 1,
    title: "Serene Treatment Room",
    image: "images/gallery-1.jpg",
  },
  {
    id: 2,
    title: "Traditional Thai Massage Session",
    image: "images/gallery-2.jpg",
  },
  {
    id: 3,
    title: "Herbal Compress Preparation",
    image: "images/gallery-3.jpg",
  },
  {
    id: 4,
    title: "Relaxation Area",
    image: "images/gallery-4.jpg",
  },
  {
    id: 5,
    title: "Thai Tea Service",
    image: "images/gallery-5.jpg",
  },
  {
    id: 6,
    title: "Spa Entrance",
    image: "images/gallery-6.jpg",
  },
]

// Translations
const translations = {
  en: {
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-about": "About",
    "nav-gallery": "Gallery",
    "nav-contact": "Contact",
    "hero-title": "Experience Authentic Thai Massage",
    "hero-subtitle": "Ancient healing traditions in a modern sanctuary",
    "hero-cta": "Discover Our Services",
    "services-title": "Our Services",
    "services-subtitle": "Discover our range of traditional Thai massage therapies",
    "about-title": "About Thai Massage",
    "about-subtitle": "A centuries-old practice for modern wellness",
    "about-history-title": "Ancient Healing Tradition",
    "about-history-text":
      "Thai massage originated over 2,500 years ago in India and made its way to Thailand, where it was influenced by traditional Chinese medicine. This ancient healing art combines acupressure, Indian Ayurvedic principles, and assisted yoga postures to create a comprehensive practice that treats the entire body and mind as a single, integrated unit.",
    "about-benefits-title": "Benefits of Thai Massage",
    "benefit-1-title": "Stress Reduction",
    "benefit-1-text": "Reduces stress and anxiety",
    "benefit-2-title": "Improved Circulation",
    "benefit-2-text": "Enhances blood and energy flow",
    "benefit-3-title": "Energy Boost",
    "benefit-3-text": "Increases vitality and energy",
    "benefit-4-title": "Balance",
    "benefit-4-text": "Balances the body's energy",
    "gallery-title": "Our Gallery",
    "gallery-subtitle": "Experience the serene atmosphere of our spa",
    "contact-title": "Contact Us",
    "contact-subtitle": "Book your appointment or ask us anything",
    "contact-name": "Name",
    "contact-email": "Email",
    "contact-phone": "Phone",
    "contact-service": "Service",
    "contact-select-service": "Select a service",
    "contact-message": "Message",
    "contact-submit": "Send Message",
    "contact-address-title": "Address",
    "contact-address": "123 Lotus Lane, Bangkok, Thailand",
    "contact-phone-title": "Phone",
    "contact-email-title": "Email",
    "contact-hours-title": "Hours",
    "contact-hours": "Monday - Sunday: 9:00 AM - 8:00 PM",
    "footer-tagline": "Experience the art of traditional Thai healing",
    "footer-quick-links": "Quick Links",
    "footer-newsletter": "Newsletter",
    "footer-newsletter-text": "Subscribe to receive special offers and updates",
    "footer-subscribe": "Subscribe",
    "footer-copyright": "© 2025 Lotus Thai Massage & Spa. All rights reserved.",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms of Service",
  },
  th: {
    "nav-home": "หน้าแรก",
    "nav-services": "บริการ",
    "nav-about": "เกี่ยวกับเรา",
    "nav-gallery": "แกลเลอรี่",
    "nav-contact": "ติดต่อ",
    "hero-title": "สัมผัสประสบการณ์นวดแผนไทยแท้",
    "hero-subtitle": "ศาสตร์การรักษาโบราณในสถานที่ทันสมัย",
    "hero-cta": "ค้นพบบริการของเรา",
    "services-title": "บริการของเรา",
    "services-subtitle": "ค้นพบบริการนวดแผนไทยที่หลากหลายของเรา",
    "about-title": "เกี่ยวกับนวดแผนไทย",
    "about-subtitle": "การปฏิบัติที่มีอายุหลายศตวรรษสำหรับสุขภาพสมัยใหม่",
    "about-history-title": "ประเพณีการรักษาโบราณ",
    "about-history-text":
      "นวดแผนไทยมีต้นกำเนิดเมื่อกว่า 2,500 ปีที่แล้วในอินเดียและเดินทางมาถึงประเทศไทย ซึ่งได้รับอิทธิพลจากการแพทย์แผนจีน ศิลปะการรักษาโบราณนี้ผสมผสานการกดจุด หลักการอายุรเวทของอินเดีย และท่าโยคะที่ช่วยเหลือเพื่อสร้างการปฏิบัติที่ครอบคลุมซึ่งรักษาทั้งร่างกายและจิตใจเป็นหนึ่งเดียว",
    "about-benefits-title": "ประโยชน์ของนวดแผนไทย",
    "benefit-1-title": "ลดความเครียด",
    "benefit-1-text": "ลดความเครียดและความวิตกกังวล",
    "benefit-2-title": "ปรับปรุงการไหลเวียน",
    "benefit-2-text": "เพิ่มการไหลเวียนของเลือดและพลังงาน",
    "benefit-3-title": "เพิ่มพลังงาน",
    "benefit-3-text": "เพิ่มความมีชีวิตชีวาและพลังงาน",
    "benefit-4-title": "สมดุล",
    "benefit-4-text": "สร้างสมดุลให้กับพลังงานในร่างกาย",
    "gallery-title": "แกลเลอรี่ของเรา",
    "gallery-subtitle": "สัมผัสบรรยากาศที่สงบของสปาของเรา",
    "contact-title": "ติดต่อเรา",
    "contact-subtitle": "จองนัดหมายหรือถามเราได้ทุกอย่าง",
    "contact-name": "ชื่อ",
    "contact-email": "อีเมล",
    "contact-phone": "โทรศัพท์",
    "contact-service": "บริการ",
    "contact-select-service": "เลือกบริการ",
    "contact-message": "ข้อความ",
    "contact-submit": "ส่งข้อความ",
    "contact-address-title": "ที่อยู่",
    "contact-address": "123 ซอยดอกบัว, กรุงเทพฯ, ประเทศไทย",
    "contact-phone-title": "โทรศัพท์",
    "contact-email-title": "อีเมล",
    "contact-hours-title": "เวลาทำการ",
    "contact-hours": "วันจันทร์ - วันอาทิตย์: 9:00 น. - 20:00 น.",
    "footer-tagline": "สัมผัสศิลปะการรักษาแบบไทยโบราณ",
    "footer-quick-links": "ลิงก์ด่วน",
    "footer-newsletter": "จดหมายข่าว",
    "footer-newsletter-text": "สมัครรับข้อเสนอพิเศษและการอัปเดต",
    "footer-subscribe": "สมัคร",
    "footer-copyright": "© 2025 นวดแผนไทยและสปาดอกบัว สงวนลิขสิทธิ์ทั้งหมด",
    "footer-privacy": "นโยบายความเป็นส่วนตัว",
    "footer-terms": "เงื่อนไขการให้บริการ",
  },
  de: {
    "nav-home": "Startseite",
    "nav-services": "Dienstleistungen",
    "nav-about": "Über uns",
    "nav-gallery": "Galerie",
    "nav-contact": "Kontakt",
    "hero-title": "Erleben Sie authentische Thai-Massage",
    "hero-subtitle": "Alte Heiltraditionen in einem modernen Zufluchtsort",
    "hero-cta": "Entdecken Sie unsere Dienstleistungen",
    "services-title": "Unsere Dienstleistungen",
    "services-subtitle": "Entdecken Sie unsere Auswahl an traditionellen Thai-Massage-Therapien",
    "about-title": "Über Thai-Massage",
    "about-subtitle": "Eine jahrhundertealte Praxis für modernes Wohlbefinden",
    "about-history-title": "Alte Heilungstradition",
    "about-history-text":
      "Die Thai-Massage entstand vor über 2.500 Jahren in Indien und gelangte nach Thailand, wo sie von der traditionellen chinesischen Medizin beeinflusst wurde. Diese alte Heilkunst kombiniert Akupressur, indische ayurvedische Prinzipien und unterstützte Yoga-Positionen, um eine umfassende Praxis zu schaffen, die den gesamten Körper und Geist als eine einzige, integrierte Einheit behandelt.",
    "about-benefits-title": "Vorteile der Thai-Massage",
    "benefit-1-title": "Stressabbau",
    "benefit-1-text": "Reduziert Stress und Angstzustände",
    "benefit-2-title": "Verbesserte Durchblutung",
    "benefit-2-text": "Verbessert Blut- und Energiefluss",
    "benefit-3-title": "Energieschub",
    "benefit-3-text": "Steigert Vitalität und Energie",
    "benefit-4-title": "Balance",
    "benefit-4-text": "Balanciert die Energie des Körpers",
    "gallery-title": "Unsere Galerie",
    "gallery-subtitle": "Erleben Sie die ruhige Atmosphäre unseres Spas",
    "contact-title": "Kontaktieren Sie uns",
    "contact-subtitle": "Buchen Sie Ihren Termin oder fragen Sie uns alles",
    "contact-name": "Name",
    "contact-email": "E-Mail",
    "contact-phone": "Telefon",
    "contact-service": "Dienstleistung",
    "contact-select-service": "Wählen Sie eine Dienstleistung",
    "contact-message": "Nachricht",
    "contact-submit": "Nachricht senden",
    "contact-address-title": "Adresse",
    "contact-address": "123 Lotusweg, Bangkok, Thailand",
    "contact-phone-title": "Telefon",
    "contact-email-title": "E-Mail",
    "contact-hours-title": "Öffnungszeiten",
    "contact-hours": "Montag - Sonntag: 9:00 Uhr - 20:00 Uhr",
    "footer-tagline": "Erleben Sie die Kunst der traditionellen Thai-Heilung",
    "footer-quick-links": "Schnelllinks",
    "footer-newsletter": "Newsletter",
    "footer-newsletter-text": "Abonnieren Sie, um Sonderangebote und Updates zu erhalten",
    "footer-subscribe": "Abonnieren",
    "footer-copyright": "© 2025 Lotus Thai Massage & Spa. Alle Rechte vorbehalten.",
    "footer-privacy": "Datenschutzrichtlinie",
    "footer-terms": "Nutzungsbedingungen",
  },
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Set current language
  let currentLang = "en"

  // Initialize services
  renderServices()

  // Initialize gallery
  renderGallery()

  // Initialize service options in contact form
  updateServiceOptions()

  // Apply translations
  applyTranslations(currentLang)

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light")

    // Update navigation text color when toggling dark mode
    updateNavTextColors()
  })

  // Function to update navigation text colors based on theme
  function updateNavTextColors() {
    const isDarkMode = document.body.classList.contains("dark-mode")
    const navLinks = document.querySelectorAll(".nav-menu a, .mobile-menu a")

    navLinks.forEach((link) => {
      link.style.color = isDarkMode ? "var(--light)" : "var(--dark)"
    })
  }

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode")
    // Update navigation text colors on initial load
    updateNavTextColors()
  }

  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", function () {
    this.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking a link
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuToggle.classList.remove("active")
      mobileMenu.classList.remove("active")
    })
  })

  // Active nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Language selector
  languageSelect.addEventListener("change", function () {
    currentLang = this.value
    applyTranslations(currentLang)
    localStorage.setItem("language", currentLang)
  })

  // Check for saved language preference
  const savedLanguage = localStorage.getItem("language")
  if (savedLanguage) {
    languageSelect.value = savedLanguage
    currentLang = savedLanguage
    applyTranslations(currentLang)
  }

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      alert("Thank you for your message! We will get back to you soon.")
      this.reset()
    })
  }

  // Newsletter form submission
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      alert("Thank you for subscribing to our newsletter!")
      this.reset()
    })
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })
})

// Render services in the services section
function renderServices() {
  const servicesContainer = document.getElementById("services-container")
  if (!servicesContainer) return

  servicesContainer.innerHTML = ""

  services.forEach((service) => {
    const serviceCard = document.createElement("div")
    serviceCard.className = "service-card"
    serviceCard.innerHTML = `
      <div class="service-image">
        <img src="${service.image}" alt="${service.title}" onerror="this.src='images/placeholder.jpg'">
      </div>
      <div class="service-content">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <div class="service-meta">
          <span class="service-price">${service.price}</span>
          <span class="service-duration">${service.duration}</span>
        </div>
      </div>
    `
    servicesContainer.appendChild(serviceCard)
  })
}

// Render gallery in the gallery section
function renderGallery() {
  const galleryContainer = document.getElementById("gallery-container")
  if (!galleryContainer) return

  galleryContainer.innerHTML = ""

  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("div")
    galleryItem.className = "gallery-item"
    galleryItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" onerror="this.src='images/placeholder.jpg'">
      <div class="gallery-caption">
        <h4>${item.title}</h4>
      </div>
    `
    galleryContainer.appendChild(galleryItem)
  })
}

// Update service options in contact form
function updateServiceOptions() {
  const serviceSelect = document.getElementById("service")
  if (!serviceSelect) return

  // Clear existing options except the first one
  while (serviceSelect.options.length > 1) {
    serviceSelect.remove(1)
  }

  // Add service options
  services.forEach((service) => {
    const option = document.createElement("option")
    option.value = service.id
    option.textContent = service.title
    serviceSelect.appendChild(option)
  })
}

// Apply translations to the page
function applyTranslations(langCode) {
  const langData = translations[langCode]

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang")
    if (langData[key]) {
      element.textContent = langData[key]
    }
  })
}

// Function to update Google Analytics tracking ID
function updateGoogleAnalytics(trackingId) {
  if (!trackingId) return

  // Update the tracking ID in the gtag config
  window.gtag("config", trackingId)

  // You could also store this in localStorage for persistence
  localStorage.setItem("googleAnalyticsId", trackingId)
}

// Check for stored Google Analytics ID on page load
document.addEventListener("DOMContentLoaded", () => {
  const storedGAId = localStorage.getItem("googleAnalyticsId")
  if (storedGAId) {
    updateGoogleAnalytics(storedGAId)
  }
})

