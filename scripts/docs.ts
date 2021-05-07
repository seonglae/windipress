import path from 'path'
import { run } from './run'

;(async() => {
  run('npx vitepress build', path.resolve(__dirname, '../docs'))
})()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
