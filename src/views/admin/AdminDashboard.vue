<template>
  <div class="dashboard">
    <div class="admin-page-header">
      <h1 class="admin-page-title">Dashboard</h1>
      <p class="admin-page-subtitle">Manage your website content from here</p>
    </div>

    <!-- Stats -->
    <div class="admin-stats-grid">
      <div class="admin-stat-card">
        <div class="admin-stat-icon" style="background: rgba(99, 91, 255, 0.15);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#635bff" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
        </div>
        <div class="admin-stat-label">Total Services</div>
        <div class="admin-stat-value">{{ content.services.length }}</div>
      </div>

      <div class="admin-stat-card">
        <div class="admin-stat-icon" style="background: rgba(128, 233, 255, 0.15);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#80e9ff" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
        </div>
        <div class="admin-stat-label">Total Projects</div>
        <div class="admin-stat-value">{{ content.portfolio.length }}</div>
      </div>

      <div class="admin-stat-card">
        <div class="admin-stat-icon" style="background: rgba(0, 212, 170, 0.15);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        </div>
        <div class="admin-stat-label">Team Members</div>
        <div class="admin-stat-value">{{ content.team.length }}</div>
      </div>

      <div class="admin-stat-card">
        <div class="admin-stat-icon" style="background: rgba(255, 122, 0, 0.15);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <div class="admin-stat-label">Languages</div>
        <div class="admin-stat-value">2</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="admin-card">
      <div class="admin-card-header">
        <h2 class="admin-card-title">Quick Actions</h2>
      </div>
      <div class="quick-actions">
        <router-link to="/admin/hero" class="quick-action-card">
          <div class="quick-action-icon" style="background: rgba(99, 91, 255, 0.15); color: #635bff;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </div>
          <div>
            <div class="quick-action-title">Edit Hero</div>
            <div class="quick-action-desc">Update headline & CTA</div>
          </div>
        </router-link>

        <router-link to="/admin/services" class="quick-action-card">
          <div class="quick-action-icon" style="background: rgba(128, 233, 255, 0.15); color: #80e9ff;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
          </div>
          <div>
            <div class="quick-action-title">Manage Services</div>
            <div class="quick-action-desc">Add or edit services</div>
          </div>
        </router-link>

        <router-link to="/admin/portfolio" class="quick-action-card">
          <div class="quick-action-icon" style="background: rgba(0, 212, 170, 0.15); color: #00d4aa;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
          </div>
          <div>
            <div class="quick-action-title">Manage Portfolio</div>
            <div class="quick-action-desc">Add or edit projects</div>
          </div>
        </router-link>

        <router-link to="/admin/team" class="quick-action-card">
          <div class="quick-action-icon" style="background: rgba(255, 122, 0, 0.15); color: #ff7a00;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          </div>
          <div>
            <div class="quick-action-title">Manage Team</div>
            <div class="quick-action-desc">Edit team members</div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Content Preview -->
    <div class="admin-card">
      <div class="admin-card-header">
        <h2 class="admin-card-title">Content Summary</h2>
        <a href="/" target="_blank" class="admin-btn admin-btn-secondary admin-btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          View Website
        </a>
      </div>
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Items</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hero Section</td>
              <td>1 section</td>
              <td><span class="admin-badge admin-badge-green">Active</span></td>
              <td><router-link to="/admin/hero" class="admin-btn admin-btn-secondary admin-btn-sm">Edit</router-link></td>
            </tr>
            <tr>
              <td>Services</td>
              <td>{{ content.services.length }} services</td>
              <td><span class="admin-badge admin-badge-green">Active</span></td>
              <td><router-link to="/admin/services" class="admin-btn admin-btn-secondary admin-btn-sm">Manage</router-link></td>
            </tr>
            <tr>
              <td>Portfolio</td>
              <td>{{ content.portfolio.length }} projects</td>
              <td><span class="admin-badge admin-badge-green">Active</span></td>
              <td><router-link to="/admin/portfolio" class="admin-btn admin-btn-secondary admin-btn-sm">Manage</router-link></td>
            </tr>
            <tr>
              <td>Team</td>
              <td>{{ content.team.length }} members</td>
              <td><span class="admin-badge admin-badge-green">Active</span></td>
              <td><router-link to="/admin/team" class="admin-btn admin-btn-secondary admin-btn-sm">Manage</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useContentStore } from '../../contentStore.js'

export default {
  name: 'AdminDashboard',
  setup() {
    const { content } = useContentStore()
    return { content }
  }
}
</script>

<style scoped>
.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.quick-action-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.quick-action-card:hover {
  background: rgba(255,255,255,0.06);
  border-color: rgba(99, 91, 255, 0.3);
  transform: translateY(-2px);
}

.quick-action-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.quick-action-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 2px;
}

.quick-action-desc {
  font-size: 12px;
  color: #8898aa;
}
</style>
