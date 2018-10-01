## 形变

transform-origin根据旋转中心确定x, y轴的正方向，根据它的旋转顺时针为正方向，然后根据旋转中心的位置就很容易确定一个盒模型元素的坐标系F(x, y)，盒模型的元素总是在第一象限。

所以，做一个有多个元素通过变形（旋转，偏移等）形成的复杂显示效果时，为了避免出现多个坐标系的问题，可以通过如下方案实现：

1. 统一旋转中心（transform-origin）；
2. 同级元素使用 `position: absolute` ，父元素使用 `position: relative` 来定位元素，使所有的子元素，处于同一位置；
3. 遇到同一元素多次变形（transform, 如：translate, skew, rotate等）操作，先进性旋转（roate）操作；

### transform 2D 基本知识点

```
scale() // 缩放
rotate() // 旋转
translate // 偏移
skew() // 倾斜
martrix() // 矩阵，不推荐手写（基本没用过）
```

### transform 3D 基本知识点

```
scale3d(), rotate3d(), translate3d(), skew3d(), matrix3d()
// 除了上面介绍的要加上下面一个
perspective(value) // 深度，影响3D操作
perspective-origin // 决定perspective的位置，如果你了解photoshop的rgb原理，perspective-origin类似于光源的位置
```

### transform相关知识点

transform-origin

transform-style // 决定一个元素是3D or 2D的显示效果

backface-visibility // 屏幕的前后


### 参考资料

[transform-origin](https://css-tricks.com/almanac/properties/t/transform-origin/)

[transform-style](https://css-tricks.com/almanac/properties/t/transform-style/)

[backface-visibility](https://css-tricks.com/almanac/properties/b/backface-visibility/)