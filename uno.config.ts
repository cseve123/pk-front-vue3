// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  // 支持css写法的@apply tailwind css
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  // 全局设置的
  shortcuts: {
    'route-link': 'text-white text-2xl px-8 py-2 cursor font-300 hover:font-500',
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
  },

  theme: {
    colors: {
      main: '#4e98f4'
    }
  }

})
