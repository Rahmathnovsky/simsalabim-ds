<template>
  <header class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container nav-container">
      <a href="#" class="nav-logo" @click.prevent="scrollToTop">
        <span class="logo-text">Simsalabim</span>
      </a>

      <nav class="nav-links" :class="{ active: menuOpen }">
        <a href="#about" @click="closeMenu" class="nav-link">{{ t('nav.about') }}</a>
        <a href="#services" @click="closeMenu" class="nav-link">{{ t('nav.services') }}</a>
        <a href="#portfolio" @click="closeMenu" class="nav-link">{{ t('nav.projects') }}</a>
        <a href="#team" @click="closeMenu" class="nav-link">{{ t('nav.team') }}</a>
      </nav>

      <div class="nav-actions">
        <a
          href="https://api.whatsapp.com/send?phone=6285176962127&text=Halo,%20Simsalabim!"
          target="_blank"
          class="btn-primary nav-cta"
        >
          {{ t('nav.contactUs') }}
          <span class="arrow-icon">→</span>
        </a>
        <button class="lang-toggle" @click="toggleLocale" :title="locale.locale === 'en' ? 'Switch to Indonesian' : 'Switch to English'">
          <span class="lang-flag" v-if="locale.locale === 'en'">
            <svg viewBox="0 0 36 36" width="20" height="20"><rect fill="#B22234" width="36" height="36" rx="4"/><rect fill="white" y="2.77" width="36" height="2.77"/><rect fill="white" y="8.31" width="36" height="2.77"/><rect fill="white" y="13.85" width="36" height="2.77"/><rect fill="white" y="19.38" width="36" height="2.77"/><rect fill="white" y="24.92" width="36" height="2.77"/><rect fill="white" y="30.46" width="36" height="2.77"/><rect fill="#3C3B6E" width="14.4" height="19.38" rx="2"/></svg>
          </span>
          <span class="lang-flag" v-else>
            <svg viewBox="0 0 36 36" width="20" height="20"><rect fill="#DC1F26" width="36" height="18" rx="4" ry="4"/><rect fill="white" y="18" width="36" height="18" rx="4" ry="4"/><rect fill="#DC1F26" width="36" height="18"/></svg>
          </span>
          <span class="lang-code">{{ locale.locale === 'en' ? 'EN' : 'ID' }}</span>
        </button>
      </div>

      <div class="mobile-actions">
        <button class="lang-toggle lang-toggle-mobile" @click="toggleLocale">
          <span class="lang-flag" v-if="locale.locale === 'en'">
            <svg viewBox="0 0 36 36" width="18" height="18"><rect fill="#B22234" width="36" height="36" rx="4"/><rect fill="white" y="2.77" width="36" height="2.77"/><rect fill="white" y="8.31" width="36" height="2.77"/><rect fill="white" y="13.85" width="36" height="2.77"/><rect fill="white" y="19.38" width="36" height="2.77"/><rect fill="white" y="24.92" width="36" height="2.77"/><rect fill="white" y="30.46" width="36" height="2.77"/><rect fill="#3C3B6E" width="14.4" height="19.38" rx="2"/></svg>
          </span>
          <span class="lang-flag" v-else>
            <svg viewBox="0 0 36 36" width="18" height="18"><rect fill="#DC1F26" width="36" height="18" rx="4" ry="4"/><rect fill="white" y="18" width="36" height="18" rx="4" ry="4"/><rect fill="#DC1F26" width="36" height="18"/></svg>
          </span>
          <span class="lang-code">{{ locale.locale === 'en' ? 'EN' : 'ID' }}</span>
        </button>
        <button class="hamburger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { useI18n } from '../i18n.js'

export default {
  name: 'NavBar',
  setup() {
    const { t, locale, toggleLocale } = useI18n()
    return { t, locale, toggleLocale }
  },
  data() {
    return {
      isScrolled: false,
      menuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      document.body.style.overflow = this.menuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.menuOpen = false
      document.body.style.overflow = ''
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.closeMenu()
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(10, 37, 64, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 12px 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1001;
}

.logo-text {
  font-size: 22px;
  font-weight: 800;
  color: var(--color-text-white);
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-link {
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-text-white);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-cta {
  padding: 10px 22px;
  font-size: 14px;
}

/* Language Toggle */
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.85);
}

.lang-toggle:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(99, 91, 255, 0.4);
}

.lang-flag {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.lang-flag svg {
  border-radius: 3px;
  display: block;
}

.lang-code {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--color-text-white);
}

/* Mobile Actions */
.mobile-actions {
  display: none;
  align-items: center;
  gap: 12px;
  z-index: 1001;
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  z-index: 1001;
  padding: 4px;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: var(--color-text-white);
  border-radius: 2px;
  transition: var(--transition);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translateY(5px) translateX(5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-5px) translateX(5px);
}

/* Mobile */
@media (max-width: 768px) {
  .mobile-actions {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 37, 64, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .nav-links.active {
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    font-size: 24px;
    font-weight: 600;
  }

  .nav-actions {
    display: none;
  }

  .navbar.menu-open .nav-actions {
    display: none;
  }

  .lang-toggle-mobile {
    padding: 6px 10px;
  }
}
</style>
