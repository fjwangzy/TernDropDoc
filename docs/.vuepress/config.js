import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const docsDir = path.resolve(__dirname, '..')

// 自动生成导航栏
function generateNavbar() {
    const navbar = [{ text: 'Home', link: '/' }]

    const items = fs.readdirSync(docsDir, { withFileTypes: true })

    for (const item of items) {
        // 跳过隐藏目录、assets、.vuepress 等
        if (!item.isDirectory()) continue
        if (item.name.startsWith('.')) continue
        if (item.name === 'assets') continue
        if (item.name === 'node_modules') continue

        const subDir = path.join(docsDir, item.name)
        const files = fs.readdirSync(subDir)

        // 查找所有 .md 文件
        const mdFiles = files.filter(f => f.endsWith('.md'))

        if (mdFiles.length === 0) continue

        if (mdFiles.length === 1) {
            // 单个文件：直接链接
            const linkName = mdFiles[0].replace('.md', '.html')
            navbar.push({
                text: item.name,
                link: `/${item.name}/${linkName}`,
            })
        } else {
            // 多个文件：创建下拉菜单
            const children = mdFiles.map(f => ({
                text: f.replace('.md', ''),
                link: `/${item.name}/${f.replace('.md', '.html')}`,
            }))
            navbar.push({
                text: item.name,
                children: children,
            })
        }
    }

    return navbar
}


export default defineUserConfig({
    base: '/TernDropDoc/',
    lang: 'en-US',
    title: 'TernDrop',
    description: 'A static site for TernDrop',

    bundler: viteBundler(),

    extendsMarkdown: (md) => {
        md.inline.ruler.before('emphasis', 'obsidian_image', (state, silent) => {
            const start = state.pos
            const max = state.posMax

            if (state.src.charCodeAt(start) !== 33 /* ! */) return false
            if (state.src.charCodeAt(start + 1) !== 91 /* [ */) return false
            if (state.src.charCodeAt(start + 2) !== 91 /* [ */) return false

            const labelStart = start + 3
            const labelEnd = state.src.indexOf(']]', labelStart)

            if (labelEnd < 0) return false

            const content = state.src.slice(labelStart, labelEnd)

            if (silent) return true

            const token = state.push('image', 'img', 0)
            token.attrs = [['src', `/assets/${content}`], ['alt', content]]
            token.children = [new state.Token('text', '', 0)]
            token.children[0].content = content

            state.pos = labelEnd + 2
            return true
        })
    },

    theme: defaultTheme({
        logo: 'https://vuejs.org/images/logo.png',
        navbar: generateNavbar(),
    }),
})
