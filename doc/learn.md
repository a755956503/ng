# 介绍
Angular 1.x 是 基于 JavaScript的框架，而Angular 2 是基于 TypeScript的框架。
在 Angular 1 中，最为常用的是 $scope 在 Angular 2和4中被去掉了。
在新版本中，更多推崇的是 directive 和 controller, 通过对 component 组件的split（分割），从而实现代码的复用。

# angular7

管道

组件
html中引入其他组件
类似vue的template
vue需要在js的上层组件的components属性里引入，html直接使用同名标签作为组件


双向数据绑定语法

生命周期


指令
有些指令要引入了对应的模块才能用
[(ngModel)]
*ngFor
*ngIf
routerLink

事件
click 外面的圆括号会让 Angular 监听这个 <li> 元素的 click 事件


css
模块化的
可以用多种方式定义私有样式，或者内联在 @Component.styles 数组中，或者在 @Component.styleUrls 所指出的样式表文件中。

Injectable  依赖注入

HttpClient

module
ng generate module app-routing --flat --module=app

## 路由

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

数据双向绑定

# 组件
装饰器参数

## html模板
引入
template: String
teamplateUrl: String

### 模板语法
插值
标签里或者属性值里双大括号： {{title}} 模板里不需要this.title
如果你想用别的分隔符来代替 {{ 和 }}，也可以通过 Component 元数据中的 interpolation 选项来配置插值分隔符

模板表达式
*表达式上下文
由模板变量、指令的上下文变量（如果有）和组件的成员叠加而成的。
变量重名优先级  模板变量 > 指令上下文变量（主要是定义在指令值里的变量 let a of arr 的 a） > 组件成员
模板表达式不能引用全局命名空间中的任何东西，比如 window 或 document。它们也不能调用 console.log 或 Math.max。 它们只能引用表达式上下文中的成员。

模板语句
区分模板表达式
上下文和模板表达式一致

模板引用变量 ( #var )
可以引用 Angular 组件或指令或Web Component

绑定目标
属性 <img [src]="heroImageUrl">
vue 元素属性 v-bind :  组件属性： 类似react直接用属性名
vue从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：<a v-bind:[attributeName]="url"> ... </a>
事件 <button (click)="onSave()">Save</button>  vue 元素事件 v-on @
双向 <input [(ngModel)]="name"> vue v-model
attribute，class，style


指令
*ngFor="let hero of heroes"

## js

### 属性赋值
构造函数 或者 变量初始化
export class AppCtorComponent {
  title: string;
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}

# ts
public private