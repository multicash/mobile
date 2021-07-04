/*
  MultiCash Mobile
  Copyright (C) 2021  Swen van Zanten

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import * as V from './index'
import {
  DefaultData,
  DefaultProps,
  DefaultMethods,
  DefaultComputed,
  PropsDefinition
} from './options'

// Expose some types for backward compatibility...
declare namespace Vue {
  // vue.d.ts
  export type CreateElement = V.CreateElement;
  export type VueConstructor<V extends Vue = Vue> = V.VueConstructor<V>;

  // options.d.ts
  export type Component<Data=DefaultData<never>, Methods=DefaultMethods<never>, Computed=DefaultComputed, Props=DefaultProps> = V.Component<Data, Methods, Computed, Props>;
  export type AsyncComponent<Data=DefaultData<never>, Methods=DefaultMethods<never>, Computed=DefaultComputed, Props=DefaultProps> = V.AsyncComponent<Data, Methods, Computed, Props>;
  export type ComponentOptions<V extends Vue, Data=DefaultData<V>, Methods=DefaultMethods<V>, Computed=DefaultComputed, PropsDef=PropsDefinition<DefaultProps>, Props=DefaultProps> = V.ComponentOptions<V, Data, Methods, Computed, PropsDef, Props>;
  export type FunctionalComponentOptions<Props = DefaultProps, PropDefs = PropsDefinition<Props>> = V.FunctionalComponentOptions<Props, PropDefs>;
  export type RenderContext<Props=DefaultProps> = V.RenderContext<Props>;
  export type PropType<T> = V.PropType<T>;
  export type PropOptions<T=any> = V.PropOptions<T>;
  export type ComputedOptions<T> = V.ComputedOptions<T>;
  export type WatchHandler<T> = V.WatchHandler<T>;
  export type WatchOptions = V.WatchOptions;
  export type WatchOptionsWithHandler<T> = V.WatchOptionsWithHandler<T>;
  export type DirectiveFunction = V.DirectiveFunction;
  export type DirectiveOptions = V.DirectiveOptions;

  // plugin.d.ts
  export type PluginFunction<T> = V.PluginFunction<T>;
  export type PluginObject<T> = V.PluginObject<T>;

  // vnode.d.ts
  export type VNodeChildren = V.VNodeChildren;
  export type VNodeChildrenArrayContents = V.VNodeChildrenArrayContents;
  export type VNode = V.VNode;
  export type VNodeComponentOptions = V.VNodeComponentOptions;
  export type VNodeData = V.VNodeData;
  export type VNodeDirective = V.VNodeDirective;
}

declare class Vue extends V.default {}

export = Vue;

export as namespace Vue;
