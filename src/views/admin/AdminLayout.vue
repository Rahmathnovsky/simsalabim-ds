<template>
  <div class="admin-app">
    <aside class="admin-sidebar" :class="{ open: sidebarOpen }">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <div class="sidebar-logo-icon">S</div>
          <div>
            <div class="sidebar-logo-text">Simsalabim DS</div>
            <div class="sidebar-logo-sub">CMS Admin</div>
          </div>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div class="sidebar-section">
          <div class="sidebar-section-title">Overview</div>
          <router-link to="/admin" class="sidebar-link" :class="{ active: $route.name === 'AdminDashboard' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Dashboard
          </router-link>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-title">Content</div>
          <router-link to="/admin/hero" class="sidebar-link" :class="{ active: $route.name === 'AdminHero' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Hero Section
          </router-link>
          <router-link to="/admin/services" class="sidebar-link" :class="{ active: $route.name === 'AdminServices' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
            Services
          </router-link>
          <router-link to="/admin/portfolio" class="sidebar-link" :class="{ active: $route.name === 'AdminPortfolio' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
            Portfolio
          </router-link>
          <router-link to="/admin/team" class="sidebar-link" :class="{ active: $route.name === 'AdminTeam' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            Team
          </router-link>
        </div>
      </nav>

      <div class="sidebar-footer">
        <router-link to="/" class="sidebar-back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          Kembali ke Website
        </router-link>
      </div>
    </aside>

    <!-- Mobile toggle -->
    <button class="admin-mobile-toggle" @click="sidebarOpen = !sidebarOpen">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>

    <main class="admin-main">
      <router-view />
    </main>
  </div>
</template>

<script>
import '../../admin.css'

export default {
  name: 'AdminLayout',
  data() {
    return {
      sidebarOpen: false
    }
  },
  watch: {
    '$route'() {
      this.sidebarOpen = false
    }
  }
}
</script>

<style scoped>
.admin-mobile-toggle {
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 200;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #112240;
  border: 1px solid rgba(255,255,255,0.1);
  color: #e3e8ee;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

@media (max-width: 768px) {
  .admin-mobile-toggle {
    display: flex;
  }
}
</style>
