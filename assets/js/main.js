/* ==========================================================================
   KMS Tour & Travels - JS Interactive Main Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initWhatsAppFloating();
  
  // Identify current page and run page-specific logic
  const path = window.location.pathname;
  const page = path.split("/").pop();

  if (page === "" || page === "index.html") {
    initHomePage();
  } else if (page === "packages.html") {
    initPackagesPage();
  } else if (page === "package-details.html") {
    initPackageDetailsPage();
  } else if (page === "contact.html") {
    initContactPage();
  }
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = toggleBtn.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.className = "fas fa-times";
        } else {
          icon.className = "fas fa-bars";
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove("active");
        const icon = toggleBtn.querySelector("i");
        if (icon) icon.className = "fas fa-bars";
      }
    });
  }
}

/* WhatsApp Floating Bubble Tooltip / Behavior */
function initWhatsAppFloating() {
  const waBtn = document.querySelector(".floating-whatsapp");
  if (waBtn) {
    waBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const defaultText = encodeURIComponent("Hello KMS Tour & Travels! I am visiting your website and want to check details for Kashmir tour packages.");
      window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${defaultText}`, "_blank");
    });
  }
}

/* Home Page Specific Functions */
function initHomePage() {
  const container = document.getElementById("featured-packages-container");
  if (container && typeof packagesData !== "undefined") {
    // Show first 3 packages as featured
    const featured = packagesData.slice(0, 3);
    container.innerHTML = featured.map(pkg => createPackageCardHtml(pkg)).join("");
  }

  // Home search bar redirect
  const searchBtn = document.getElementById("home-search-btn");
  const searchInput = document.getElementById("home-search-input");
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const q = searchInput.value.trim();
      window.location.href = `packages.html?q=${encodeURIComponent(q)}`;
    });
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const q = searchInput.value.trim();
        window.location.href = `packages.html?q=${encodeURIComponent(q)}`;
      }
    });
  }

  // Home quick inquiry form submission
  const homeInquiryForm = document.getElementById("home-inquiry-form");
  if (homeInquiryForm) {
    homeInquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleInquirySubmission(homeInquiryForm);
    });
  }
}

/* Packages Page Specific Functions */
function initPackagesPage() {
  const container = document.getElementById("all-packages-container");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("package-search-input");
  
  if (!container || typeof packagesData === "undefined") return;

  // Retrieve query param 'q' if redirect from home search
  const urlParams = new URLSearchParams(window.location.search);
  let searchKeyword = urlParams.get("q") || "";
  let activeCategory = "all";

  if (searchInput && searchKeyword) {
    searchInput.value = searchKeyword;
  }

  // Initial render
  renderFilteredPackages();

  // Category buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderFilteredPackages();
    });
  });

  // Search input change
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchKeyword = searchInput.value.trim();
      renderFilteredPackages();
    });
  }

  function renderFilteredPackages() {
    let filtered = packagesData;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(pkg => 
        pkg.category.toLowerCase().includes(activeCategory.toLowerCase())
      );
    }

    // Filter by keyword
    if (searchKeyword) {
      const kw = searchKeyword.toLowerCase();
      filtered = filtered.filter(pkg => 
        pkg.name.toLowerCase().includes(kw) || 
        pkg.overview.toLowerCase().includes(kw) ||
        pkg.placesCovered.some(p => p.toLowerCase().includes(kw))
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center" style="grid-column: 1/-1; padding: 40px 0;">
          <i class="fas fa-search-minus" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 15px;"></i>
          <h3 style="color: var(--primary-color)">No Packages Found</h3>
          <p style="color: var(--text-muted)">Try adjusting your filters or search keywords.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(pkg => createPackageCardHtml(pkg)).join("");
    }
  }
}

/* Helper to render package card */
function createPackageCardHtml(pkg) {
  // Format places covered text
  const placesText = pkg.placesCovered.join(" • ");
  
  // Select badge class
  let badgeClass = "standard";
  if (pkg.category.toLowerCase().includes("budget")) badgeClass = "budget";
  else if (pkg.category.toLowerCase().includes("family")) badgeClass = "family";
  else if (pkg.category.toLowerCase().includes("honeymoon")) badgeClass = "honeymoon";
  else if (pkg.category.toLowerCase().includes("adventure")) badgeClass = "adventure";
  else if (pkg.category.toLowerCase().includes("deluxe")) badgeClass = "deluxe";

  return `
    <div class="package-card">
      <div class="card-image-wrap">
        <span class="badge ${badgeClass} card-badge">${pkg.category}</span>
        <img src="${pkg.image}" alt="${pkg.name}">
        <span class="card-price-badge">₹${pkg.startingPrice.toLocaleString('en-IN')} / Person</span>
      </div>
      <div class="card-body">
        <h3>${pkg.name}</h3>
        <div class="card-meta">
          <span><i class="far fa-clock"></i> ${pkg.duration}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${pkg.placesCovered.length} Destinations</span>
        </div>
        <p class="card-desc">${pkg.overview}</p>
        <p style="font-size: 0.85rem; font-weight: 500; color: var(--primary-color); margin-bottom: 15px;">
          <strong>Covers:</strong> ${placesText}
        </p>
        <div class="card-footer">
          <a href="package-details.html?id=${pkg.id}" class="btn btn-outline">Itinerary Details</a>
          <a href="https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hello KMS Tour & Travels! I want to book: ' + pkg.name)}" target="_blank" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> Book Now</a>
        </div>
      </div>
    </div>
  `;
}

/* Package Details Page Specific Functions */
function initPackageDetailsPage() {
  if (typeof packagesData === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const pkgId = urlParams.get("id");
  const pkg = packagesData.find(p => p.id === pkgId) || packagesData[0]; // fallback to first

  // Set Page Title
  document.title = `${pkg.name} | KMS Tour & Travels`;

  // Render basic details
  const coverImage = document.getElementById("details-cover-image");
  if (coverImage) coverImage.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('${pkg.image}')`;

  const titleNode = document.getElementById("details-title");
  if (titleNode) titleNode.textContent = pkg.name;

  const subtitleNode = document.getElementById("details-subtitle");
  if (subtitleNode) subtitleNode.textContent = pkg.duration + " | " + pkg.placesCovered.join(" → ");

  // Set highlights
  const placesBadge = document.getElementById("places-badge");
  if (placesBadge) placesBadge.textContent = pkg.placesCovered.join(" • ");

  const durationBadge = document.getElementById("duration-badge");
  if (durationBadge) durationBadge.textContent = pkg.duration;

  const priceBadge = document.getElementById("price-badge");
  if (priceBadge) priceBadge.textContent = `₹${pkg.startingPrice.toLocaleString('en-IN')} Per Person`;

  const overviewText = document.getElementById("details-overview-text");
  if (overviewText) overviewText.textContent = pkg.overview;

  // Render Day-Wise Itinerary Accordion
  const itineraryContainer = document.getElementById("itinerary-accordion-container");
  if (itineraryContainer) {
    itineraryContainer.innerHTML = pkg.itinerary.map((day, idx) => {
      const placesPills = day.places.map(p => `<span class="places-pill">${p}</span>`).join("");
      const activeClass = idx === 0 ? "active" : ""; // Open day 1 by default
      return `
        <div class="itinerary-day-card ${activeClass}" data-day="${day.day}">
          <div class="itinerary-day-header">
            <div class="itinerary-day-title">
              <span class="day-number">Day ${day.day}</span>
              <div class="day-title-text">
                <h4>${day.title}</h4>
                ${day.travelTime ? `<span class="day-travel-time"><i class="far fa-compass"></i> ${day.travelTime}</span>` : ""}
              </div>
            </div>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="itinerary-day-content">
            <div class="places-pill-list">
              ${placesPills}
            </div>
            <p>${day.desc}</p>
            <div class="itinerary-stay-badge">
              <i class="fas fa-hotel"></i> Night Stay: <strong>${day.stay}</strong>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Accordion click bindings
    const headers = itineraryContainer.querySelectorAll(".itinerary-day-header");
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const card = header.closest(".itinerary-day-card");
        card.classList.toggle("active");
      });
    });
  }

  // Render Pricing Table
  const pricingTableBody = document.getElementById("pricing-table-body");
  if (pricingTableBody && pkg.prices) {
    pricingTableBody.innerHTML = `
      <tr class="highlighted-row">
        <td><strong>Budget (3 Star Standard)</strong></td>
        <td class="price-cell">₹${pkg.prices.budget ? pkg.prices.budget.toLocaleString('en-IN') : 'N/A'}</td>
        <td>Standard room, breakfast & dinner, base transfers</td>
      </tr>
      <tr>
        <td><strong>Deluxe (3 Star Premium / 4 Star Comfort)</strong></td>
        <td class="price-cell">₹${pkg.prices.deluxe ? pkg.prices.deluxe.toLocaleString('en-IN') : 'N/A'}</td>
        <td>Premium room, breakfast & dinner, higher SUV option</td>
      </tr>
      <tr class="highlighted-row">
        <td><strong>Luxury (5 Star Resorts / Luxury Houseboat)</strong></td>
        <td class="price-cell">₹${pkg.prices.luxury ? pkg.prices.luxury.toLocaleString('en-IN') : 'N/A'}</td>
        <td>Luxury stay, full-service buffet, premium SUV, special services</td>
      </tr>
    `;
  }

  // Render Inclusions / Exclusions
  const inclusionsList = document.getElementById("inclusions-list");
  if (inclusionsList) {
    inclusionsList.innerHTML = pkg.inclusions.map(inc => `
      <li><i class="far fa-check-circle"></i> <span>${inc}</span></li>
    `).join("");
  }

  const exclusionsList = document.getElementById("exclusions-list");
  if (exclusionsList) {
    exclusionsList.innerHTML = pkg.exclusions.map(exc => `
      <li><i class="far fa-times-circle"></i> <span>${exc}</span></li>
    `).join("");
  }

  // Render FAQs
  const faqContainer = document.getElementById("details-faq-container");
  if (faqContainer && pkg.faqs) {
    faqContainer.innerHTML = pkg.faqs.map(faq => `
      <div class="faq-item">
        <div class="faq-question">
          <span>${faq.q}</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join("");

    const faqQuestions = faqContainer.querySelectorAll(".faq-question");
    faqQuestions.forEach(q => {
      q.addEventListener("click", () => {
        const item = q.closest(".faq-item");
        item.classList.toggle("active");
      });
    });
  }

  // Pre-fill sidebar sticky price banner
  const sidebarPrice = document.getElementById("sidebar-starting-price");
  if (sidebarPrice) {
    sidebarPrice.textContent = `₹${pkg.startingPrice.toLocaleString('en-IN')}`;
  }

  // Set up inquiry form for this specific package
  const detailInquiryForm = document.getElementById("detail-inquiry-form");
  if (detailInquiryForm) {
    const messageField = detailInquiryForm.querySelector("textarea[name='message']");
    if (messageField) {
      messageField.value = `Hello, I am interested in inquiring about the "${pkg.name}" (${pkg.duration}). Please share customized quotes for standard, deluxe, and luxury categories.`;
    }

    detailInquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleInquirySubmission(detailInquiryForm, pkg.name);
    });
  }
}

/* Contact Page Specific Functions */
function initContactPage() {
  const contactForm = document.getElementById("contact-inquiry-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleInquirySubmission(contactForm);
    });
  }
}

/* Inquiry Form Submission WhatsApp Redirect Logic */
function handleInquirySubmission(form, packageName = "") {
  const formData = new FormData(form);
  const name = formData.get("name") || "";
  const phone = formData.get("phone") || "";
  const email = formData.get("email") || "";
  const travelDate = formData.get("travel_date") || "Not Specified";
  const travelers = formData.get("travelers") || "1";
  const userMessage = formData.get("message") || "";

  // Build inquiry context
  const pkgContext = packageName ? `Package: ${packageName}` : `General Tour Inquiry`;

  // Construct structured text for WhatsApp
  const textMsg = `Hello KMS Tour & Travels, I would like to submit a booking inquiry.
-----------------------------------
*Inquiry details:*
• *Context:* ${pkgContext}
• *Name:* ${name}
• *Phone:* ${phone}
• *Email:* ${email}
• *Travel Date:* ${travelDate}
• *No of Travelers:* ${travelers}
• *Customer Message:* ${userMessage}
-----------------------------------
Please provide availability and custom pricing plans.`;

  // Create temporary loading/success feedback
  const originalButton = form.querySelector("button[type='submit']");
  const originalButtonText = originalButton.innerHTML;
  
  originalButton.disabled = true;
  originalButton.style.backgroundColor = "var(--accent-color)";
  originalButton.innerHTML = `<i class="fab fa-whatsapp"></i> Redirecting to WhatsApp...`;

  setTimeout(() => {
    // Open WhatsApp in a new tab
    const encodedText = encodeURIComponent(textMsg);
    window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encodedText}`, "_blank");
    
    // Reset form & button
    form.reset();
    originalButton.disabled = false;
    originalButton.style.backgroundColor = "";
    originalButton.innerHTML = originalButtonText;
    
    alert("Inquiry successfully prepared! We are redirecting you to WhatsApp to complete your message to local support.");
  }, 1000);
}
