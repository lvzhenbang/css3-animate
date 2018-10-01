## 参考资料

`transition + transform + 其他` 这类过程动画还是比较常见的。它的特点就是针对变化的过程中元素发生的改变（如：宽高，颜色，字体，透明度，位置等）而做的一些平滑（可以添加动画的执行的时间，延迟时间，加速/减速的渐变函数等）的处理。

而与 `animation + transform + 其他` 不同的时，它本身动画特点是 `变化前-->变化后-->变化前` ，而后者是  `变化前-->变化后` ，所以在做web交互时多用的是transition，因为web交互是一个过程操作。在web中，如：loading(spinner, loader)这样的效果它本身具有封闭性（为某个元素所特有，不会随着属性的改变而改变）。

注意：animation中的 `animation-interation-count`（属性值：infinity） 是动画执行的次数，`animation-fill-mode` 是动画开始和结束持有的状态。这里的概念很多同学混淆了。

当然，animation 和 transition 可以实现相似的效果。

### 基本知识点

```
transition-property // css样式属性
transition-timing-function // 变化速度函数
transition-duration // 持续时间
transition-delay // 延迟时间
```

样例代码格式如下：

```
.example {
    transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
}
```

注意：不同浏览器的兼容注意带上前缀，如 `-ms-transition, -moz-transition, -webkit-transiton, -o-transition`

浏览器支持：chrome, safari, firefox 4+, opera 10.5+, ie 10+, android 2.1+, ios 3.2+

