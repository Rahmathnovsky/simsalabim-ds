import { reactive } from 'vue'

const messages = {
    en: {
        // NavBar
        nav: {
            about: 'About Us',
            services: 'Services',
            projects: 'Projects',
            team: 'Team',
            contactUs: 'Contact Us'
        },
        // Hero
        hero: {
            badge: 'Trusted Digital Services Platform',
            title1: 'Digital Infrastructure',
            title2: 'for',
            titleHighlight: 'Business Growth',
            title3: 'You',
            subtitle: 'Create something great with our digital services. From websites & apps to digital marketing strategies — from first concept to your success.',
            cta1: 'Learn More',
            cta2: 'Contact Us',
            codeWebsite: '"Modern Design"',
            codeApp: '"Mobile & Web"',
            codeSeo: '"Full Optimization"',
            codeDesign: '"Premium Graphics"',
            codeComment: '// ✨ Best digital solutions!'
        },
        // StatsBar
        stats: {
            founded: 'Year Founded',
            support: 'Customer Support',
            ecosystem: 'Open Ecosystem',
            security: 'Guaranteed Data Security'
        },
        // Services
        services: {
            label: 'Our Services',
            title: 'Flexible solutions for<br />every business need.',
            subtitle: 'Grow your business with a comprehensive range of digital services — designed to work individually or integrated.',
            learnMore: 'Learn more',
            s1Title: 'Website & Applications',
            s1Desc: 'Technology can help your company get work done more effectively and meet target deadlines. We build modern web and mobile solutions.',
            s2Title: 'Office Infrastructure',
            s2Desc: 'Procurement of office infrastructure tailored to your needs for company advancement. Complete IT solutions from hardware to networking.',
            s3Title: 'SEO / SEM',
            s3Desc: 'Digital marketing is crucial for business success in today\'s modern engagement marketing era. Optimize your online visibility.',
            s4Title: 'Graphic Design',
            s4Desc: 'Graphic design is closely related to perception, image, and communication of a company. We create memorable visuals.'
        },
        // WhyUs / About
        about: {
            label: 'About Us',
            title1: 'Simsalabim',
            title2: 'creates the',
            titleHighlight: 'best solutions',
            title3: 'for your business.',
            desc1: 'Entering the current era 5.0, all businesses are required to meet all market demands. Handling all technology-related needs to support business in this era. Simsalabim provides various technology and digital services to deliver innovation for long-term business development.',
            desc2: 'Founded in 2022, Simsalabim digital services platform is here to help transform businesses into digital faster, more precisely, and more effectively with the support of strategy, planning, design, and technology-based operating systems.',
            f1Title: 'Open Ecosystem',
            f1Desc: 'Open to all business experts in providing solutions. We collaborate with various partners to deliver the best results for our clients.',
            f2Title: 'Data Security',
            f2Desc: 'Full protection for data security. All our systems are built with high security standards to protect your business information.',
            f3Title: '24/7 Support Service',
            f3Desc: 'Customer service available 24 hours. Our team is ready to help you anytime to ensure smooth operation of your digital business.'
        },
        // Infrastructure
        infra: {
            label: 'Infrastructure',
            title: 'Reliable and flexible<br />infrastructure for every need.',
            subtitle: 'Integrate our digital solutions with the technology and platforms you already use.',
            connectTitle: 'Connect to your existing systems.',
            connectDesc: 'Link our services with various platforms, build custom workflows, and integrate with third-party tools using modern technology.',
            scaleTitle: 'Scale with confidence.',
            scaleDesc: 'Handle hundreds of requests simultaneously with consistent speed and reliability, even during peak business activity periods.',
            stat1Label: 'projects completed',
            stat2Label: 'technologies mastered',
            stat3Label: 'client satisfaction'
        },
        // Portfolio
        portfolio: {
            label: 'Our Projects',
            title: 'Portfolio that inspires.',
            subtitle: 'Explore our projects and discover how we help clients achieve their goals through innovation and dedication.',
            visitSite: 'Visit Site',
            p1Desc: 'Modern digital travel platform with integrated booking system and premium design.',
            p2Desc: 'Interactive digital calendar application with intuitive and responsive interface.',
            p3Desc: 'Professional corporate website showcasing company products and services.',
            p4Desc: 'Smart field management and data collection platform with modern dashboard and analytics.',
            p5Desc: 'Elegant business platform with premium design, seamless user experience, and modern aesthetics.'
        },
        // Team
        team: {
            label: 'Our Team',
            title: 'Built by dedicated<br />experts.',
            subtitle: 'Our professional team is ready to help you create the best digital solutions for your business growth.',
            bio1: 'Will be your consultant and supporter in maximizing marketing media.',
            bio2: 'Ready to create all kinds of needs and solutions in the form of web and mobile application systems.',
            bio3: 'Always has solutions for your business problems and needs, effectively and efficiently.',
            bio4: 'Tell us your business needs, and we are ready to translate them into attractive designs.'
        },
        // Footer
        footer: {
            quickLinks: 'Quick Links',
            aboutUs: 'About Us',
            services: 'Services',
            projects: 'Projects',
            terms: 'Terms of Service',
            privacy: 'Privacy Policy',
            servicesHeading: 'Services',
            socialHeading: 'Social Media',
            socialDesc: 'Learn more about us',
            privacyShort: 'Privacy',
            termsShort: 'Terms'
        },
        // WhatsApp
        whatsapp: {
            tooltip: 'Chat with us!'
        }
    },
    id: {
        nav: {
            about: 'Tentang Kami',
            services: 'Layanan',
            projects: 'Proyek',
            team: 'Tim',
            contactUs: 'Hubungi Kami'
        },
        hero: {
            badge: 'Platform Layanan Digital Terpercaya',
            title1: 'Infrastruktur Digital',
            title2: 'untuk',
            titleHighlight: 'Pertumbuhan Bisnis',
            title3: 'Anda',
            subtitle: 'Ciptakan hal besar dengan layanan digital kami. Dari website & aplikasi hingga strategi pemasaran digital — dari konsep pertama hingga kesuksesan Anda.',
            cta1: 'Pelajari Lebih Lanjut',
            cta2: 'Hubungi Kami',
            codeWebsite: '"Desain Modern"',
            codeApp: '"Mobile & Web"',
            codeSeo: '"Optimasi Penuh"',
            codeDesign: '"Grafis Premium"',
            codeComment: '// ✨ Solusi digital terbaik!'
        },
        stats: {
            founded: 'Tahun Didirikan',
            support: 'Layanan Dukungan',
            ecosystem: 'Ekosistem Terbuka',
            security: 'Keamanan Data Terjamin'
        },
        services: {
            label: 'Layanan Kami',
            title: 'Solusi fleksibel untuk<br />setiap kebutuhan bisnis.',
            subtitle: 'Kembangkan bisnis Anda dengan rangkaian layanan digital yang komprehensif — dirancang untuk bekerja secara individual maupun terintegrasi.',
            learnMore: 'Pelajari lebih lanjut',
            s1Title: 'Website & Aplikasi',
            s1Desc: 'Teknologi dapat membantu perusahaan Anda menyelesaikan pekerjaan dengan lebih efektif dan memenuhi target waktu. Kami membangun solusi web dan mobile yang modern.',
            s2Title: 'Infrastruktur Kantor',
            s2Desc: 'Pengadaan infrastruktur kantor yang sesuai dengan kebutuhan untuk kemajuan perusahaan. Solusi IT lengkap dari perangkat keras hingga jaringan.',
            s3Title: 'SEO / SEM',
            s3Desc: 'Pemasaran digital sangat penting bagi keberhasilan bisnis di era pemasaran keterlibatan modern saat ini. Optimalkan visibilitas online Anda.',
            s4Title: 'Desain Grafis',
            s4Desc: 'Desain grafis sangat erat kaitannya dengan persepsi, citra, dan juga komunikasi sebuah perusahaan. Kami menciptakan visual yang berkesan.'
        },
        about: {
            label: 'Tentang Kami',
            title1: 'Simsalabim',
            title2: 'menciptakan',
            titleHighlight: 'solusi terbaik',
            title3: 'untuk bisnis Anda.',
            desc1: 'Memasuki era 5.0 saat ini, semua bisnis diharuskan memenuhi semua kebutuhan pasar. Menangani semua kebutuhan terkait teknologi untuk mendukung bisnis di era ini. Simsalabim menyediakan berbagai layanan teknologi dan digital untuk memberikan inovasi bagi pengembangan bisnis dalam jangka panjang.',
            desc2: 'Didirikan pada tahun 2022, platform layanan digital Simsalabim hadir untuk membantu transformasi bisnis menjadi digital dengan lebih cepat, tepat, dan efektif dengan dukungan strategi, perencanaan, desain, dan sistem operasi berbasis teknologi digital.',
            f1Title: 'Ekosistem Terbuka',
            f1Desc: 'Terbuka untuk semua pakar bisnis dalam menyediakan solusi. Kami bekerja sama dengan berbagai mitra untuk memberikan hasil terbaik bagi klien kami.',
            f2Title: 'Keamanan Data',
            f2Desc: 'Perlindungan penuh terhadap keamanan data. Semua sistem kami dibangun dengan standar keamanan tinggi untuk melindungi informasi bisnis Anda.',
            f3Title: 'Layanan Dukungan 24/7',
            f3Desc: 'Layanan pelanggan tersedia 24 jam. Tim kami siap membantu Anda kapan saja untuk memastikan kelancaran operasional bisnis digital Anda.'
        },
        infra: {
            label: 'Infrastruktur',
            title: 'Infrastruktur handal dan<br />fleksibel untuk setiap kebutuhan.',
            subtitle: 'Integrasikan solusi digital kami dengan teknologi dan platform yang sudah Anda gunakan.',
            connectTitle: 'Integrasi dengan sistem Anda.',
            connectDesc: 'Hubungkan layanan kami dengan berbagai platform, bangun workflow kustom, dan integrasikan dengan tools pihak ketiga menggunakan teknologi modern.',
            scaleTitle: 'Skalakan dengan percaya diri.',
            scaleDesc: 'Tangani ratusan permintaan secara bersamaan dengan kecepatan dan keandalan yang konsisten, bahkan selama periode puncak aktivitas bisnis Anda.',
            stat1Label: 'proyek terselesaikan',
            stat2Label: 'teknologi dikuasai',
            stat3Label: 'kepuasan klien'
        },
        portfolio: {
            label: 'Proyek Kami',
            title: 'Portofolio yang menginspirasi.',
            subtitle: 'Jelajahi proyek kami dan temukan bagaimana kami membantu klien mencapai tujuan mereka melalui inovasi dan dedikasi.',
            visitSite: 'Kunjungi Situs',
            p1Desc: 'Platform travel digital modern dengan booking system terintegrasi dan desain premium.',
            p2Desc: 'Aplikasi kalender digital interaktif dengan antarmuka yang intuitif dan responsif.',
            p3Desc: 'Website korporat profesional yang menampilkan produk dan layanan perusahaan.',
            p4Desc: 'Platform manajemen lapangan dan pengumpulan data cerdas dengan dashboard modern dan analitik.',
            p5Desc: 'Platform bisnis elegan dengan desain premium, pengalaman pengguna yang mulus, dan estetika modern.'
        },
        team: {
            label: 'Tim Kami',
            title: 'Dibangun oleh para ahli<br />yang berdedikasi.',
            subtitle: 'Tim profesional kami siap membantu Anda menciptakan solusi digital terbaik untuk pertumbuhan bisnis Anda.',
            bio1: 'Akan menjadi konsultan dan pendukung Anda dalam memaksimalkan media pemasaran.',
            bio2: 'Siap menciptakan segala macam kebutuhan dan solusi dalam bentuk sistem aplikasi berbasis web dan mobile.',
            bio3: 'Selalu memiliki solusi untuk permasalahan dan kebutuhan bisnis Anda, tentunya secara efektif dan efisien.',
            bio4: 'Beritahu kami kebutuhan bisnis Anda, dan kami siap menerjemahkannya menjadi desain yang menarik.'
        },
        footer: {
            quickLinks: 'Link Pendukung',
            aboutUs: 'Tentang Kami',
            services: 'Layanan',
            projects: 'Proyek',
            terms: 'Persyaratan Layanan',
            privacy: 'Kebijakan Privasi',
            servicesHeading: 'Layanan',
            socialHeading: 'Sosial Media',
            socialDesc: 'Cari tahu dan pelajari kami lebih lanjut',
            privacyShort: 'Privasi',
            termsShort: 'Ketentuan'
        },
        whatsapp: {
            tooltip: 'Chat dengan kami!'
        }
    }
}

const state = reactive({
    locale: localStorage.getItem('simsalabim-lang') || 'id'
})

export function useI18n() {
    function t(key) {
        const keys = key.split('.')
        let result = messages[state.locale]
        for (const k of keys) {
            if (result && result[k] !== undefined) {
                result = result[k]
            } else {
                // Fallback to English
                let fallback = messages.en
                for (const fk of keys) {
                    fallback = fallback?.[fk]
                }
                return fallback || key
            }
        }
        return result
    }

    function setLocale(locale) {
        state.locale = locale
        localStorage.setItem('simsalabim-lang', locale)
    }

    function toggleLocale() {
        setLocale(state.locale === 'en' ? 'id' : 'en')
    }

    return {
        t,
        locale: state,
        setLocale,
        toggleLocale
    }
}
