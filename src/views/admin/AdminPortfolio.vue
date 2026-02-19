<template>
  <div class="admin-portfolio">
    <div class="admin-page-header">
      <h1 class="admin-page-title">Portfolio</h1>
      <p class="admin-page-subtitle">Manage your portfolio projects</p>
    </div>

    <div class="admin-card">
      <div class="admin-card-header">
        <h2 class="admin-card-title">All Projects ({{ content.portfolio.length }})</h2>
        <button class="admin-btn admin-btn-primary" @click="openModal()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Project
        </button>
      </div>

      <!-- Project Cards Grid -->
      <div class="portfolio-grid">
        <div class="portfolio-admin-card" v-for="project in content.portfolio" :key="project.id">
          <div class="portfolio-admin-preview" :style="{ background: project.gradient || '#112240' }">
            <span class="admin-badge admin-badge-cyan">{{ project.type }}</span>
          </div>
          <div class="portfolio-admin-info">
            <h3>{{ project.id_.title || project.en.title }}</h3>
            <p>{{ truncate(project.id_.description || project.en.description, 80) }}</p>
            <a :href="project.url" target="_blank" class="portfolio-admin-url">{{ project.url }}</a>
          </div>
          <div class="portfolio-admin-actions">
            <button class="admin-btn admin-btn-secondary admin-btn-sm" @click="openModal(project)">Edit</button>
            <button class="admin-btn admin-btn-danger admin-btn-sm" @click="confirmDelete(project.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="admin-modal-overlay" v-if="showModal" @click.self="showModal = false">
      <div class="admin-modal">
        <h3 class="admin-modal-title">{{ editing ? 'Edit Project' : 'Add New Project' }}</h3>

        <div class="admin-form-row">
          <div class="admin-form-group">
            <label class="admin-label">Type</label>
            <select class="admin-select" v-model="form.type">
              <option value="Website">Website</option>
              <option value="Web App">Web App</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Design">Design</option>
            </select>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">URL</label>
            <input class="admin-input" v-model="form.url" placeholder="https://example.com" />
          </div>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">Gradient Background</label>
          <input class="admin-input" v-model="form.gradient" placeholder="linear-gradient(135deg, #1a1a2e, #533483)" />
          <div class="gradient-preview" :style="{ background: form.gradient || '#112240' }"></div>
        </div>

        <div class="admin-lang-tabs">
          <button class="admin-lang-tab" :class="{ active: modalLang === 'en' }" @click="modalLang = 'en'">🇬🇧 EN</button>
          <button class="admin-lang-tab" :class="{ active: modalLang === 'id' }" @click="modalLang = 'id'">🇮🇩 ID</button>
        </div>

        <div v-if="modalLang === 'en'">
          <div class="admin-form-group">
            <label class="admin-label">Title (English)</label>
            <input class="admin-input" v-model="form.en.title" placeholder="Project name" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Description (English)</label>
            <textarea class="admin-textarea" v-model="form.en.description" rows="3" placeholder="Project description"></textarea>
          </div>
        </div>

        <div v-if="modalLang === 'id'">
          <div class="admin-form-group">
            <label class="admin-label">Title (Indonesian)</label>
            <input class="admin-input" v-model="form.id_.title" placeholder="Nama project" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Description (Indonesian)</label>
            <textarea class="admin-textarea" v-model="form.id_.description" rows="3" placeholder="Deskripsi project"></textarea>
          </div>
        </div>

        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-secondary" @click="showModal = false">Cancel</button>
          <button class="admin-btn admin-btn-primary" @click="saveProject">
            {{ editing ? 'Update' : 'Add' }} Project
          </button>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div class="admin-toast" v-if="showToast">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      {{ toastMsg }}
    </div>
  </div>
</template>

<script>
import { useContentStore } from '../../contentStore.js'

export default {
  name: 'AdminPortfolio',
  setup() {
    const store = useContentStore()
    return { content: store.content, store }
  },
  data() {
    return {
      showModal: false,
      editing: null,
      modalLang: 'id',
      showToast: false,
      toastMsg: '',
      form: this.emptyForm()
    }
  },
  methods: {
    emptyForm() {
      return {
        type: 'Website',
        url: '',
        hasImage: false,
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
        en: { title: '', description: '' },
        id_: { title: '', description: '' }
      }
    },
    openModal(project = null) {
      if (project) {
        this.editing = project.id
        this.form = {
          type: project.type,
          url: project.url,
          hasImage: project.hasImage,
          gradient: project.gradient || '',
          en: { ...project.en },
          id_: { ...project.id_ }
        }
      } else {
        this.editing = null
        this.form = this.emptyForm()
      }
      this.modalLang = 'id'
      this.showModal = true
    },
    saveProject() {
      if (!this.form.en.title && !this.form.id_.title) return
      if (this.editing) {
        this.store.updateProject(this.editing, { ...this.form })
        this.toast('Project updated successfully')
      } else {
        this.store.addProject({ ...this.form })
        this.toast('Project added successfully')
      }
      this.showModal = false
    },
    confirmDelete(id) {
      if (confirm('Are you sure you want to delete this project?')) {
        this.store.deleteProject(id)
        this.toast('Project deleted')
      }
    },
    truncate(str, len) {
      if (!str) return ''
      return str.length > len ? str.substring(0, len) + '...' : str
    },
    toast(msg) {
      this.toastMsg = msg
      this.showToast = true
      setTimeout(() => { this.showToast = false }, 2000)
    }
  }
}
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.portfolio-admin-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.portfolio-admin-card:hover {
  border-color: rgba(99, 91, 255, 0.3);
}

.portfolio-admin-preview {
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 12px;
}

.portfolio-admin-info {
  padding: 16px 20px;
}

.portfolio-admin-info h3 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
}

.portfolio-admin-info p {
  font-size: 13px;
  color: #8898aa;
  line-height: 1.5;
  margin-bottom: 8px;
}

.portfolio-admin-url {
  font-size: 12px;
  color: #635bff;
  text-decoration: none;
  word-break: break-all;
}

.portfolio-admin-url:hover {
  text-decoration: underline;
}

.portfolio-admin-actions {
  display: flex;
  gap: 8px;
  padding: 0 20px 16px;
}

.admin-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.gradient-preview {
  height: 40px;
  border-radius: 8px;
  margin-top: 8px;
  border: 1px solid rgba(255,255,255,0.1);
}

@media (max-width: 640px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  .admin-form-row {
    grid-template-columns: 1fr;
  }
}
</style>
