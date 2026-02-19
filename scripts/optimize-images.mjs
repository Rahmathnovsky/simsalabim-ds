import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join, extname, basename } from 'path'

const imgDirs = [
    'src/assets/img/portfolio',
    'src/assets/img/team',
    'src/assets/img'
]

async function optimizeImages() {
    for (const dir of imgDirs) {
        let files
        try {
            files = readdirSync(dir)
        } catch {
            continue
        }

        for (const file of files) {
            const filePath = join(dir, file)
            const ext = extname(file).toLowerCase()

            if (statSync(filePath).isDirectory()) continue
            if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

            const name = basename(file, ext)
            const outPath = join(dir, `${name}.webp`)

            const stats = statSync(filePath)
            console.log(`Converting: ${filePath} (${(stats.size / 1024).toFixed(0)}KB)`)

            await sharp(filePath)
                .resize({ width: 800, withoutEnlargement: true })
                .webp({ quality: 75 })
                .toFile(outPath)

            const newStats = statSync(outPath)
            console.log(`  → ${outPath} (${(newStats.size / 1024).toFixed(0)}KB) — ${((1 - newStats.size / stats.size) * 100).toFixed(0)}% smaller`)
        }
    }
    console.log('\nDone! Now update your imports to use .webp files.')
}

optimizeImages()
