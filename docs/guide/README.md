::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

:tada: :100:

[[toc]]

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->

---
title: Blogging Like a Hacker
lang: en-US
---

<span v-for="i in 3">{{ i }} </span>

<test/><test/>

 # text <Tag/> 

 $site