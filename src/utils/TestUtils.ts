import fs from 'fs'
import path from 'path'
import { compileVueToRn } from 'vue-native-scripts'

export const getTestComponent = (component: string): any => {
  const data = fs.readFileSync(path.join(__dirname, '..', component), 'utf8')

  return compileVueToRn(data).output
}
