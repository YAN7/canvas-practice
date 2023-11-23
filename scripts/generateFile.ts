import path from 'path'
import fs from 'fs'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))

const checkFileName = () => {
  if (!argv.name) {
    console.error('请先输入文件名称!')
    return false
  }
  return argv.name
}

const generateFile = () => {
  const fileName = checkFileName()
  const templateContent = fs.readFileSync(path.join(process.cwd(), 'template', 'standard.vue'))
  fs.writeFileSync(path.join(process.cwd(), 'src', 'views', `${fileName}.vue`), templateContent)
}

generateFile()
