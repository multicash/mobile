declare module 'vue-native-scripts' {
  export interface CompiledVueComponent {
    output: string
  }

  export function compileVueToRn(resource: string): CompiledVueComponent
}
