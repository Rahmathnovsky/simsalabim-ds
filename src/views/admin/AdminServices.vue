<template>
  <div class="admin-services">
    <div class="admin-page-header">
      <h1 class="admin-page-title">Services</h1>
      <p class="admin-page-subtitle">Manage the services displayed on your website</p>
    </div>

    <div class="admin-card">
      <div class="admin-card-header">
        <h2 class="admin-card-title">All Services ({{ content.services.length }})</h2>
        <button class="admin-btn admin-btn-primary" @click="openModal()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Service
        </button>
      </div>

      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title (ID)</th>
              <th>Title (EN)</th>
              <th>Icon</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(service, index) in content.services" :key="service.id">
              <td>{{ index + 1 }}</td>
              <td>{{ service.id_.title }}</td>
              <td>{{ service.en.title }}</td>
              <td><span class="admin-badge admin-badge-purple">{{ service.icon }}</span></td>
              <td>
                <div class="admin-table-actions">
                  <button class="admin-btn admin-btn-secondary admin-btn-sm" @click="openModal(service)">Edit</button>
                  <button class="admin-btn admin-btn-danger admin-btn-sm" @click="confirmDelete(service.id)">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div class="admin-modal-overlay" v-if="showModal" @click.self="showModal = false">
      <div class="admin-modal">
        <h3 class="admin-modal-title">{{ editing ? 'Edit Service' : 'Add New Service' }}</h3>

        <div class="admin-form-group">
          <label class="admin-label">Icon Type</label>
          <select class="admin-select" v-model="form.icon">
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="product">Product</option>
            <option value="marketing">Marketing</option>
            <option value="graphic">Graphic</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="admin-lang-tabs">
          <button class="admin-lang-tab" :class="{ active: modalLang === 'en' }" @click="modalLang = 'en'">🇬🇧 EN</button>
          <button class="admin-lang-tab" :class="{ active: modalLang === 'id' }" @click="modalLang = 'id'">🇮🇩 ID</button>
        </div>

        <div v-if="modalLang === 'en'">
          <div class="admin-form-group">
            <label class="admin-label">Title (English)</label>
            <input class="admin-input" v-model="form.en.title" placeholder="Service title" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Description (English)</label>
            <textarea class="admin-textarea" v-model="form.en.description" rows="3" placeholder="Service description"></textarea>
          </div>
        </div>

        <div v-if="modalLang === 'id'">
          <div class="admin-form-group">
            <label class="admin-label">Title (Indonesian)</label>
            <input class="admin-input" v-model="form.id_.title" placeholder="Judul layanan" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Description (Indonesian)</label>
            <textarea class="admin-textarea" v-model="form.id_.description" rows="3" placeholder="Deskripsi layanan"></textarea>
          </div>
        </div>

        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-secondary" @click="showModal = false">Cancel</button>
          <button class="admin-btn admin-btn-primary" @click="saveService">
            {{ editing ? 'Update' : 'Add' }} Service
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
  name: 'AdminServices',
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
        icon: 'design',
        en: { title: '', description: '' },
        id_: { title: '', description: '' }
      }
    },
    openModal(service = null) {
      if (service) {
        this.editing = service.id
        this.form = {
          icon: service.icon,
          en: { ...service.en },
          id_: { ...service.id_ }
        }
      } else {
        this.editing = null
        this.form = this.emptyForm()
      }
      this.modalLang = 'id'
      this.showModal = true
    },
    saveService() {
      if (!this.form.en.title && !this.form.id_.title) return
      if (this.editing) {
        this.store.updateService(this.editing, { ...this.form })
        this.toast('Service updated successfully')
      } else {
        this.store.addService({ ...this.form })
        this.toast('Service added successfully')
      }
      this.showModal = false
    },
    confirmDelete(id) {
      if (confirm('Are you sure you want to delete this service?')) {
        this.store.deleteService(id)
        this.toast('Service deleted')
      }
    },
    toast(msg) {
      this.toastMsg = msg
      this.showToast = true
      setTimeout(() => { this.showToast = false }, 2000)
    }
  }
}
</script>
