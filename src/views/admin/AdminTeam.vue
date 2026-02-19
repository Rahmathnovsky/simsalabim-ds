<template>
  <div class="admin-team">
    <div class="admin-page-header">
      <h1 class="admin-page-title">Team</h1>
      <p class="admin-page-subtitle">Manage your team members</p>
    </div>

    <div class="admin-card">
      <div class="admin-card-header">
        <h2 class="admin-card-title">Team Members ({{ content.team.length }})</h2>
        <button class="admin-btn admin-btn-primary" @click="openModal()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Member
        </button>
      </div>

      <!-- Team Cards -->
      <div class="team-grid">
        <div class="team-admin-card" v-for="member in content.team" :key="member.id">
          <div class="team-admin-avatar">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5a6f86" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div class="team-admin-info">
            <h3>{{ member.id_.name || member.en.name }}</h3>
            <p class="team-admin-role">{{ member.id_.role || member.en.role }}</p>
            <p class="team-admin-bio">{{ truncate(member.id_.bio || member.en.bio, 100) }}</p>
            <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="team-admin-linkedin">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
          <div class="team-admin-actions">
            <button class="admin-btn admin-btn-secondary admin-btn-sm" @click="openModal(member)">Edit</button>
            <button class="admin-btn admin-btn-danger admin-btn-sm" @click="confirmDelete(member.id)">Delete</button>
          </div>
        </div>
      </div>

      <div class="admin-empty" v-if="content.team.length === 0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        <p>No team members yet</p>
        <button class="admin-btn admin-btn-primary" @click="openModal()">Add First Member</button>
      </div>
    </div>

    <!-- Modal -->
    <div class="admin-modal-overlay" v-if="showModal" @click.self="showModal = false">
      <div class="admin-modal">
        <h3 class="admin-modal-title">{{ editing ? 'Edit Member' : 'Add New Member' }}</h3>

        <div class="admin-form-group">
          <label class="admin-label">LinkedIn URL</label>
          <input class="admin-input" v-model="form.linkedin" placeholder="https://linkedin.com/in/username" />
        </div>

        <div class="admin-lang-tabs">
          <button class="admin-lang-tab" :class="{ active: modalLang === 'en' }" @click="modalLang = 'en'">🇬🇧 EN</button>
          <button class="admin-lang-tab" :class="{ active: modalLang === 'id' }" @click="modalLang = 'id'">🇮🇩 ID</button>
        </div>

        <div v-if="modalLang === 'en'">
          <div class="admin-form-group">
            <label class="admin-label">Name (English)</label>
            <input class="admin-input" v-model="form.en.name" placeholder="Full name" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Role (English)</label>
            <input class="admin-input" v-model="form.en.role" placeholder="e.g. CEO, CTO" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Bio (English)</label>
            <textarea class="admin-textarea" v-model="form.en.bio" rows="3" placeholder="Brief bio"></textarea>
          </div>
        </div>

        <div v-if="modalLang === 'id'">
          <div class="admin-form-group">
            <label class="admin-label">Nama (Indonesian)</label>
            <input class="admin-input" v-model="form.id_.name" placeholder="Nama lengkap" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Peran (Indonesian)</label>
            <input class="admin-input" v-model="form.id_.role" placeholder="e.g. CEO, CTO" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Bio (Indonesian)</label>
            <textarea class="admin-textarea" v-model="form.id_.bio" rows="3" placeholder="Bio singkat"></textarea>
          </div>
        </div>

        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-secondary" @click="showModal = false">Cancel</button>
          <button class="admin-btn admin-btn-primary" @click="saveMember">
            {{ editing ? 'Update' : 'Add' }} Member
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
  name: 'AdminTeam',
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
        linkedin: '',
        en: { name: '', role: '', bio: '' },
        id_: { name: '', role: '', bio: '' }
      }
    },
    openModal(member = null) {
      if (member) {
        this.editing = member.id
        this.form = {
          linkedin: member.linkedin || '',
          en: { ...member.en },
          id_: { ...member.id_ }
        }
      } else {
        this.editing = null
        this.form = this.emptyForm()
      }
      this.modalLang = 'id'
      this.showModal = true
    },
    saveMember() {
      if (!this.form.en.name && !this.form.id_.name) return
      if (this.editing) {
        this.store.updateMember(this.editing, { ...this.form })
        this.toast('Member updated successfully')
      } else {
        this.store.addMember({ ...this.form })
        this.toast('Member added successfully')
      }
      this.showModal = false
    },
    confirmDelete(id) {
      if (confirm('Are you sure you want to remove this team member?')) {
        this.store.deleteMember(id)
        this.toast('Member removed')
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
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.team-admin-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.team-admin-card:hover {
  border-color: rgba(99, 91, 255, 0.3);
}

.team-admin-avatar {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.team-admin-info {
  flex: 1;
  min-width: 0;
}

.team-admin-info h3 {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2px;
}

.team-admin-role {
  font-size: 13px;
  color: #635bff;
  font-weight: 600;
  margin-bottom: 6px;
}

.team-admin-bio {
  font-size: 13px;
  color: #8898aa;
  line-height: 1.5;
  margin-bottom: 8px;
}

.team-admin-linkedin {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #80e9ff;
  text-decoration: none;
}

.team-admin-linkedin:hover {
  text-decoration: underline;
}

.team-admin-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  .team-admin-card {
    flex-direction: column;
  }
  .team-admin-actions {
    flex-direction: row;
  }
}
</style>
