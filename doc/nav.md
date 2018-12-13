## 导航动画

导航要做好说容易也容易，说简单也简单。如果自己凭空想，说实话，就我个人而言脑洞太小，但如果是仿一些优秀站点的动画，其实还是比较 ‘so easy’ ，然后再在别人的基础上进行一些创新，我还是可以的。

下面就介绍，一些有些站点的动画。

> 小米官网

demo：[链接地址](https://www.mi.com/redmi6/)

描述：当页面向上滚动时，直到浏览器窗口（上部）的内边沿与导航条的底部重合的一瞬间，导航条会有一个向下飞入的效果；反之，当页面向下滚动时，直到浏览器窗口（上部）的内边沿与导航条的顶部部重合的一瞬间，导航条会有一个向上飞入的效果。

分析：html页面中有两个导航的代码块组成，第一个是是静态的，第二个是position浮动的，使用的是fixed属性值，第二个的页面层级高于第一个。然后，使用了一个 `margin-top：-60px` 的样式，并使用了transition这个过渡动画。当然，只有上面的东西是不够的，对于元素什么时候触发transition动画，这需要js来配合，原理就是`监听document的向上滚动距离`，这个高度就是`margin-top：-60px` 的绝对值（我们可以使用window.pageYoffset来获取页面向上滚动的实时高度，也有人说是document文档卷起的高度）。

源代码：[仿 xiaomi](https://github.com/lvzhenbang/css3-animate/blob/master/demo/nav/xiaomi.html)

在线例子：[圣捷集团](http://www.sjcf.com.cn:8080/ywbk-hlwjr.html)



