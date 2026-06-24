/* ==========================================================================
   KMS Tour & Travels - JS Interactive Main Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initWhatsAppFloating();
  initPhoneInputsNumericOnly();

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

    // Mobile dropdown toggles click handler
    const dropdownToggles = navMenu.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = toggle.closest(".dropdown");
          if (parent) {
            parent.classList.toggle("active");
            const chevron = toggle.querySelector("i");
            if (chevron) {
              if (parent.classList.contains("active")) {
                chevron.className = "fas fa-chevron-up";
              } else {
                chevron.className = "fas fa-chevron-down";
              }
            }
          }
        }
      });
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

/* Restrict Phone Inputs to digits only */
function initPhoneInputsNumericOnly() {
  const phoneInputs = document.querySelectorAll("input[name='phone']");
  phoneInputs.forEach(input => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
  });
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
      handleInquirySubmission(homeInquiryForm, "", "email");
    });
  }

  // New Hero Plan Journey Form submission
  const heroJourneyForm = document.getElementById("hero-journey-form");
  if (heroJourneyForm) {
    heroJourneyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleInquirySubmission(heroJourneyForm, "", "email");
    });
  }

  // Initialize mobile testimonial carousel
  initTestimonialCarousel();
}

/* Mobile Testimonial Auto-Scroll Carousel */
function initTestimonialCarousel() {
  const grid = document.querySelector(".testimonials-grid");
  const dotsContainer = document.getElementById("testimonial-dots");
  if (!grid || !dotsContainer) return;

  const cards = grid.querySelectorAll(".testimonial-card");
  if (cards.length === 0) return;

  let currentIndex = 0;
  let autoScrollInterval = null;
  let resumeTimeout = null;
  const AUTO_SCROLL_DELAY = 4000; // 4 seconds per slide
  const RESUME_DELAY = 6000; // Resume auto-scroll after 6s of inactivity

  // Create dot indicators
  function buildDots() {
    dotsContainer.innerHTML = "";
    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Go to review ${i + 1}`);
      dot.addEventListener("click", () => {
        goToSlide(i);
        pauseAndResume();
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Update active dot
  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  // Scroll to a specific slide
  function goToSlide(index) {
    currentIndex = index;
    const scrollLeft = cards[index].offsetLeft - grid.offsetLeft;
    grid.scrollTo({ left: scrollLeft, behavior: "smooth" });
    updateDots();
  }

  // Advance to next slide (right to left movement)
  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    goToSlide(currentIndex);
  }

  // Start auto-scrolling
  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(nextSlide, AUTO_SCROLL_DELAY);
  }

  // Stop auto-scrolling
  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  }

  // Pause auto-scroll and resume after delay
  function pauseAndResume() {
    stopAutoScroll();
    if (resumeTimeout) clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(startAutoScroll, RESUME_DELAY);
  }

  // Sync dots on manual scroll (swipe)
  let scrollEndTimer = null;
  grid.addEventListener("scroll", () => {
    if (scrollEndTimer) clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => {
      // Detect which card is most visible
      const scrollLeft = grid.scrollLeft;
      const gridWidth = grid.offsetWidth;
      let closestIndex = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft - grid.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(scrollLeft + gridWidth / 2 - cardCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });
      if (closestIndex !== currentIndex) {
        currentIndex = closestIndex;
        updateDots();
      }
    }, 100);
  });

  // Pause on touch interactions
  grid.addEventListener("touchstart", pauseAndResume, { passive: true });

  // Only activate carousel behavior on mobile
  function checkAndInit() {
    if (window.innerWidth <= 768) {
      buildDots();
      startAutoScroll();
    } else {
      stopAutoScroll();
      dotsContainer.innerHTML = "";
    }
  }

  checkAndInit();
  window.addEventListener("resize", () => {
    checkAndInit();
  });
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
      handleInquirySubmission(detailInquiryForm, pkg.name, "email");
    });
  }
}

/* Contact Page Specific Functions */
function initContactPage() {
  const contactForm = document.getElementById("contact-inquiry-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleInquirySubmission(contactForm, "", "email");
    });
  }
}

/* Inquiry Form Submission Logic (Email) */
function handleInquirySubmission(form, packageName = "", mode = "email") {
  const formData = new FormData(form);
  const name = formData.get("name") || "";

  // Format phone number properly if it already includes country code
  let phoneRaw = formData.get("phone") || "";
  const phone = phoneRaw.startsWith("+") ? phoneRaw : (phoneRaw.startsWith("91") && phoneRaw.length > 10 ? "+" + phoneRaw : "+91 " + phoneRaw);

  const email = formData.get("email") || "";
  const destination = formData.get("destination") || "";
  const travelDate = formData.get("travel_date") || "Not Specified";
  const travelers = formData.get("travelers") || "1";
  const userMessage = formData.get("message") || "";

  // Build inquiry context
  let pkgContext = packageName ? `Package: ${packageName}` : `General Tour Inquiry`;
  if (destination) {
    pkgContext += ` (Destination: ${destination})`;
  }

  // Construct subject and body for Email (mailto)
  const subject = `KMS Tour & Travels Inquiry - ${pkgContext}`;

  // Assemble dynamic details list
  let detailsBlock = `Context: ${pkgContext}
Name: ${name}
Phone: ${phone}`;

  if (destination) {
    detailsBlock += `\nDestination: ${destination}`;
  }
  if (email) {
    detailsBlock += `\nEmail: ${email}`;
  }

  detailsBlock += `\nTravel Date: ${travelDate}
Number of Travelers: ${travelers}`;

  if (userMessage) {
    detailsBlock += `\nCustomer Message: ${userMessage}`;
  }

  const mailBody = `Hello KMS Tour & Travels,

I would like to submit a booking inquiry.

Inquiry details:
-----------------------------------
${detailsBlock}
-----------------------------------

Please provide availability and custom pricing plans.

Thank you.`;

  const originalButton = form.querySelector(".btn-email");
  const originalButtonText = originalButton ? originalButton.innerHTML : "Submit";

  if (originalButton) {
    originalButton.disabled = true;
    originalButton.style.opacity = "0.7";
    originalButton.innerHTML = `<i class="far fa-envelope"></i> Opening Email Client...`;
  }

  setTimeout(() => {
    // Show premium modal popup and trigger email client after 5 seconds
    showSuccessModal(() => {
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(mailBody);
      window.location.href = `mailto:shubhamworkkms@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

      // Reset form & button
      form.reset();
      if (originalButton) {
        originalButton.disabled = false;
        originalButton.style.opacity = "";
        originalButton.innerHTML = originalButtonText;
      }
    });
  }, 800);
}

/* Premium Success Modal Manager (5 seconds stay) */
function showSuccessModal(onComplete) {
  let modal = document.getElementById("custom-success-modal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "custom-success-modal";
    modal.className = "custom-modal-overlay";
    modal.innerHTML = `
      <div class="custom-modal-card">
        <div class="custom-modal-icon">
          <i class="far fa-check-circle"></i>
        </div>
        <h3>Submission Successful</h3>
        <p>Your tour has been submitted successfully. Our team will contact you as soon as possible within 24 hours.</p>
        <div class="custom-modal-timer-bar">
          <div class="timer-progress"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    // Reset timer animation if modal is reused
    const progress = modal.querySelector(".timer-progress");
    if (progress) {
      progress.style.animation = 'none';
      progress.offsetHeight; // trigger reflow
      progress.style.animation = null;
    }
  }

  // Show modal
  modal.classList.add("active");

  // Wait 5 seconds, then dismiss and callback
  setTimeout(() => {
    modal.classList.remove("active");
    // Wait for fadeout transition
    setTimeout(() => {
      onComplete();
    }, 400);
  }, 5000);
}
