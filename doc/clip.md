# 用css3实现ps蒙版效果

说实话，css3越来越强大，使用css也可以做越来越多意想不到的效果。

今天，见到有人用css3实现了ps的蒙版效果，如下所示：

![css3 animate](https://github.com/lvzhenbang/css3-animate/blob/master/imgs/animate.gif)

## 实现原理

这个动画，其实也并不复杂。它使用`background-clip`实现了`文字蒙版`的效果，然后结合了背景图片的animation实现了如上图所示的文字蒙版动画。

## 用css3做蒙版效果

常见的有两种，一种是图形的，另一种是文字的。

## 图形蒙版

这里要使用的到时`clip-path`，它的作用是根据你指定的图形的轮廓来保留剩余的区域，如果你制定的图形是圆形，那么剩余的就是个圆形。

它有个特点就是，你可以把你的盒子模型定义为不规则的图形。

我们都知道原来的css只允许我们把元素定义成矩形和正方形，又可以在矩形区域内嵌套其他的矩形或者正方形元素。而现在我们可以定义一个不规则的图形，然后在这个不规则的图形内定义其他的元素。

这样说可能还是有点儿含糊。假如你在一个元素内填充满文字，以前只能沿着矩形或者正方形的边缘填充，而现在使用`clip-path`可以使文字沿着不规则的图形的边缘填充。

具体可参考[文字环绕](https://codepen.io/stacy/pen/aWKerN)

接着说图形蒙版，有两种实现：

一种是保留剪切图形轮廓内的内容，可以参考[shpape-masking](https://jsfiddle.net/sanlv/sfw2a3q5/16/)。

另一种使保留剪切图内之外的内容，可参考[Reverse clip path](https://codepen.io/Zeaklous/pen/mVEwje)。这个动画效果是由背景的gif和视频结合的，当然也可以使用css3的animation。

## 文字蒙版

文字蒙版使用的使css3中的`backgorund-clip`，这个属性支持`border-box`，`padding-box`，`content-box`和`text`等属性，具体使用可参考[mdn background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)。

它和`clip`的效果类似，都是剪切后剩余部分的内容，`text` 这个属性值比较特殊，针对的是元素内的文字，其他的针对的是元素内内容的显示区域。

参考示例：[Merry Christmas](https://codepen.io/bradtraversy/pen/BvKOKp)
