## css 动画

初衷：回顾以往做过的项目，以及看过的小动画，虽然之前做过一些整理，但内容还是比较散，思前想后下定决心重新整理。

introduction: 我是一个能用 `html + css` 实现页面效果，就绝对不用js的人。因为这样就意味着页面需要引入更多的内容，会让页面变得更加臃肿。进入HTML5的时代，浏览器给我们了更多的选择来做css动画，animation、transfrom和transition成了我追逐的方向。

过渡动画（transition）在html页面中也是比较常见，虽然animation也能实现过渡动画，但是大材小用了。

做动画往往需要不止一个元素，但是做一个动画为了引入更少的元素，使用伪元素一个不错的选择，同时为了让动画拥有更丰富的表现效果，使用伪类也是一个不错的选择。但考虑到兼容性问题和如何使用的问题可查看[pseudo](https://github.com/lvzhenbang/pseudo)

### 做css动画应该考虑的问题

1. 浏览器的支持

chrome 6+, safari 5+, firefox 5+, opera 12+, ie 10+, android 4.4+, ios 4+

2. 性能

常用的两种组合：

transition(过渡) + tranform(形变) + opacity + 其他

animation(动画) + transfrom(形变) + opacity + 其他

这里主要考虑的问题就是其他。

而在transfrom(形变)这部分最常用的就是translate, scale, rotate，这些使用的时候不用多考虑，可以直接拿来用，而至于其他的如skew()等需要实践去验证。

至于其它的css支持的可用于做动画的属性，你可以参考这篇[High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)文章

### 动画案例

> spinner (annimation)

[doc](https://github.com/lvzhenbang/css3-animate/blob/master/doc/spinner.md)

> border (transition)

[doc](https://github.com/lvzhenbang/css3-animate/blob/master/doc/border.md)

> input (transition)

[doc](https://github.com/lvzhenbang/css3-animate/blob/master/doc/input.md)

> 3d (transition/animation)

[doc](https://github.com/lvzhenbang/css3-animate/blob/master/doc/css-shape-3d.md)

> 导航动画


> 其他

[doc](https://github.com/lvzhenbang/css3-animate/blob/master/doc/other.md)

### 优秀的开源项目：

[animate.css](https://github.com/daneden/animate.css)

这是一个非常棒的项目，它将animation + transform用到了极致。

[magic](https://github.com/miniMAC/magic)

[hamburgers](https://github.com/jonsuh/hamburgers)

[SpinKit](https://github.com/tobiasahlin/SpinKit)

[css-loaders](https://github.com/lukehaas/css-loaders)