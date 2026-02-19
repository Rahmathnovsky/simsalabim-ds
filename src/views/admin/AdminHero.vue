<template>
  <div class="admin-hero">
    <div class="admin-page-header">
      <h1 class="admin-page-title">Hero Section</h1>
      <p class="admin-page-subtitle">Edit the main hero content displayed at the top of your website</p>
    </div>

    <!-- Language Tabs -->
    <div class="admin-lang-tabs">
      <button class="admin-lang-tab" :class="{ active: lang === 'en' }" @click="lang = 'en'">🇬🇧 English</button>
      <button class="admin-lang-tab" :class="{ active: lang === 'id' }" @click="lang = 'id'">🇮🇩 Indonesian</button>
    </div>

    <div class="admin-card">
      <div class="admin-card-header">
        <h2 class="admin-card-title">Hero Content ({{ lang === 'en' ? 'English' : 'Indonesian' }})</h2>
      </div>

      <div class="admin-form-group">
        <label class="admin-label">Badge Text</label>
        <input class="admin-input" v-model="content.hero[lang].badge" placeholder="e.g. Digital Innovation Partner" />
      </div>

      <div class="hero-form-row">
        <div class="admin-form-group">
          <label class="admin-label">Title Line 1</label>
          <input class="admin-input" v-model="content.hero[lang].title1" />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Title Highlight</label>
          <input class="admin-input" v-model="content.hero[lang].titleHighlight" />
        </div>
      </div>

      <div class="hero-form-row">
        <div class="admin-form-group">
          <label class="admin-label">Title Line 2</label>
          <input class="admin-input" v-model="content.hero[lang].title2" />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Title Line 3</label>
          <input class="admin-input" v-model="content.hero[lang].title3" />
        </div>
      </div>

      <div class="admin-form-group">
        <label class="admin-label">Subtitle / Description</label>
        <textarea class="admin-textarea" v-model="content.hero[lang].subtitle" rows="3"></textarea>
      </div>

      <div class="hero-form-row">
        <div class="admin-form-group">
          <label class="admin-label">Primary CTA Button</label>
          <input class="admin-input" v-model="content.hero[lang].ctaPrimary" />
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Secondary CTA Button</label>
          <input class="admin-input" v-model="content.hero[lang].ctaSecondary" />
        </div>
      </div>
    </div>

    <!-- Preview -->
    <div class="admin-card">
      <div class="admin-card-header">
        <h2 class="admin-card-title">Preview</h2>
        <span class="admin-badge admin-badge-cyan">Live</span>
      </div>
      <div class="hero-preview">
        <span class="preview-badge">{{ content.hero[lang].badge }}</span>
        <h1 class="preview-title">
          {{ content.hero[lang].title1 }}
          <span class="preview-highlight">{{ content.hero[lang].titleHighlight }}</span>
          {{ content.hero[lang].title2 }}
          {{ content.hero[lang].title3 }}
        </h1>
        <p class="preview-subtitle">{{ content.hero[lang].subtitle }}</p>
        <div class="preview-buttons">
          <span class="preview-btn-primary">{{ content.hero[lang].ctaPrimary }}</span>
          <span class="preview-btn-secondary">{{ content.hero[lang].ctaSecondary }}</span>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div class="admin-toast" v-if="showToast">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      Changes saved automatically
    </div>
  </div>
</template>

<script>
import { useContentStore } from '../../contentStore.js'

export default {
  name: 'AdminHero',
  setup() {
    const { content } = useContentStore()
    return { content }
  },
  data() {
    return {
      lang: 'id',
      showToast: false,
      toastTimeout: null
    }
  },
  watch: {
    'content.hero': {
      deep: true,
      handler() {
        this.flashToast()
      }
    }
  },
  methods: {
    flashToast() {
      if (this.toastTimeout) clearTimeout(this.toastTimeout)
      this.showToast = true
      this.toastTimeout = setTimeout(() => {
        this.showToast = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.hero-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.hero-preview {
  background: linear-gradient(135deg, #0a2540, #1b1642, #2d1b69);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
}

.preview-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(99, 91, 255, 0.15);
  border: 1px solid rgba(99, 91, 255, 0.3);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  color: #80e9ff;
  margin-bottom: 16px;
}

.preview-title {
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 12px;
}

.preview-highlight {
  background: linear-gradient(135deg, #635bff, #80e9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.preview-subtitle {
  font-size: 14px;
  color: #adbdcc;
  max-width: 500px;
  margin: 0 auto 20px;
  line-height: 1.6;
}

.preview-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.preview-btn-primary {
  padding: 10px 24px;
  background: #635bff;
  color: #fff;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
}

.preview-btn-secondary {
  padding: 10px 24px;
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 640px) {
  .hero-form-row {
    grid-template-columns: 1fr;
  }
  .hero-preview {
    padding: 24px;
  }
  .preview-title {
    font-size: 22px;
  }
}
</style>
