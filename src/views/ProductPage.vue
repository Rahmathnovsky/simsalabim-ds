<template>
  <div class="tools-page">
    <!-- NavBar -->
    <NavBar />

    <!-- Hero Section -->
    <section class="tools-hero">
      <div class="hero-bg">
        <div class="hero-grid"></div>
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
      </div>

      <!-- Floating Icons -->
      <div class="floating-icons">
        <div class="float-icon float-icon-1">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="float-icon float-icon-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <div class="float-icon float-icon-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        </div>
        <div class="float-icon float-icon-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div class="float-icon float-icon-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <div class="float-icon float-icon-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
        </div>
      </div>

      <div class="container hero-content">
        <h1 class="hero-title">
          {{ t('tools.heroTitle') }}<br />
          <span class="hero-highlight">{{ t('tools.heroHighlight') }}</span>
        </h1>
        <p class="hero-subtitle">{{ t('tools.heroSubtitle') }}</p>
        <a
          href="https://api.whatsapp.com/send?phone=6285176962127&text=Halo,%20Simsalabim!"
          target="_blank"
          class="btn-primary hero-cta"
        >
          {{ t('tools.heroCta') }}
          <span class="arrow-icon">→</span>
        </a>
      </div>
    </section>

    <!-- Feature Highlights -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon-wrapper" :style="{ background: feature.gradient }">
              <div class="feature-icon" v-html="feature.icon"></div>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Showcase Section (Lovable-inspired) -->
    <section class="interactive-showcase-section">
      <div class="container">
        <h2 class="section-title-tools showcase-header-title">{{ t('tools.showcaseTitle') }}</h2>
        
        <div class="showcase-container">
          <!-- Left: Image Preview -->
          <div class="showcase-preview">
            <transition name="fade" mode="out-in">
              <div 
                :key="'showcase-' + activeShowcaseIndex"
                class="showcase-image" 
                :style="{ background: showcaseItems[activeShowcaseIndex].gradient }"
              >
                 <img v-if="showcaseItems[activeShowcaseIndex].image" :src="showcaseItems[activeShowcaseIndex].image" alt="Showcase Preview" class="showcase-actual-image" />
                 <span v-else class="showcase-image-title">{{ showcaseItems[activeShowcaseIndex].title }}</span>
              </div>
            </transition>
          </div>
          
          <!-- Right: List -->
          <div class="showcase-list" @mouseenter="pauseShowcase" @mouseleave="resumeShowcase">
            <div 
              v-for="(item, index) in showcaseItems" 
              :key="'item-'+index"
              class="showcase-item"
              :class="{ active: activeShowcaseIndex === index }"
              @mouseenter="setActiveShowcase(index)"
            >
              <h3 class="showcase-item-title">{{ item.title }}</h3>
              <div class="showcase-item-desc-wrapper">
                <p class="showcase-item-desc" v-show="activeShowcaseIndex === index">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2 class="cta-title">{{ t('tools.ctaTitle') }}</h2>
          <p class="cta-subtitle">{{ t('tools.ctaSubtitle') }}</p>
          <a
            href="https://api.whatsapp.com/send?phone=6285176962127&text=Halo,%20Simsalabim!%20Saya%20tertarik%20dengan%20sistem%20kustom."
            target="_blank"
            class="btn-primary cta-btn"
          >
            {{ t('tools.ctaButton') }}
            <span class="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<script>
import { useI18n } from '../i18n.js'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
import posSystemImage from '../assets/img/portfolio/pos-system.png'

export default {
  name: 'ToolsPage',
  components: { NavBar, FooterSection, WhatsAppButton },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      posSystemImage,
      activeShowcaseIndex: 0,
      showcaseInterval: null
    }
  },
  computed: {
    features() {
      return [
        {
          title: this.t('tools.f1Title'),
          description: this.t('tools.f1Desc'),
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
          gradient: 'linear-gradient(135deg, rgba(99,91,255,0.15), rgba(99,91,255,0.05))'
        },
        {
          title: this.t('tools.f2Title'),
          description: this.t('tools.f2Desc'),
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
          gradient: 'linear-gradient(135deg, rgba(128,233,255,0.15), rgba(128,233,255,0.05))'
        },
        {
          title: this.t('tools.f3Title'),
          description: this.t('tools.f3Desc'),
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
          gradient: 'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(0,212,170,0.05))'
        }
      ]
    },
    showcaseItems() {
      return [
        {
          title: this.t('tools.showcaseItem1Title'),
          description: this.t('tools.showcaseItem1Desc'),
          image: this.posSystemImage,
          gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)'
        },
        {
          title: this.t('tools.showcaseItem2Title'),
          description: this.t('tools.showcaseItem2Desc'),
          gradient: 'linear-gradient(135deg, #0c0c1d 0%, #1b1b3a 30%, #2d1b69 60%, #11998e 100%)'
        },
        {
          title: this.t('tools.showcaseItem3Title'),
          description: this.t('tools.showcaseItem3Desc'),
          gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)'
        },
        {
          title: this.t('tools.showcaseItem4Title'),
          description: this.t('tools.showcaseItem4Desc'),
          gradient: 'linear-gradient(135deg, #635bff 0%, #ff7a00 100%)'
        }
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.observeAnimations()
    this.startShowcase()
  },
  beforeUnmount() {
    this.pauseShowcase()
  },
  methods: {
    observeAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1 }
      )
      this.$el.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el)
      })
    },
    setActiveShowcase(index) {
      if (this.activeShowcaseIndex !== index) {
        this.activeShowcaseIndex = index
      }
    },
    startShowcase() {
      this.showcaseInterval = setInterval(() => {
        this.activeShowcaseIndex = (this.activeShowcaseIndex + 1) % this.showcaseItems.length;
      }, 5000);
    },
    pauseShowcase() {
      if (this.showcaseInterval) {
        clearInterval(this.showcaseInterval);
        this.showcaseInterval = null;
      }
    },
    resumeShowcase() {
      if (!this.showcaseInterval) {
        this.startShowcase();
      }
    }
  }
}
</script>

<style scoped>
/* ===========================
   HERO SECTION
   =========================== */
.tools-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 100px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: var(--color-bg-gradient);
  z-index: 0;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 20s linear infinite;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
}

.hero-glow-1 {
  width: 500px;
  height: 500px;
  background: var(--color-primary);
  top: -100px;
  right: -100px;
}

.hero-glow-2 {
  width: 400px;
  height: 400px;
  background: var(--color-accent-cyan);
  bottom: -100px;
  left: -100px;
}

/* Floating Icons */
.floating-icons {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.float-icon {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  animation: float 6s ease-in-out infinite;
  opacity: 0.6;
}

.float-icon-1 {
  background: linear-gradient(135deg, #635bff, #80e9ff);
  top: 20%;
  left: 8%;
  animation-delay: 0s;
}

.float-icon-2 {
  background: linear-gradient(135deg, #80e9ff, #00d4aa);
  top: 15%;
  right: 12%;
  animation-delay: 1s;
}

.float-icon-3 {
  background: linear-gradient(135deg, #ff7a00, #ff4d6d);
  bottom: 25%;
  left: 12%;
  animation-delay: 2s;
}

.float-icon-4 {
  background: linear-gradient(135deg, #00d4aa, #635bff);
  top: 40%;
  right: 6%;
  animation-delay: 0.5s;
}

.float-icon-5 {
  background: linear-gradient(135deg, #635bff, #ff7a00);
  bottom: 15%;
  right: 18%;
  animation-delay: 1.5s;
}

.float-icon-6 {
  background: linear-gradient(135deg, #80e9ff, #635bff);
  top: 60%;
  left: 5%;
  animation-delay: 3s;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  color: var(--color-text-white);
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -1.5px;
}

.hero-highlight {
  background: linear-gradient(135deg, var(--color-accent-cyan), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  color: rgba(255,255,255,0.7);
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

.hero-cta {
  font-size: 16px;
  padding: 16px 36px;
}

/* ===========================
   FEATURES SECTION
   =========================== */
.features-section {
  background: var(--color-bg-light);
  padding: 100px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  border: 1px solid var(--color-border);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent-cyan));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.feature-card:hover {
  border-color: transparent;
  box-shadow: var(--shadow-lg);
  transform: translateY(-6px);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.feature-icon {
  color: var(--color-primary);
}

.feature-card:nth-child(2) .feature-icon { color: #80e9ff; }
.feature-card:nth-child(3) .feature-icon { color: #00d4aa; }

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 12px;
}

.feature-desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* ===========================
   INTERACTIVE SHOWCASE SECTION
   =========================== */
.interactive-showcase-section {
  background: var(--color-bg-white);
  padding: 100px 0;
}

.showcase-header-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: 40px;
}

.showcase-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
  background: var(--color-bg-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  border: 1px solid var(--color-border);
}

.showcase-preview {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: #0f1519;
}

.showcase-image {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background-size: cover !important;
  background-position: center !important;
}

.showcase-actual-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
}

.showcase-image-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.2;
  color: rgba(255,255,255,0.95);
  text-align: center;
  padding: 0 40px;
  text-shadow: 0 4px 24px rgba(0,0,0,0.5);
}

/* Vue Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute; /* Ensures absolute pos during cross-fade */
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.showcase-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.showcase-item {
  padding: 24px 28px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  margin-bottom: 8px;
}

.showcase-item:last-child {
  margin-bottom: 0;
}

.showcase-item:hover {
  background: rgba(99, 91, 255, 0.03);
}

.showcase-item.active {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  box-shadow: 0 8px 24px rgba(10, 37, 64, 0.05);
  transform: scale(1.02);
}

.showcase-item-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-secondary);
  transition: color 0.3s ease;
}

.showcase-item.active .showcase-item-title {
  color: var(--color-text-primary);
}

.showcase-item-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-top: 8px;
}

/* ===========================
   CTA SECTION
   =========================== */
.cta-section {
  padding: 100px 0;
  background: var(--color-bg-white);
}

.cta-card {
  text-align: center;
  padding: 80px 40px;
  border-radius: var(--radius-xl);
  background: var(--color-bg-gradient);
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 70%, rgba(99, 91, 255, 0.3), transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(128, 233, 255, 0.2), transparent 50%);
}

.cta-title {
  position: relative;
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--color-text-white);
  margin-bottom: 16px;
  z-index: 1;
}

.cta-subtitle {
  position: relative;
  font-size: 18px;
  color: rgba(255,255,255,0.7);
  max-width: 500px;
  margin: 0 auto 32px;
  line-height: 1.6;
  z-index: 1;
}

.cta-btn {
  position: relative;
  z-index: 1;
  font-size: 16px;
  padding: 16px 36px;
}

/* ===========================
   RESPONSIVE
   =========================== */
@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .showcase-container {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  }
  
  .showcase-preview {
    aspect-ratio: 16 / 10;
  }

  .float-icon {
    display: none;
  }
}

@media (max-width: 768px) {
  .tools-hero {
    min-height: 70vh;
    padding-top: 80px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .features-section,
  .interactive-showcase-section,
  .cta-section {
    padding: 80px 0;
  }

  .showcase-item {
    padding: 16px;
    transform: none !important;
  }
  
  .showcase-image-title {
    font-size: 24px;
  }

  .cta-card {
    padding: 60px 24px;
  }
}
</style>
