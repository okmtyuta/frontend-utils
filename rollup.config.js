import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },
  plugins: [
    commonjs({
      include: ['node_modules/**']
    }),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/__tests__/**']
    })
  ]
}
