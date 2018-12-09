## 其他动画

> toggle-slide （过渡动画）

说明：使用flex进行布局，使用伪类:checked结合元素input(type=checkbox)来实现纯css+html的动画。当点击 `toggle slide` 文字区域时，实现slide-box盒子的水平扩展和收缩。

语言： css + html

[demo](https://github.com/lvzhenbang/css3-animate/blob/master/demo/toggle-slide.html)

> 仿 fullpage.js动画（animation）

说明：使用flex进行布局（一个固定头部的导航，主体是一系列一屏大小的内容快），使用锚点和 `:target` 伪类相结合的小技术实现正平滚动。

语言： css + html

[demo](https://codepen.io/lvzhenbang/pen/qMgNXq)

> 太极八卦图 （animation）

说明：使用position进行布局，使用box-shadow + transform(rotate)属性实现八卦的布局，做了一个旋转和闪烁的动画。

语言： css + html + js(这里只是用控制animation的play & stop状态)

[demo](https://codepen.io/lvzhenbang/pen/ZMZGBJ)

以每个卦边的中心为旋转中心，先平移，后旋转，这样比较好计算平移距离，布局八卦更方便。参考demo如下：

[demo2](https://codepen.io/lvzhenbang/pen/ZMZGBJ)

> 太极八卦图 （transition）

说明：使用position进行布局，使用box-shadow + transform属性实现label浮动效果。

语言： css + html （伪类&伪元素）

[demo](https://codepen.io/lvzhenbang/pen/yRowVE)

> 箭头动画（仿apple官网）

说明：使用transition做动画过渡，使用transform做元素的形状和位置的改变。

语言：css + html (伪元素&伪类)

[demo]https://jsfiddle.net/sanlv/g68ej24x/)
