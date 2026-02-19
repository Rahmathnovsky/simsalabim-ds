<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Company Info -->
        <div class="footer-company">
          <a href="#" class="footer-logo">Simsalabim</a>
          <p class="footer-address">
            Jalan Mega Kuningan<br />
            Lot 5.1 12950<br />
            Daerah Khusus Ibukota Jakarta<br />
            Indonesia
          </p>
          <div class="footer-contact-info">
            <div class="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>+62 851-7696-2127</span>
            </div>
            <div class="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>rahmathnovskyn@gmail.com</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links-group">
          <h4 class="footer-heading">{{ t('footer.quickLinks') }}</h4>
          <ul class="footer-links">
            <li><a href="#about">{{ t('footer.aboutUs') }}</a></li>
            <li><a href="#services">{{ t('footer.services') }}</a></li>
            <li><a href="#portfolio">{{ t('footer.projects') }}</a></li>
            <li><a href="#">{{ t('footer.terms') }}</a></li>
            <li><a href="#">{{ t('footer.privacy') }}</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-links-group">
          <h4 class="footer-heading">{{ t('footer.servicesHeading') }}</h4>
          <ul class="footer-links">
            <li><a href="#services">Web Design</a></li>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Product Management</a></li>
            <li><a href="#services">Marketing</a></li>
            <li><a href="#services">Graphic Design</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div class="footer-links-group">
          <h4 class="footer-heading">{{ t('footer.socialHeading') }}</h4>
          <p class="footer-social-desc">{{ t('footer.socialDesc') }}</p>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=100086334228208" target="_blank" class="social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/simsalabim.ds/" target="_blank" class="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/simsalabim-ds-34120a252/" target="_blank" class="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Simsalabim. All Rights Reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">{{ t('footer.privacyShort') }}</a>
          <a href="#">{{ t('footer.termsShort') }}</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useI18n } from '../i18n.js'

export default {
  name: 'FooterSection',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.footer {
  background: var(--color-dark);
  padding: 80px 0 0;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99, 91, 255, 0.3), transparent);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 60px;
}

/* Company */
.footer-logo {
  font-size: 22px;
  font-weight: 800;
  color: var(--color-text-white);
  display: inline-block;
  margin-bottom: 20px;
}

.footer-address {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 24px;
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--color-text-light);
}

.contact-item svg {
  color: var(--color-text-muted);
  flex-shrink: 0;
}

/* Links */
.footer-heading {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-white);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-links a {
  font-size: 14px;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--color-text-white);
}

/* Social */
.footer-social-desc {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 20px;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  transition: var(--transition);
}

.social-link:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-text-white);
  transform: translateY(-2px);
}

/* Bottom */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-bottom p {
  font-size: 13px;
  color: var(--color-text-muted);
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  font-size: 13px;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.footer-bottom-links a:hover {
  color: var(--color-text-light);
}

@media (max-width: 968px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
