// Check if user is logged in
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = sessionStorage.getItem("adminLoggedIn")

  if (!isLoggedIn && !window.location.href.includes("login.html")) {
    window.location.href = "login.html"
    return
  }

  // Initialize admin dashboard
  if (window.location.href.includes("dashboard.html")) {
    initDashboard()
  }

  // Initialize theme
  initTheme()
})

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem("adminTheme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode")
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode")
      const isDarkMode = document.body.classList.contains("dark-mode")
      localStorage.setItem("adminTheme", isDarkMode ? "dark" : "light")
    })
  }
}

// Logout functionality
document.getElementById("logout-btn")?.addEventListener("click", () => {
  sessionStorage.removeItem("adminLoggedIn")
  window.location.href = "login.html"
})

// Initialize dashboard
function initDashboard() {
  // Tab navigation
  const tabLinks = document.querySelectorAll(".sidebar-nav a")
  const tabContents = document.querySelectorAll(".tab-content")

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const tabId = this.getAttribute("data-tab")

      // Update active tab link
      tabLinks.forEach((link) => {
        link.parentElement.classList.remove("active")
      })
      this.parentElement.classList.add("active")

      // Show active tab content
      tabContents.forEach((content) => {
        content.classList.remove("active")
      })
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Load services
  loadServices()

  // Load gallery
  loadGallery()

  // Load translations
  loadTranslations("en")

  // Services count
  document.getElementById("services-count").textContent = services.length

  // Gallery count
  document.getElementById("gallery-count").textContent = galleryItems.length

  // Add service button
  document.getElementById("add-service-btn").addEventListener("click", () => {
    document.getElementById("service-form-title").textContent = "Add New Service"
    document.getElementById("service-id").value = ""
    // document.getElementById("service-title").value = ""
    // document.getElementById("service-description").value = ""
    document.getElementById("service-price").value = ""
    document.getElementById("service-duration").value = ""
    // document.getElementById("service-image").value = ""

    document.getElementById("service-form-container").style.display = "block"
  })

  // Cancel service form
  document.getElementById("cancel-service-btn").addEventListener("click", () => {
    document.getElementById("service-form-container").style.display = "none"
  })

  // Service form submission
  document.getElementById("service-form").addEventListener("submit", (e) => {
    e.preventDefault()

    const serviceId = document.getElementById("service-id").value
    const serviceData = {
      title: document.getElementById("service-title-en").value,
      description: document.getElementById("service-description-en").value,
      price: document.getElementById("service-price").value,
      duration: document.getElementById("service-duration").value,
      image: document.getElementById("service-image").value,
    }

    if (serviceId) {
      // Update existing service
      const index = services.findIndex((service) => service.id == serviceId)
      if (index !== -1) {
        services[index] = { ...services[index], ...serviceData }
      }
    } else {
      // Add new service
      const newId = services.length > 0 ? Math.max(...services.map((service) => service.id)) + 1 : 1
      services.push({ id: newId, ...serviceData })
    }

    // Update UI
    loadServices()
    document.getElementById("services-count").textContent = services.length

    // Hide form
    document.getElementById("service-form-container").style.display = "none"
  })

  // Add gallery button
  document.getElementById("add-gallery-btn").addEventListener("click", () => {
    document.getElementById("gallery-form-title").textContent = "Add New Image"
    document.getElementById("gallery-id").value = ""
    document.getElementById("gallery-title").value = ""
    document.getElementById("gallery-image").value = ""

    document.getElementById("gallery-form-container").style.display = "block"
  })

  // Cancel gallery form
  document.getElementById("cancel-gallery-btn").addEventListener("click", () => {
    document.getElementById("gallery-form-container").style.display = "none"
  })

  // Gallery form submission
  document.getElementById("gallery-form").addEventListener("submit", (e) => {
    e.preventDefault()

    const galleryId = document.getElementById("gallery-id").value
    const galleryData = {
      title: document.getElementById("gallery-title").value,
      image: document.getElementById("gallery-image").value,
    }

    if (galleryId) {
      // Update existing gallery item
      const index = galleryItems.findIndex((item) => item.id == galleryId)
      if (index !== -1) {
        galleryItems[index] = { ...galleryItems[index], ...galleryData }
      }
    } else {
      // Add new gallery item
      const newId = galleryItems.length > 0 ? Math.max(...galleryItems.map((item) => item.id)) + 1 : 1
      galleryItems.push({ id: newId, ...galleryData })
    }

    // Update UI
    loadGallery()
    document.getElementById("gallery-count").textContent = galleryItems.length

    // Hide form
    document.getElementById("gallery-form-container").style.display = "none"
  })

  // Language tabs
  document.querySelectorAll(".language-tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const langCode = this.getAttribute("data-lang-code")

      // Update active tab
      document.querySelectorAll(".language-tab-btn").forEach((btn) => {
        btn.classList.remove("active")
      })
      this.classList.add("active")

      // Load translations
      loadTranslations(langCode)
    })
  })

  // Save translations
  document.getElementById("save-translations-btn").addEventListener("click", () => {
    const activeLangTab = document.querySelector(".language-tab-btn.active")
    const langCode = activeLangTab.getAttribute("data-lang-code")

    // In a real application, you would save the translations to a database
    alert(`Translations for ${langCode} saved successfully!`)
  })

  // Settings form
  document.getElementById("settings-form").addEventListener("submit", (e) => {
    e.preventDefault()

    // In a real application, you would save the settings to a database
    alert("Settings saved successfully!")
  })
}

// Sample data
const services = [
  {
    id: 1,
    title: "Traditional Thai Massage",
    description:
      "Experience the ancient healing art of Thai massage, combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
    price: "$80",
    duration: "60 min",
    image: "../images/service-1.jpg",
  },
  {
    id: 2,
    title: "Thai Herbal Compress",
    description:
      "A unique therapy using heated herbal compresses to release tension and promote healing through the medicinal properties of Thai herbs.",
    price: "$95",
    duration: "75 min",
    image: "../images/service-2.jpg",
  },
  {
    id: 3,
    title: "Foot Reflexology",
    description:
      "Based on the principle that specific points on the feet correspond to organs and systems, this massage promotes overall health.",
    price: "$60",
    duration: "45 min",
    image: "../images/service-3.jpg",
  },
  {
    id: 4,
    title: "Thai Oil Massage",
    description:
      "A perfect blend of traditional Thai massage techniques with the use of aromatic oils to nourish the skin and relax the mind.",
    price: "$90",
    duration: "60 min",
    image: "../images/service-4.jpg",
  },
  {
    id: 5,
    title: "Thai Aromatherapy",
    description:
      "Combines the therapeutic properties of essential oils with gentle massage techniques to balance the body and mind.",
    price: "$100",
    duration: "90 min",
    image: "../images/service-5.jpg",
  },
  {
    id: 6,
    title: "Thai Head & Shoulder Massage",
    description:
      "Focused on relieving tension in the upper body, this massage is perfect for those suffering from stress and computer-related strain.",
    price: "$50",
    duration: "30 min",
    image: "../images/service-6.jpg",
  },
]

const galleryItems = [
  {
    id: 1,
    title: "Serene Treatment Room",
    image: "../images/gallery-1.jpg",
  },
  {
    id: 2,
    title: "Traditional Thai Massage Session",
    image: "../images/gallery-2.jpg",
  },
  {
    id: 3,
    title: "Herbal Compress Preparation",
    image: "../images/gallery-3.jpg",
  },
  {
    id: 4,
    title: "Relaxation Area",
    image: "../images/gallery-4.jpg",
  },
  {
    id: 5,
    title: "Thai Tea Service",
    image: "../images/gallery-5.jpg",
  },
  {
    id: 6,
    title: "Spa Entrance",
    image: "../images/gallery-6.jpg",
  },
]

// Translations sample
const translations = {
  en: {
    "nav-home": "Home",
    "nav-services": "Services",
    "hero-title": "Experience Authentic Thai Massage",
    // More translations would be here
  },
  th: {
    "nav-home": "หน้าแรก",
    "nav-services": "บริการ",
    "hero-title": "สัมผัสประสบการณ์นวดแผนไทยแท้",
    // More translations would be here
  },
  de: {
    "nav-home": "Startseite",
    "nav-services": "Dienstleistungen",
    "hero-title": "Erleben Sie authentische Thai-Massage",
    // More translations would be here
  },
}

// Load services into admin list
function loadServices() {
  const servicesList = document.getElementById("services-list")
  if (!servicesList) return

  servicesList.innerHTML = ""

  services.forEach((service) => {
    const listItem = document.createElement("div")
    listItem.className = "list-item"
    listItem.innerHTML = `
            <div class="list-item-content">
                <div class="list-item-image">
                    <img src="${service.image}" alt="${service.title}" onerror="this.src='../images/placeholder.jpg'">
                </div>
                <div class="list-item-text">
                    <h4>${service.title}</h4>
                    <p>${service.price} | ${service.duration}</p>
                </div>
            </div>
            <div class="list-item-actions">
                <button class="btn-icon edit-service" data-id="${service.id}"><i class="fas fa-edit"></i></button>
                <button class="btn-icon delete delete-service" data-id="${service.id}"><i class="fas fa-trash"></i></button>
            </div>
        `
    servicesList.appendChild(listItem)
  })

  // Add event listeners to edit and delete buttons
  document.querySelectorAll(".edit-service").forEach((btn) => {
    btn.addEventListener("click", function () {
      const serviceId = this.getAttribute("data-id")
      editService(serviceId)
    })
  })

  document.querySelectorAll(".delete-service").forEach((btn) => {
    btn.addEventListener("click", function () {
      const serviceId = this.getAttribute("data-id")
      deleteService(serviceId)
    })
  })
}

// Load gallery into admin list
function loadGallery() {
  const galleryList = document.getElementById("gallery-list")
  if (!galleryList) return

  galleryList.innerHTML = ""

  galleryItems.forEach((item) => {
    const listItem = document.createElement("div")
    listItem.className = "list-item"
    listItem.innerHTML = `
            <div class="list-item-content">
                <div class="list-item-image">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='../images/placeholder.jpg'">
                </div>
                <div class="list-item-text">
                    <h4>${item.title}</h4>
                </div>
            </div>
            <div class="list-item-actions">
                <button class="btn-icon edit-gallery" data-id="${item.id}"><i class="fas fa-edit"></i></button>
                <button class="btn-icon delete delete-gallery" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `
    galleryList.appendChild(listItem)
  })

  // Add event listeners to edit and delete buttons
  document.querySelectorAll(".edit-gallery").forEach((btn) => {
    btn.addEventListener("click", function () {
      const galleryId = this.getAttribute("data-id")
      editGallery(galleryId)
    })
  })

  document.querySelectorAll(".delete-gallery").forEach((btn) => {
    btn.addEventListener("click", function () {
      const galleryId = this.getAttribute("data-id")
      deleteGallery(galleryId)
    })
  })
}

// Load translations
function loadTranslations(langCode) {
  const translationsContainer = document.getElementById("translations-container")
  if (!translationsContainer) return

  const categories = {
    navigation: ["nav-home", "nav-services", "nav-about", "nav-gallery", "nav-contact"],
    hero: ["hero-title", "hero-subtitle", "hero-cta"],
    services: ["services-title", "services-subtitle"],
    about: ["about-title", "about-subtitle", "about-history-title", "about-history-text"],
    contact: ["contact-title", "contact-subtitle", "contact-form-name", "contact-form-email"],
    footer: ["footer-tagline", "footer-newsletter", "footer-copyright"],
  }

  let html = ""

  Object.entries(categories).forEach(([category, keys]) => {
    html += `
      <div class="translation-section">
        <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
        <div class="translation-grid">
          ${keys
            .map(
              (key) => `
            <div class="translation-item">
              <div class="translation-key">${key}</div>
              <input type="text" value="${translations[langCode][key] || ""}" 
                     data-key="${key}" class="translation-input">
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `
  })

  translationsContainer.innerHTML = html
}

// Edit service
function editService(id) {
  const service = services.find((service) => service.id == id)
  if (!service) return

  document.getElementById("service-form-title").textContent = "Edit Service"
  document.getElementById("service-id").value = service.id
  document.getElementById("service-title-en").value = service.title
  document.getElementById("service-description-en").value = service.description
  document.getElementById("service-price").value = service.price
  document.getElementById("service-duration").value = service.duration
  document.getElementById("service-image").value = service.image

  document.getElementById("service-form-container").style.display = "block"
}

// Delete service
function deleteService(id) {
  if (confirm("Are you sure you want to delete this service?")) {
    const index = services.findIndex((service) => service.id == id)
    if (index !== -1) {
      services.splice(index, 1)
      loadServices()
      document.getElementById("services-count").textContent = services.length
    }
  }
}

// Edit gallery item
function editGallery(id) {
  const item = galleryItems.find((item) => item.id == id)
  if (!item) return

  document.getElementById("gallery-form-title").textContent = "Edit Gallery Item"
  document.getElementById("gallery-id").value = item.id
  document.getElementById("gallery-title").value = item.title
  document.getElementById("gallery-image").value = item.image

  document.getElementById("gallery-form-container").style.display = "block"
}

// Delete gallery item
function deleteGallery(id) {
  if (confirm("Are you sure you want to delete this gallery item?")) {
    const index = galleryItems.findIndex((item) => item.id == id)
    if (index !== -1) {
      galleryItems.splice(index, 1)
      loadGallery()
      document.getElementById("gallery-count").textContent = galleryItems.length
    }
  }
}

// Add multilingual service management
function initServiceForm() {
  const serviceForm = document.getElementById("service-form")
  if (!serviceForm) return

  serviceForm.innerHTML = `
    <div class="service-languages">
      <div class="service-language">
        <h4>English</h4>
        <div class="form-group">
          <label for="service-title-en">Title</label>
          <input type="text" id="service-title-en" required>
        </div>
        <div class="form-group">
          <label for="service-description-en">Description</label>
          <textarea id="service-description-en" rows="3" required></textarea>
        </div>
      </div>
      <div class="service-language">
        <h4>Thai</h4>
        <div class="form-group">
          <label for="service-title-th">ชื่อบริการ</label>
          <input type="text" id="service-title-th" required>
        </div>
        <div class="form-group">
          <label for="service-description-th">รายละเอียด</label>
          <textarea id="service-description-th" rows="3" required></textarea>
        </div>
      </div>
      <div class="service-language">
        <h4>German</h4>
        <div class="form-group">
          <label for="service-title-de">Titel</label>
          <input type="text" id="service-title-de" required>
        </div>
        <div class="form-group">
          <label for="service-description-de">Beschreibung</label>
          <textarea id="service-description-de" rows="3" required></textarea>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="service-price">Price</label>
      <input type="text" id="service-price" required>
    </div>
    <div class="form-group">
      <label for="service-duration">Duration</label>
      <input type="text" id="service-duration" required>
    </div>
    <div class="form-group">
      <label for="service-image">Service Image URL</label>
      <input type="url" id="service-image" placeholder="https://example.com/service.jpg" required>
      <div class="image-url-preview" id="service-image-preview">
        <img src="../images/placeholder.jpg" alt="Service preview">
      </div>
    </div>
    <input type="hidden" id="service-id">
    <div class="form-buttons">
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" id="cancel-service-btn" class="btn btn-secondary">Cancel</button>
    </div>
  `

  // Initialize service image URL preview
  const serviceImageInput = document.getElementById("service-image")
  const serviceImagePreview = document.getElementById("service-image-preview")

  serviceImageInput.addEventListener("input", function () {
    serviceImagePreview.querySelector("img").src = this.value || "../images/placeholder.jpg"
  })
}

// Enhanced settings management
function initSettingsForm() {
  const settingsForm = document.getElementById("settings-form")
  if (!settingsForm) return

  settingsForm.innerHTML = `
    <div class="settings-section">
      <h3>Branding</h3>
      <div class="form-group">
        <label for="site-logo">Logo URL</label>
        <input type="url" id="site-logo" placeholder="https://example.com/logo.png" value="../images/logo.png">
        <div class="image-url-preview" id="logo-preview">
          <img src="../images/logo.png" alt="Logo preview">
        </div>
      </div>
      <div class="form-group">
        <label for="site-favicon">Favicon URL</label>
        <input type="url" id="site-favicon" placeholder="https://example.com/favicon.ico" value="../images/favicon.ico">
      </div>
    </div>

    <div class="settings-section">
      <h3>Hero Section</h3>
      <div class="form-group">
        <label for="hero-background">Hero Background Image URL</label>
        <input type="url" id="hero-background" placeholder="https://example.com/hero.jpg" value="../images/hero.jpg">
        <div class="image-url-preview" id="hero-preview">
          <img src="../images/hero.jpg" alt="Hero preview">
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h3>Analytics</h3>
      <div class="form-group">
        <label for="google-analytics">Google Analytics Tracking ID</label>
        <input type="text" id="google-analytics" placeholder="G-XXXXXXXXXX or UA-XXXXXXXX-X">
        <p class="form-help">Enter your Google Analytics tracking ID to enable analytics on your website.</p>
      </div>
    </div>

    <div class="settings-section">
      <h3>Contact Information</h3>
      <div class="form-group">
        <label for="contact-address">Address</label>
        <input type="text" id="contact-address" value="123 Lotus Lane, Bangkok, Thailand">
      </div>
      <div class="form-group">
        <label for="contact-phone">Phone</label>
        <input type="text" id="contact-phone" value="+66 2 123 4567">
      </div>
      <div class="form-group">
        <label for="contact-email">Email</label>
        <input type="email" id="contact-email" value="info@lotusthai.com">
      </div>
      <div class="form-group">
        <label for="contact-hours">Business Hours</label>
        <input type="text" id="contact-hours" value="Monday - Sunday: 9:00 AM - 8:00 PM">
      </div>
    </div>

    <div class="settings-section">
      <h3>Social Media</h3>
      <div class="form-group">
        <label for="social-facebook">Facebook URL</label>
        <input type="url" id="social-facebook" value="https://facebook.com/lotusthai">
      </div>
      <div class="form-group">
        <label for="social-instagram">Instagram URL</label>
        <input type="url" id="social-instagram" value="https://instagram.com/lotusthai">
      </div>
      <div class="form-group">
        <label for="social-twitter">Twitter URL</label>
        <input type="url" id="social-twitter" value="https://twitter.com/lotusthai">
      </div>
    </div>

    <div class="form-buttons">
      <button type="submit" class="btn btn-primary">Save Settings</button>
    </div>
  `

  // Initialize image URL previews
  ;["site-logo", "hero-background"].forEach((id) => {
    const input = document.getElementById(id)
    const preview = document.getElementById(id === "site-logo" ? "logo-preview" : "hero-preview")

    // Initial preview
    preview.querySelector("img").src = input.value

    // Update preview when URL changes
    input.addEventListener("input", function () {
      preview.querySelector("img").src = this.value
    })
  })
}

// Initialize gallery form with URL-based image
function initGalleryForm() {
  // Initialize gallery image URL preview
  const galleryImageInput = document.getElementById("gallery-image")
  const galleryImagePreview = document.getElementById("gallery-image-preview")

  if (galleryImageInput && galleryImagePreview) {
    galleryImageInput.addEventListener("input", function () {
      galleryImagePreview.querySelector("img").src = this.value || "../images/placeholder.jpg"
    })
  }
}

// Save settings with Google Analytics
function saveSettings() {
  // Get Google Analytics ID
  const gaId = document.getElementById("google-analytics").value

  // Save to localStorage for persistence
  if (gaId) {
    localStorage.setItem("googleAnalyticsId", gaId)
  }

  // In a real application, you would save all settings to a database
  alert("Settings saved successfully!")
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = sessionStorage.getItem("adminLoggedIn")

  if (!isLoggedIn && !window.location.href.includes("login.html")) {
    window.location.href = "login.html"
    return
  }

  if (window.location.href.includes("dashboard.html")) {
    initServiceForm()
    initSettingsForm()
    initGalleryForm()
    loadTranslations("en")

    // Load Google Analytics ID from localStorage if available
    const gaId = localStorage.getItem("googleAnalyticsId")
    if (gaId && document.getElementById("google-analytics")) {
      document.getElementById("google-analytics").value = gaId
    }

    // Add event listener for settings form
    const settingsForm = document.getElementById("settings-form")
    if (settingsForm) {
      settingsForm.addEventListener("submit", (e) => {
        e.preventDefault()
        saveSettings()
      })
    }
  }
})

