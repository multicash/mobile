declare class Vue {
  static component(name: string, component: object): void;
  static mixin(mixin: object): object;
  static use(plugin: object, ...options: any[]): object;

  public prototype: any;

  readonly $el: Element;
  readonly $parent: Vue;
  readonly $root: Vue;
  readonly $children: Vue[];
  readonly $refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  readonly $slots: { [key: string]: object[] | undefined };
  readonly $scopedSlots: { [key: string]: object | undefined };
  readonly $isServer: boolean;
  readonly $data: Record<string, any>;
  readonly $props: Record<string, any>;
  readonly $ssrContext: any;
  readonly $vnode: object;
  readonly $attrs: Record<string, string>;
  readonly $listeners: Record<string, Function | Function[]>;

  $mount(elementOrSelector?: Element | string, hydrating?: boolean): this;
  $forceUpdate(): void;
  $destroy(): void;

  $on(event: string | string[], callback: Function): this;
  $once(event: string | string[], callback: Function): this;
  $emit(event: string, ...args: any[]): this;
  $nextTick(callback: (this: this) => void): void;
  $nextTick(): Promise<void>;
}

declare module 'vue-native-core' {
  export type _Vue = Vue
  export type PluginFunction<T> = (Vue: Vue, options?: T) => void;

  export interface PluginObject<T> {
    install: PluginFunction<T>;
    [key: string]: any;
  }

  export default Vue
}

declare module '*.vue' {
  export default Vue
}
