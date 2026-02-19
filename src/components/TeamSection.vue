<template>
  <section id="team" class="team section-padding">
    <div class="container">
      <div class="team-header animate-on-scroll">
        <span class="section-label">{{ t('team.label') }}</span>
        <h2 class="section-title" v-html="t('team.title')"></h2>
        <p class="section-subtitle">
          {{ t('team.subtitle') }}
        </p>
      </div>

      <div class="team-grid">
        <div
          class="team-card animate-on-scroll"
          v-for="(member, index) in computedMembers"
          :key="index"
          :style="{ transitionDelay: `${index * 0.1 + 0.2}s` }"
        >
          <div class="team-avatar-wrapper">
            <img :src="avatarImg" :alt="member.name" class="team-avatar" />
            <div class="team-avatar-ring" :style="{ borderColor: member.color }"></div>
          </div>
          <div class="team-info">
            <h3 class="team-name">{{ member.name }}</h3>
            <span class="team-role" :style="{ color: member.color }">{{ member.role }}</span>
            <p class="team-bio">{{ member.bio }}</p>
            <a :href="member.linkedin" target="_blank" class="team-linkedin" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from '../i18n.js'
import avatarImg from '../assets/img/team/avatar.png'

export default {
  name: 'TeamSection',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      avatarImg
    }
  },
  computed: {
    computedMembers() {
      return [
        {
          name: 'Ilham Alfaresi',
          role: 'Customer Relationship',
          bio: this.t('team.bio1'),
          linkedin: 'https://www.linkedin.com/in/ilham-alfaresi-123075141',
          color: '#635bff'
        },
        {
          name: 'Aziz Zainudin',
          role: 'Software Developer',
          bio: this.t('team.bio2'),
          linkedin: 'https://www.linkedin.com/in/aziz-zainudin-2293bb10a/',
          color: '#80e9ff'
        },
        {
          name: 'Rahmathnovsky',
          role: 'Solutions Architect',
          bio: this.t('team.bio3'),
          linkedin: 'https://www.linkedin.com/in/rahmathnovsky-nur-islamey-8801a2221/',
          color: '#00d4aa'
        },
        {
          name: 'Fardan Jauhari',
          role: 'Graphic Designer',
          bio: this.t('team.bio4'),
          linkedin: 'https://www.linkedin.com/in/fardan-jauhari/',
          color: '#ff7a00'
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
.team {
  background: var(--color-bg-white);
}

.team-header {
  max-width: 600px;
  margin-bottom: 64px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.team-card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 36px 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.team-avatar-wrapper {
  position: relative;
  width: 90px;
  height: 90px;
  margin: 0 auto 24px;
}

.team-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.team-avatar-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 2px solid;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover .team-avatar-ring {
  opacity: 1;
}

.team-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 6px;
}

.team-role {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 14px;
}

.team-bio {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 18px;
}

.team-linkedin {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-bg-light);
  border-radius: 50%;
  color: var(--color-text-secondary);
  transition: var(--transition);
}

.team-linkedin:hover {
  background: #0a66c2;
  color: var(--color-text-white);
  transform: scale(1.1);
}

@media (max-width: 968px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
    max-width: 360px;
    margin: 0 auto;
  }
}
</style>
