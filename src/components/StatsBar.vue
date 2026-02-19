<template>
  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item animate-on-scroll" v-for="(stat, index) in computedStats" :key="index" :style="{ transitionDelay: `${index * 0.1}s` }">
          <div class="stat-value" :style="{ color: stat.color }">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from '../i18n.js'

export default {
  name: 'StatsBar',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  computed: {
    computedStats() {
      return [
        { value: '2022', label: this.t('stats.founded'), color: '#635bff' },
        { value: '24/7', label: this.t('stats.support'), color: '#80e9ff' },
        { value: '100%', label: this.t('stats.ecosystem'), color: '#00d4aa' },
        { value: '∞', label: this.t('stats.security'), color: '#ff7a00' }
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
        { threshold: 0.2 }
      )
      this.$el.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el)
      })
    }
  }
}
</script>

<style scoped>
.stats-bar {
  background: var(--color-dark);
  border-top: 1px solid rgba(99, 91, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 60px 0;
  position: relative;
  overflow: hidden;
}

.stats-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99, 91, 255, 0.4), transparent);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  padding: 20px;
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: rgba(255, 255, 255, 0.1);
}

.stat-value {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: -1px;
  margin-bottom: 8px;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: var(--color-text-muted);
  font-weight: 500;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .stat-item:not(:last-child)::after {
    display: none;
  }

  .stats-bar {
    padding: 40px 0;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}
</style>
