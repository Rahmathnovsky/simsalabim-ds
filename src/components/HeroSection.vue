<template>
  <section id="hero" class="hero">
    <!-- Animated background grid -->
    <div class="hero-bg">
      <div class="grid-lines"></div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-badge animate-on-scroll">
        <span class="badge-dot"></span>
        {{ t('hero.badge') }}
      </div>

      <h1 class="hero-title animate-on-scroll">
        {{ t('hero.title1') }}<br />
        {{ t('hero.title2') }} <span class="gradient-text">{{ t('hero.titleHighlight') }}</span> {{ t('hero.title3') }}
      </h1>

      <p class="hero-subtitle animate-on-scroll">
        {{ t('hero.subtitle') }}
      </p>

      <div class="hero-actions animate-on-scroll">
        <a href="#services" class="btn-primary btn-lg">
          {{ t('hero.cta1') }}
          <span class="arrow-icon">→</span>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=6285176962127&text=Halo,%20Simsalabim!"
          target="_blank"
          class="btn-secondary btn-lg"
        >
          {{ t('hero.cta2') }}
        </a>
      </div>

      <!-- Floating code snippet decoration -->
      <div class="hero-visual animate-on-scroll">
        <div class="code-window">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="code-body">
            <pre><code><span class="code-keyword">const</span> <span class="code-var">simsalabim</span> = {
  <span class="code-prop">website</span>: <span class="code-string">{{ t('hero.codeWebsite') }}</span>,
  <span class="code-prop">app</span>: <span class="code-string">{{ t('hero.codeApp') }}</span>,
  <span class="code-prop">seo</span>: <span class="code-string">{{ t('hero.codeSeo') }}</span>,
  <span class="code-prop">design</span>: <span class="code-string">{{ t('hero.codeDesign') }}</span>
};

<span class="code-keyword">await</span> simsalabim.<span class="code-func">transformBusiness</span>();
<span class="code-comment">{{ t('hero.codeComment') }}</span></code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from '../i18n.js'

export default {
  name: 'HeroSection',
  setup() {
    const { t } = useI18n()
    return { t }
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
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 140px 0 80px;
  background: var(--color-bg-gradient);
}

/* Animated Background */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.grid-lines {
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%) perspective(500px) rotateX(65deg);
  width: 200%;
  height: 100%;
  background-image:
    linear-gradient(rgba(99, 91, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 91, 255, 0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 20s linear infinite;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 91, 255, 0.3), transparent);
  top: -10%;
  right: -5%;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(128, 233, 255, 0.15), transparent);
  bottom: 10%;
  left: -5%;
  animation: float 10s ease-in-out infinite reverse;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 212, 170, 0.1), transparent);
  top: 40%;
  left: 40%;
  animation: float 12s ease-in-out infinite;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(99, 91, 255, 0.15);
  border: 1px solid rgba(99, 91, 255, 0.3);
  border-radius: var(--radius-pill);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-accent-cyan);
  margin-bottom: 32px;
  letter-spacing: 0.5px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent-green);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  color: var(--color-text-white);
  margin-bottom: 24px;
  letter-spacing: -1.5px;
  max-width: 800px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent-cyan) 50%, var(--color-accent-green) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--color-text-light);
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 80px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 16px;
}

/* Code Window Decoration */
.hero-visual {
  width: 100%;
  max-width: 520px;
}

.code-window {
  background: rgba(17, 34, 64, 0.8);
  border: 1px solid rgba(99, 91, 255, 0.2);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4), 0 0 40px rgba(99, 91, 255, 0.1);
  text-align: left;
  backdrop-filter: blur(10px);
}

.code-header {
  display: flex;
  gap: 8px;
  padding: 14px 18px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }

.code-body {
  padding: 20px 24px;
}

.code-body pre {
  margin: 0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.8;
}

.code-body code {
  color: rgba(255, 255, 255, 0.7);
}

.code-keyword { color: #c792ea; }
.code-var { color: #82aaff; }
.code-prop { color: #f07178; }
.code-string { color: #c3e88d; }
.code-func { color: #82aaff; }
.code-comment { color: #546e7a; }

/* Animation delays */
.hero-badge { transition-delay: 0.1s; }
.hero-title { transition-delay: 0.2s; }
.hero-subtitle { transition-delay: 0.3s; }
.hero-actions { transition-delay: 0.4s; }
.hero-visual { transition-delay: 0.6s; }

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 60px;
  }

  .hero-actions {
    margin-bottom: 50px;
  }

  .btn-lg {
    padding: 14px 24px;
    font-size: 15px;
  }

  .code-body pre {
    font-size: 11px;
  }
}
</style>
