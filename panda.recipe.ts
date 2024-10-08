import { defineRecipe } from '@pandacss/dev'

export const neumorphismDentRecipe = defineRecipe({
  className: 'neumorphism.dent',
  description: 'The neumorphism styles',
  base: {
    border: '1px solid #e9e9e9',
    outline: 'none',
  },
  variants: {
    type: {
      input: {
        boxShadow: 'inset 3px 3px 6px #babecc, inset -3px -3px 6px #fff',
      },
    },
  },
})

export const neumorphismDumpRecipe = defineRecipe({
  className: 'neumorphism.dump',
  description: 'The neumorphism styles',
  base: {
    border: '1px solid #e9e9e9',
    outline: 'none',
  },
  variants: {
    type: {
      button: {
        cursor: 'pointer',
        boxShadow: '3px 3px 6px #babecc, -3px -3px 6px #fff',
        _active: {
          boxShadow: 'inset 3px 3px 6px #babecc, inset -3px -3px 6px #fff',
        },
      },
      card: {
        boxShadow: '6px 6px 12px #babecc, -6px -6px 12px #fff',
      },
    },
  },
})
