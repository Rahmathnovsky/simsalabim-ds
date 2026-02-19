<template>
  <section id="about" class="why-us section-padding">
    <div class="container">
      <div class="why-us-layout">
        <!-- Left content -->
        <div class="why-us-content animate-on-scroll">
          <span class="section-label">{{ t('about.label') }}</span>
          <h2 class="section-title">
            <span class="text-white">{{ t('about.title1') }}</span> {{ t('about.title2') }}
            <span class="gradient-text-inline">{{ t('about.titleHighlight') }}</span>
            {{ t('about.title3') }}
          </h2>
          <p class="why-us-desc">
            {{ t('about.desc1') }}
          </p>
          <p class="why-us-desc-secondary">
            {{ t('about.desc2') }}
          </p>
        </div>

        <!-- Right feature list -->
        <div class="why-us-features">
          <div
            class="feature-card animate-on-scroll"
            v-for="(feature, index) in computedFeatures"
            :key="index"
            :class="{ active: activeFeature === index }"
            :style="{ transitionDelay: `${index * 0.15 + 0.2}s` }"
            @click="activeFeature = activeFeature === index ? null : index"
          >
            <div class="feature-header">
              <div class="feature-number" :style="{ color: feature.color }">{{ feature.number }}</div>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <div class="feature-toggle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  :style="{ transform: activeFeature === index ? 'rotate(180deg)' : 'rotate(0deg)' }">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>
            <div class="feature-body" :class="{ 'feature-body-open': activeFeature === index }">
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from '../i18n.js'

export default {
  name: 'WhyUsSection',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      activeFeature: 0
    }
  },
  computed: {
    computedFeatures() {
      return [
        {
          number: '01',
          title: this.t('about.f1Title'),
          description: this.t('about.f1Desc'),
          color: '#635bff'
        },
        {
          number: '02',
          title: this.t('about.f2Title'),
          description: this.t('about.f2Desc'),
          color: '#80e9ff'
        },
        {
          number: '03',
          title: this.t('about.f3Title'),
          description: this.t('about.f3Desc'),
          color: '#00d4aa'
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
.why-us {
  background: var(--color-dark);
  position: relative;
  overflow: hidden;
}

.why-us::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 91, 255, 0.08), transparent);
  border-radius: 50%;
  pointer-events: none;
}

.why-us-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.why-us-content .section-title {
  color: rgba(255, 255, 255, 0.85);
}

.text-white {
  color: var(--color-text-white);
}

.gradient-text-inline {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.why-us-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 20px;
}

.why-us-desc-secondary {
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* Feature Cards */
.feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 24px 28px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: var(--transition);
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(99, 91, 255, 0.3);
}

.feature-card.active {
  background: rgba(99, 91, 255, 0.08);
  border-color: rgba(99, 91, 255, 0.3);
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.feature-number {
  font-size: 14px;
  font-weight: 800;
  font-family: 'JetBrains Mono', monospace;
  min-width: 30px;
}

.feature-title {
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-white);
}

.feature-toggle svg {
  color: var(--color-text-muted);
  transition: transform 0.3s ease;
}

.feature-body {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding-top: 0;
  padding-left: 46px;
  transition: max-height 0.35s ease, opacity 0.3s ease, padding-top 0.35s ease;
}

.feature-body.feature-body-open {
  max-height: 200px;
  opacity: 1;
  padding-top: 16px;
}

.feature-body p {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.7;
}

@media (max-width: 968px) {
  .why-us-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>
