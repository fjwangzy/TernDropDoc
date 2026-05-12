import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/TernDropDoc/',
  title: "droptern",
  description: "help center",
  themeConfig: {
    logo: '/logo.png',
    logoLink: 'https://terndrop.com',
    siteTitle: false,
    outline: {
      level: 'deep',
      label: 'outline'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'How TernDrop Works', link: '/How TernDrop Works' },
      { text: 'Help Center', link: '/HelpCenter/Account&Settings' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
       { text: 'How TernDrop Works', link: '/How TernDrop Works' },
      {
        text: 'Help Center',
        items: [
          { text: 'Account&Settings', link: '/HelpCenter/Account&Settings' },
          { text: 'Shipping&Delivery', link: '/HelpCenter/Shipping&Delivery.md' },
          { text: 'Sourcing,Order&Payment', link: '/HelpCenter/Soucing-Order-Payment.md' },
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
