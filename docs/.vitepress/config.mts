import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "droptern",
  description: "help center",
  themeConfig: {
    outline: {
      level: 'deep',
      label: '大纲'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Help Center', link: '/HelpCenter/Account&Settings' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
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
