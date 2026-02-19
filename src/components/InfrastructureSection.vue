<template>
  <section class="infrastructure section-padding">
    <div class="container">
      <!-- Section Header -->
      <div class="infra-header animate-on-scroll">
        <span class="section-label section-label-light">{{ t('infra.label') }}</span>
        <h2 class="infra-title" v-html="t('infra.title')"></h2>
        <p class="infra-subtitle">
          {{ t('infra.subtitle') }}
        </p>
      </div>

      <!-- Connect to existing systems -->
      <div class="infra-block animate-on-scroll">
        <div class="infra-block-text">
          <h3 class="infra-block-title">{{ t('infra.connectTitle') }}</h3>
          <p class="infra-block-desc">
            {{ t('infra.connectDesc') }}
          </p>
        </div>

        <!-- Integration Diagram -->
        <div class="diagram-wrapper">
          <div class="diagram">
            <!-- Top row -->
            <div class="diagram-row">
              <div class="diagram-node node-outline">E-Commerce</div>
              <div class="diagram-node node-solid">CRM</div>
              <div class="diagram-node node-outline">ERP System</div>
              <div class="diagram-node node-solid">Booking System</div>
            </div>

            <!-- Middle row with connectors -->
            <div class="diagram-row row-middle">
              <div class="diagram-node node-accent">REST API</div>
              <div class="diagram-node node-accent">Cloud Deploy</div>
            </div>

            <!-- Center - Simsalabim -->
            <div class="diagram-row row-center">
              <div class="diagram-partner-icons">
                <div class="partner-icon" v-for="(tech, i) in leftTechs" :key="'l'+i" :style="{ background: tech.bg }">
                  <span>{{ tech.label }}</span>
                </div>
              </div>

              <div class="diagram-node node-accent node-sm">Platform</div>

              <div class="diagram-core">
                <div class="core-logo">Simsalabim</div>
              </div>

              <div class="diagram-node node-accent node-sm">Dashboard</div>

              <div class="diagram-partner-icons">
                <div class="partner-icon" v-for="(tech, i) in rightTechs" :key="'r'+i" :style="{ background: tech.bg }">
                  <span>{{ tech.label }}</span>
                </div>
              </div>
            </div>

            <!-- Bottom row -->
            <div class="diagram-row">
              <div class="diagram-node node-accent">Automation</div>
            </div>

            <!-- Connection lines (SVG) -->
            <svg class="diagram-lines" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
              <line x1="130" y1="30" x2="130" y2="180" class="line"/>
              <line x1="300" y1="30" x2="300" y2="100" class="line"/>
              <line x1="500" y1="30" x2="500" y2="100" class="line"/>
              <line x1="670" y1="30" x2="670" y2="180" class="line"/>
              <line x1="270" y1="120" x2="350" y2="200" class="line"/>
              <line x1="530" y1="120" x2="450" y2="200" class="line"/>
              <line x1="200" y1="220" x2="330" y2="220" class="line"/>
              <line x1="470" y1="220" x2="600" y2="220" class="line"/>
              <line x1="400" y1="270" x2="400" y2="360" class="line"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Scale with confidence -->
      <div class="infra-block animate-on-scroll">
        <div class="infra-block-text">
          <h3 class="infra-block-title">{{ t('infra.scaleTitle') }}</h3>
          <p class="infra-block-desc">
            {{ t('infra.scaleDesc') }}
          </p>
        </div>

        <!-- Animated Wave Canvas -->
        <div class="wave-container" ref="waveContainer">
          <canvas ref="waveCanvas" class="wave-canvas"></canvas>
        </div>

        <!-- Stats -->
        <div class="infra-stats">
          <div class="infra-stat" v-for="(stat, index) in computedStats" :key="index">
            <div class="infra-stat-value" :style="{ color: stat.color }">{{ stat.value }}</div>
            <div class="infra-stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from '../i18n.js'

export default {
  name: 'InfrastructureSection',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      leftTechs: [
        { label: 'Vue', bg: 'rgba(66,184,131,0.15)' },
        { label: 'React', bg: 'rgba(97,218,251,0.15)' },
        { label: 'Laravel', bg: 'rgba(255,45,32,0.12)' },
        { label: 'WP', bg: 'rgba(33,117,155,0.15)' }
      ],
      rightTechs: [
        { label: 'AWS', bg: 'rgba(255,153,0,0.12)' },
        { label: 'GCP', bg: 'rgba(66,133,244,0.15)' },
        { label: 'Docker', bg: 'rgba(29,99,237,0.15)' },
        { label: 'CI/CD', bg: 'rgba(0,212,170,0.15)' }
      ],
      animId: null,
      lines: []
    }
  },
  computed: {
    computedStats() {
      return [
        { value: '50+', label: this.t('infra.stat1Label'), color: '#635bff' },
        { value: '10+', label: this.t('infra.stat2Label'), color: '#80e9ff' },
        { value: '100%', label: this.t('infra.stat3Label'), color: '#00d4aa' }
      ]
    }
  },
  mounted() {
    this.observeAnimations()
    this.$nextTick(() => {
      this.initWaveCanvas()
    })
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount() {
    if (this.animId) cancelAnimationFrame(this.animId)
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (this.animId) cancelAnimationFrame(this.animId)
      this.initWaveCanvas()
    },
    initWaveCanvas() {
      const canvas = this.$refs.waveCanvas
      const container = this.$refs.waveContainer
      if (!canvas || !container) return

      const dpr = window.devicePixelRatio || 1
      const w = container.clientWidth
      const h = container.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'

      const ctx = canvas.getContext('2d')
      ctx.scale(dpr, dpr)

      // Generate 30 spaced-out flowing ribbon lines along a sweeping arc
      const totalLines = 30
      const lines = []
      for (let i = 0; i < totalLines; i++) {
        const t = i / (totalLines - 1) // 0..1
        // Evenly spread lines across the ribbon width
        const spread = t * 2 - 1 // -1 to 1
        // Opacity: slightly brighter in center, subtle fade at edges
        const distFromCenter = Math.abs(spread)
        const opacity = Math.max(0.06, (1 - distFromCenter * 0.6) * 0.55)
        // Width: uniform thin lines, slightly thicker near center
        const lineWidth = Math.max(0.4, (1 - distFromCenter * 0.5) * 1.4)
        // Unique animation params
        const speed = 0.15 + (Math.sin(i * 1.3) * 0.5 + 0.5) * 0.3
        const phase = (i * 1.47) % (Math.PI * 2)
        const microAmp = 2 + (Math.sin(i * 0.6) * 0.5 + 0.5) * 4
        // Ribbon offset: wide spread so lines are individually visible
        const ribbonOffset = spread * 200
        // Color cycle
        const colorIndex = i % 3
        lines.push({ opacity, lineWidth, speed, phase, microAmp, ribbonOffset, colorIndex })
      }
      this.lines = lines

      const colors = [
        (a) => `rgba(99, 91, 255, ${a})`,
        (a) => `rgba(128, 233, 255, ${a})`,
        (a) => `rgba(0, 212, 170, ${a})`
      ]

      let time = 0
      const segments = 250

      const draw = () => {
        ctx.clearRect(0, 0, w, h)
        time += 0.005

        for (let li = 0; li < lines.length; li++) {
          const line = lines[li]

          ctx.beginPath()
          ctx.lineWidth = line.lineWidth
          ctx.strokeStyle = colors[line.colorIndex](line.opacity)
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'

          for (let s = 0; s <= segments; s++) {
            const st = s / segments // 0..1 along the curve

            // BASE CURVE: sweeping arc from bottom-left to upper-right
            // x goes from left edge to right edge
            const x = st * w

            // The main curve shape: a smooth sweeping arc
            // Starts at ~80% height, curves up to ~20% height, creates that Stripe ribbon shape
            const curveY = h * 0.85 - st * h * 0.7 // overall rise from left to right
            // Add a pronounced hump/curve in the middle section
            const bump = Math.sin(st * Math.PI) * h * 0.15
            // Slight S-curve for elegance
            const scurve = Math.sin(st * Math.PI * 2) * h * 0.06

            // Base Y along the arc
            const baseY = curveY - bump + scurve

            // RIBBON SPREAD: offset each line perpendicular to curve direction
            // Calculate curve tangent angle for perpendicular offset
            const dx = 1
            const dy = -0.7 + Math.cos(st * Math.PI) * 0.47 - Math.cos(st * Math.PI * 2) * 0.12
            const angle = Math.atan2(dy, dx)
            const perpAngle = angle + Math.PI / 2

            // Perpendicular offset for ribbon spread
            const offsetX = Math.cos(perpAngle) * line.ribbonOffset * (0.5 + st * 0.5)
            const offsetY = Math.sin(perpAngle) * line.ribbonOffset * (0.5 + st * 0.5)

            // Micro-oscillations for flowing feel
            const micro1 = Math.sin(st * 8 + time * line.speed + line.phase) * line.microAmp
            const micro2 = Math.sin(st * 14 + time * line.speed * 0.7 + line.phase * 1.5) * line.microAmp * 0.3

            const finalX = x + offsetX
            const finalY = baseY + offsetY + micro1 + micro2

            if (s === 0) {
              ctx.moveTo(finalX, finalY)
            } else {
              ctx.lineTo(finalX, finalY)
            }
          }
          ctx.stroke()
        }

        this.animId = requestAnimationFrame(draw)
      }
      draw()
    },
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
.infrastructure {
  background: var(--color-dark);
  position: relative;
  overflow: hidden;
}

.infrastructure::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99, 91, 255, 0.3), transparent);
}

.section-label-light {
  color: var(--color-accent-cyan);
}

.infra-header {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 80px;
}

.infra-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-text-white);
  margin-bottom: 20px;
}

.infra-subtitle {
  font-size: 18px;
  color: var(--color-text-light);
  line-height: 1.7;
}

.infra-block {
  margin-bottom: 80px;
}

.infra-block:last-child {
  margin-bottom: 0;
}

.infra-block-text {
  max-width: 520px;
  margin-bottom: 48px;
}

.infra-block-title {
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: var(--color-text-white);
  margin-bottom: 12px;
  line-height: 1.3;
}

.infra-block-desc {
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* ============================================
   INTEGRATION DIAGRAM
   ============================================ */
.diagram-wrapper {
  position: relative;
  overflow-x: auto;
  padding: 20px 0;
}

.diagram {
  position: relative;
  min-width: 700px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
}

.diagram-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.line {
  stroke: rgba(99, 91, 255, 0.2);
  stroke-width: 1;
  stroke-dasharray: 4 4;
}

.diagram-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.row-center {
  gap: 12px;
}

.diagram-node {
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.node-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--color-text-muted);
}

.node-solid {
  background: rgba(99, 91, 255, 0.15);
  border: 1px solid rgba(99, 91, 255, 0.3);
  color: var(--color-accent-cyan);
}

.node-accent {
  background: rgba(99, 91, 255, 0.2);
  border: 1px solid rgba(99, 91, 255, 0.4);
  color: #c4b5fd;
  font-size: 11px;
}

.node-sm {
  padding: 6px 14px;
  font-size: 11px;
}

.diagram-node:hover {
  border-color: rgba(99, 91, 255, 0.6);
  background: rgba(99, 91, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(99, 91, 255, 0.2);
}

.diagram-core {
  position: relative;
}

.core-logo {
  background: rgba(99, 91, 255, 0.12);
  border: 1.5px solid rgba(99, 91, 255, 0.4);
  border-radius: 12px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 800;
  color: var(--color-text-white);
  letter-spacing: -0.3px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 40px rgba(99, 91, 255, 0.15);
}

.diagram-partner-icons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}

.partner-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  cursor: default;
}

.partner-icon span {
  font-size: 9px;
  font-weight: 700;
  color: var(--color-text-light);
  letter-spacing: 0.3px;
}

.partner-icon:hover {
  border-color: rgba(99, 91, 255, 0.4);
  transform: scale(1.1);
}

/* ============================================
   WAVE CANVAS
   ============================================ */
.wave-container {
  position: relative;
  width: 100%;
  height: 300px;
  margin: 20px 0 48px;
  overflow: hidden;
}

.wave-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* ============================================
   STATS
   ============================================ */
.infra-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.infra-stat-value {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1;
  margin-bottom: 8px;
}

.infra-stat-label {
  font-size: 14px;
  color: var(--color-text-muted);
  font-weight: 500;
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
  .infra-header {
    text-align: left;
    margin-bottom: 56px;
  }

  .infra-block {
    margin-bottom: 56px;
  }

  .diagram-wrapper {
    margin: 0 -20px;
    padding: 20px;
  }

  .infra-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .wave-container {
    height: 220px;
  }
}

@media (max-width: 480px) {
  .infra-stats {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
