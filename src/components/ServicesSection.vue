<template>
  <section id="services" class="services section-padding">
    <div class="container">
      <div class="services-header animate-on-scroll">
        <span class="section-label">{{ t('services.label') }}</span>
        <h2 class="section-title" v-html="t('services.title')"></h2>
        <p class="section-subtitle">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <div class="services-grid">
        <div
          class="service-card animate-on-scroll"
          v-for="(service, index) in computedServices"
          :key="index"
          :style="{ transitionDelay: `${index * 0.1 + 0.2}s` }"
        >
          <div class="service-icon-wrapper" :style="{ background: service.gradient }">
            <div class="service-icon" v-html="service.icon"></div>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>
          <a href="#" class="service-link">
            {{ t('services.learnMore') }} <span class="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from '../i18n.js'

export default {
  name: 'ServicesSection',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  computed: {
    computedServices() {
      return [
        {
          title: this.t('services.s1Title'),
          description: this.t('services.s1Desc'),
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
          gradient: 'linear-gradient(135deg, rgba(99,91,255,0.15), rgba(99,91,255,0.05))'
        },
        {
          title: this.t('services.s2Title'),
          description: this.t('services.s2Desc'),
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
          gradient: 'linear-gradient(135deg, rgba(128,233,255,0.15), rgba(128,233,255,0.05))'
        },
        {
          title: this.t('services.s3Title'),
          description: this.t('services.s3Desc'),
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>`,
          gradient: 'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(0,212,170,0.05))'
        },
        {
          title: this.t('services.s4Title'),
          description: this.t('services.s4Desc'),
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
          gradient: 'linear-gradient(135deg, rgba(255,122,0,0.15), rgba(255,122,0,0.05))'
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
.services {
  background: var(--color-bg-white);
}

.services-header {
  max-width: 600px;
  margin-bottom: 64px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
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

.service-card:hover {
  border-color: transparent;
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.service-icon {
  color: var(--color-primary);
}

.service-card:nth-child(2) .service-icon { color: #80e9ff; }
.service-card:nth-child(3) .service-icon { color: #00d4aa; }
.service-card:nth-child(4) .service-icon { color: #ff7a00; }

.service-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 12px;
}

.service-desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.service-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.service-link:hover {
  gap: 10px;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 28px;
  }
}
</style>
