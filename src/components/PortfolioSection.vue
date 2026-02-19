<template>
  <section id="portfolio" class="portfolio section-padding">
    <div class="container">
      <div class="portfolio-header animate-on-scroll">
        <span class="section-label">{{ t('portfolio.label') }}</span>
        <h2 class="section-title">{{ t('portfolio.title') }}</h2>
        <p class="section-subtitle">
          {{ t('portfolio.subtitle') }}
        </p>
      </div>
    </div>

    <!-- Infinite Marquee -->
    <div class="marquee-wrapper" @mouseenter="paused = true" @mouseleave="paused = false">
      <div class="marquee-track" :class="{ 'marquee-paused': paused }">
        <!-- Original set -->
        <div
          class="portfolio-card"
          v-for="(project, index) in computedProjects"
          :key="'a-' + index"
        >
          <div class="portfolio-image-wrapper">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="portfolio-image" loading="lazy" />
            <div v-else class="portfolio-image-placeholder" :style="{ background: project.gradient }">
              <span class="placeholder-title">{{ project.title }}</span>
            </div>
            <div class="portfolio-overlay">
              <a :href="project.url" target="_blank" class="portfolio-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {{ t('portfolio.visitSite') }}
              </a>
            </div>
          </div>
          <div class="portfolio-info">
            <span class="portfolio-type">{{ project.type }}</span>
            <h3 class="portfolio-title">{{ project.title }}</h3>
            <p class="portfolio-desc">{{ project.description }}</p>
          </div>
        </div>
        <!-- Duplicate set for seamless loop -->
        <div
          class="portfolio-card"
          v-for="(project, index) in computedProjects"
          :key="'b-' + index"
        >
          <div class="portfolio-image-wrapper">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="portfolio-image" loading="lazy" />
            <div v-else class="portfolio-image-placeholder" :style="{ background: project.gradient }">
              <span class="placeholder-title">{{ project.title }}</span>
            </div>
            <div class="portfolio-overlay">
              <a :href="project.url" target="_blank" class="portfolio-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {{ t('portfolio.visitSite') }}
              </a>
            </div>
          </div>
          <div class="portfolio-info">
            <span class="portfolio-type">{{ project.type }}</span>
            <h3 class="portfolio-title">{{ project.title }}</h3>
            <p class="portfolio-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from '../i18n.js'
import projectAlmalik from '../assets/img/portfolio/project-5.webp'
import projectKalender from '../assets/img/portfolio/project-4.webp'
import projectHipoklorus from '../assets/img/portfolio/project-1.webp'

export default {
  name: 'PortfolioSection',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      projectAlmalik,
      projectKalender,
      projectHipoklorus,
      paused: false
    }
  },
  computed: {
    computedProjects() {
      return [
        {
          title: 'Field It',
          type: 'Web App',
          description: this.t('portfolio.p4Desc'),
          image: null,
          gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
          url: 'https://field-it-three.vercel.app/'
        },
        {
          title: 'Gaon',
          type: 'Website',
          description: this.t('portfolio.p5Desc'),
          image: null,
          gradient: 'linear-gradient(135deg, #0c0c1d 0%, #1b1b3a 30%, #2d1b69 60%, #11998e 100%)',
          url: 'https://gaon-rho.vercel.app/'
        },
        {
          title: 'Al Malik Travel',
          type: 'Website',
          description: this.t('portfolio.p1Desc'),
          image: this.projectAlmalik,
          url: 'https://almaliktravel.com/'
        },
        {
          title: 'Kalender',
          type: 'Website',
          description: this.t('portfolio.p2Desc'),
          image: this.projectKalender,
          url: 'https://kalender.kalapatec.id/'
        },
        {
          title: 'PT Inovasi Hipoklorus Biosafe',
          type: 'Website',
          description: this.t('portfolio.p3Desc'),
          image: this.projectHipoklorus,
          url: 'https://hipoklorus-biosafe.vercel.app/'
        }
      ]
    }
  },
  mounted() {
    this.observeAnimations()
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
    }
  }
}
</script>

<style scoped>
.portfolio {
  background: var(--color-bg-light);
  overflow: hidden;
}

.portfolio-header {
  max-width: 600px;
  margin-bottom: 48px;
}

/* Marquee */
.marquee-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
}

/* Gradient masks on edges for fade effect */
.marquee-wrapper::before,
.marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, var(--color-bg-light), transparent);
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, var(--color-bg-light), transparent);
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: marquee-scroll 40s linear infinite;
  padding: 8px 0;
}

.marquee-track.marquee-paused {
  animation-play-state: paused;
}

.portfolio-card {
  flex: 0 0 360px;
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  user-select: none;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.portfolio-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.portfolio-card:hover .portfolio-image {
  transform: scale(1.05);
}

/* Placeholder for projects without screenshots */
.portfolio-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.portfolio-image-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(99, 91, 255, 0.2), transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(128, 233, 255, 0.15), transparent 50%);
}

.portfolio-image-placeholder::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}

.placeholder-title {
  font-size: 28px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: -0.5px;
  z-index: 1;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 37, 64, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-pill);
  color: var(--color-text-white);
  font-size: 14px;
  font-weight: 600;
  transition: var(--transition);
}

.portfolio-link:hover {
  background: rgba(255, 255, 255, 0.25);
}

.portfolio-info {
  padding: 24px 28px;
}

.portfolio-type {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(99, 91, 255, 0.08);
  color: var(--color-primary);
  font-size: 12px;
  font-weight: 700;
  border-radius: var(--radius-pill);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.portfolio-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.portfolio-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 968px) {
  .portfolio-card {
    flex: 0 0 320px;
  }

  .marquee-wrapper::before,
  .marquee-wrapper::after {
    width: 60px;
  }

  .marquee-track {
    animation-duration: 30s;
  }
}

@media (max-width: 640px) {
  .portfolio-card {
    flex: 0 0 280px;
  }

  .marquee-wrapper::before,
  .marquee-wrapper::after {
    width: 30px;
  }

  .marquee-track {
    animation-duration: 25s;
  }
}
</style>
