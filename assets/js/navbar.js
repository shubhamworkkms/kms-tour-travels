const navbarHTML = `
  <!-- Top Contact Bar -->
  <div class="top-bar">
    <div class="container flex justify-between align-center">
      <div class="contact-info">
        <a href="tel:+919876543210"><i class="fas fa-phone-alt"></i> +91 98765 43210</a>
        <a href="mailto:info@kmstoures.com"><i class="far fa-envelope"></i> info@kmstoures.com</a>
      </div>
      <div class="contact-info">
        <span><i class="fas fa-map-marker-alt"></i> Srinagar, Kashmir</span>
      </div>
    </div>
  </div>

  <!-- Header & Navbar -->
  <header>
    <div class="container navbar flex justify-between align-center">
      <a href="index.html" class="logo">
        <img src="assets/image/LOGO FINAL.png" alt="KMS Tour &amp; Travels">
        <!-- <div class="logo-text-wrap">
          <span class="logo-title">KMS Tour & Travels</span>
          <span class="logo-subtitle">Discover Paradise on Earth</span>
        </div> -->
      </a>

      <nav class="nav-menu">
        <a href="index.html">Home</a>
        <a href="packages.html">Tour Packages</a>
        <a href="destinations.html">Destinations</a>
        <div class="dropdown">
          <a href="#" class="dropdown-toggle">Updates <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="gallery.html">Gallery</a>
            <a href="blog.html">Blog</a>
          </div>
        </div>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </nav>

      <div class="nav-actions align-center">
        <a href="contact.html" class="btn btn-outline">Get Quote</a>
        <a href="https://api.whatsapp.com/send?phone=919876543210" target="_blank" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
      </div>

      <button class="menu-toggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>
`;

class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = navbarHTML;
    
    // Automatically set the active class on the correct nav link based on the URL
    const currentPath = window.location.pathname;
    let currentPage = currentPath.split("/").pop();
    if (!currentPage) currentPage = "index.html"; // default to home

    const navLinks = this.querySelectorAll(".nav-menu a:not(.dropdown-toggle)");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}

customElements.define('app-navbar', AppNavbar);
