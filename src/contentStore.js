import { reactive, watch } from 'vue'

const STORAGE_KEY = 'simsalabim_cms_content_v2'

function loadFromStorage() {
    try {
        const data = localStorage.getItem(STORAGE_KEY)
        return data ? JSON.parse(data) : null
    } catch {
        return null
    }
}

function saveToStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const defaultContent = {
    hero: {
        en: {
            badge: 'Digital Innovation Partner',
            title1: 'We Build',
            titleHighlight: 'Digital Solutions',
            title2: 'for Your',
            title3: 'Business Growth.',
            subtitle: 'Simsalabim DS creates technology-driven strategies, designs, and systems to accelerate your business digital transformation.',
            ctaPrimary: 'Learn More',
            ctaSecondary: 'Contact Us'
        },
        id: {
            badge: 'Partner Inovasi Digital',
            title1: 'Kami Membangun',
            titleHighlight: 'Solusi Digital',
            title2: 'untuk',
            title3: 'Pertumbuhan Bisnis Anda.',
            subtitle: 'Simsalabim DS menciptakan strategi, desain, dan sistem berbasis teknologi untuk mempercepat transformasi digital bisnis Anda.',
            ctaPrimary: 'Pelajari Lebih Lanjut',
            ctaSecondary: 'Hubungi Kami'
        }
    },
    services: [
        {
            id: 1,
            icon: 'design',
            en: { title: 'Web Design', description: 'Craft stunning, user-centered web designs that captivate your audience and reflect your brand identity.' },
            id_: { title: 'Desain Web', description: 'Membuat desain web yang memukau, berpusat pada pengguna, yang memikat audiens dan mencerminkan identitas merek Anda.' }
        },
        {
            id: 2,
            icon: 'development',
            en: { title: 'Web Development', description: 'Build fast, scalable, and reliable web applications using modern technologies and best practices.' },
            id_: { title: 'Pengembangan Web', description: 'Membangun aplikasi web yang cepat, skalabel, dan andal menggunakan teknologi modern dan praktik terbaik.' }
        },
        {
            id: 3,
            icon: 'product',
            en: { title: 'Product Management', description: 'Transform your ideas into successful digital products with our strategic product management approach.' },
            id_: { title: 'Manajemen Produk', description: 'Transformasikan ide Anda menjadi produk digital yang sukses dengan pendekatan manajemen produk strategis kami.' }
        },
        {
            id: 4,
            icon: 'marketing',
            en: { title: 'Digital Marketing', description: 'Boost your online presence and drive growth through data-driven digital marketing strategies.' },
            id_: { title: 'Pemasaran Digital', description: 'Tingkatkan kehadiran online Anda dan dorong pertumbuhan melalui strategi pemasaran digital berbasis data.' }
        },
        {
            id: 5,
            icon: 'graphic',
            en: { title: 'Graphic Design', description: 'Create compelling visual content that communicates your message and strengthens your brand.' },
            id_: { title: 'Desain Grafis', description: 'Membuat konten visual yang menarik yang mengkomunikasikan pesan Anda dan memperkuat merek Anda.' }
        }
    ],
    portfolio: [
        {
            id: 1,
            type: 'Web App',
            url: 'https://field-it-three.vercel.app/',
            hasImage: false,
            gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
            en: { title: 'Field It', description: 'A modern web application for field data collection and management with real-time synchronization.' },
            id_: { title: 'Field It', description: 'Aplikasi web modern untuk pengumpulan dan manajemen data lapangan dengan sinkronisasi real-time.' }
        },
        {
            id: 2,
            type: 'Website',
            url: 'https://gaon-rho.vercel.app/',
            hasImage: false,
            gradient: 'linear-gradient(135deg, #0c0c1d 0%, #1b1b3a 30%, #2d1b69 60%, #11998e 100%)',
            en: { title: 'Gaon', description: 'An elegant digital platform for Korean cuisine discovery and restaurant information.' },
            id_: { title: 'Gaon', description: 'Platform digital elegan untuk penemuan masakan Korea dan informasi restoran.' }
        },
        {
            id: 3,
            type: 'Website',
            url: 'https://almaliktravel.com/',
            hasImage: true,
            imageKey: 'project-5',
            en: { title: 'Al Malik Travel', description: 'Premium travel agency website with integrated booking system for Hajj and Umrah services.' },
            id_: { title: 'Al Malik Travel', description: 'Website agen perjalanan premium dengan sistem pemesanan terintegrasi untuk layanan Haji dan Umrah.' }
        },
        {
            id: 4,
            type: 'Website',
            url: 'https://kalender.kalapatec.id/',
            hasImage: true,
            imageKey: 'project-4',
            en: { title: 'Kalender', description: 'Interactive calendar web application with modern UI for event scheduling and reminders.' },
            id_: { title: 'Kalender', description: 'Aplikasi web kalender interaktif dengan UI modern untuk penjadwalan acara dan pengingat.' }
        },
        {
            id: 5,
            type: 'Website',
            url: 'https://hipoklorus-biosafe.vercel.app/',
            hasImage: true,
            imageKey: 'project-1',
            en: { title: 'PT Inovasi Hipoklorus Biosafe', description: 'Corporate website for a biotechnology company specializing in hypochlorous acid products.' },
            id_: { title: 'PT Inovasi Hipoklorus Biosafe', description: 'Website perusahaan untuk perusahaan bioteknologi yang mengkhususkan diri dalam produk asam hipoklorit.' }
        }
    ],
    team: [
        {
            id: 1,
            linkedin: 'https://linkedin.com',
            en: { name: 'Rahmat Novsky', role: 'Founder & CEO', bio: 'Visionary tech leader with a passion for building transformative digital solutions.' },
            id_: { name: 'Rahmat Novsky', role: 'Pendiri & CEO', bio: 'Pemimpin teknologi visioner dengan semangat membangun solusi digital transformatif.' }
        }
    ]
}

// Helper to deep merge defaults into stored data
function mergeDefaults(target, defaults) {
    for (const key in defaults) {
        if (typeof defaults[key] === 'object' && defaults[key] !== null && !Array.isArray(defaults[key])) {
            if (!target[key]) target[key] = {}
            mergeDefaults(target[key], defaults[key])
        } else if (target[key] === undefined) {
            target[key] = defaults[key]
        }
    }
    return target
}

const stored = loadFromStorage()
// Ensure we have a valid object mixed with defaults
const initialData = stored ? mergeDefaults(stored, JSON.parse(JSON.stringify(defaultContent))) : JSON.parse(JSON.stringify(defaultContent))

const content = reactive(initialData)

watch(content, (val) => {
    saveToStorage(val)
}, { deep: true })

export function useContentStore() {
    return {
        content,
        resetToDefault() {
            Object.assign(content, JSON.parse(JSON.stringify(defaultContent)))
        },
        // Services CRUD
        addService(service) {
            const maxId = content.services.reduce((max, s) => Math.max(max, s.id), 0)
            service.id = maxId + 1
            content.services.push(service)
        },
        updateService(id, data) {
            const idx = content.services.findIndex(s => s.id === id)
            if (idx !== -1) Object.assign(content.services[idx], data)
        },
        deleteService(id) {
            content.services = content.services.filter(s => s.id !== id)
        },
        // Portfolio CRUD
        addProject(project) {
            const maxId = content.portfolio.reduce((max, p) => Math.max(max, p.id), 0)
            project.id = maxId + 1
            content.portfolio.push(project)
        },
        updateProject(id, data) {
            const idx = content.portfolio.findIndex(p => p.id === id)
            if (idx !== -1) Object.assign(content.portfolio[idx], data)
        },
        deleteProject(id) {
            content.portfolio = content.portfolio.filter(p => p.id !== id)
        },
        // Team CRUD
        addMember(member) {
            const maxId = content.team.reduce((max, m) => Math.max(max, m.id), 0)
            member.id = maxId + 1
            content.team.push(member)
        },
        updateMember(id, data) {
            const idx = content.team.findIndex(m => m.id === id)
            if (idx !== -1) Object.assign(content.team[idx], data)
        },
        deleteMember(id) {
            content.team = content.team.filter(m => m.id !== id)
        }
    }
}
