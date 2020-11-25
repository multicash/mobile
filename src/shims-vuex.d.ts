declare module 'vuex' {
  export interface Context {
    commit(name: string, ...values: any[]): void
  }
}
