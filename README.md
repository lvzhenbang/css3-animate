## css 动画

初衷：回顾以往做过的项目，以及看过的小动画，虽然之前做过一些整理，但内容还是比较散，思前想后下定决心重新整理。

introduction: 我是一个能用 `html + css` 实现页面效果，就绝对不用js的人。因为这样就意味着页面需要引入更多的内容，会让页面变得更加臃肿。进入HTML5的时代，浏览器给我们了更多的选择来做css动画，animation、transfrom和transition成了我追逐的方向。

过渡动画（transition）在html页面中也是比较常见，虽然animation也能实现过渡动画，但是大材小用了。

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

### 页面布局动画

> toggle-slide （过渡动画）

说明：使用flex进行布局，使用伪类:checked结合元素input(type=checkbox)来实现纯css+html的动画。当点击 `toggle slide` 文字区域时，实现slide-box盒子的水平扩展和收缩。

语言： css + html

[demo](https://github.com/lvzhenbang/css3-animate/blob/master/demo/toggle-slide.html)

> 仿 fullpage.js动画（animation）

说明：使用flex进行布局（一个固定头部的导航，主体是一系列一屏大小的内容快），使用锚点和 `:target` 伪类相结合的小技术实现正平滚动。

语言： css + html

[demo](https://codepen.io/lvzhenbang/pen/qMgNXq)

> 太极八卦图 （animation）

说明：使用position进行布局，使用box-shadow + transform(rotate)属性实现八卦的布局,做了一个旋转和闪烁的动画。

语言： css + html + js(这里只是用控制animation的play & stop状态)

[demo](https://codepen.io/lvzhenbang/pen/ZMZGBJ)

以每个卦边的中心为旋转中心，先平移，后旋转，这样比较好计算平移距离，布局八卦更方便。参考demo如下：

[demo2](https://codepen.io/lvzhenbang/pen/ZMZGBJ)

> spinner (annimation)

说明：spinner动画很常用，也很实用，相较于传统的用一个gif，使用html+css实现的这种实现方式效果更好（渲染更快，减少了一次http请求）。

[iconfont 的实现](https://github.com/lvzhenbang/css3-animate/blob/master/demo/spinner/iconfont.html)

优化 [demo](https://github.com/lvzhenbang/css3-animate/blob/master/demo/spinner/spinner.html?#bounce)

[小米官网 的实现](https://github.com/lvzhenbang/css3-animate/blob/master/demo/spinner/xiaomi.html)

优化 [demo](https://github.com/lvzhenbang/css3-animate/blob/master/demo/spinner/spinner.html?#impulse)

[ele me 的实现](https://github.com/lvzhenbang/css3-animate/blob/master/demo/spinner/eleme.html)

[baidu 的实现](https://github.com/lvzhenbang/css3-animate/blob/master/demo/spinner/baidu.html)

优化 [demo](file:///E:/workspace/me/css3-animate/demo/spinner/spinner.html?#swing)

### 优秀的开源项目：

[animate.css](https://github.com/daneden/animate.css)

这是一个非常棒的项目，它将animation + transform用到了极致。

[magic](https://github.com/miniMAC/magic)