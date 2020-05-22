# 3D炫酷旋转相册


演示demo地址：[3D炫酷旋转相册演示](https://jeffrey-0.github.io/3D-photo/index.html)

项目地址：[3D炫酷旋转轮播图](https://github.com/Jeffrey-0/3D-photo)

## 效果图&功能

![img](img/3D炫酷旋转相册.gif)

* 3D旋转效果
* 自动轮播
* 鼠标拖动切换视角
* 点击当前图片跳转链接
* 自适应各种图片（最大等比例+居中裁切）

## 快速开始

CSS样式

```html
<link rel="stylesheet" type="text/css" href="https://jeffrey-0.github.io/3D-photo/index.css">
```

HTML结构

```html
<div id="container">
    <div class="wrap">
      <a href="img/1.jpg" ><img src="img/1.jpg" alt=""></a>
      <a href="img/2.jpg" ><img src="img/2.jpg" alt=""></a>
    </div>
  </div>
```

JS脚本

```html

<script type="text/javascript" src="https://jeffrey-0.github.io/3D-photo/index.js"></script>
<script type="text/javascript">
  var container = document.getElementById('container')
  photo3D(container, {
    isAutoPlay: true, // 是否自动轮播
    interTime: 1000, // 轮播时间,单位:ms
    rotateX: -20, // 初始沿x轴翻转角度,单位:deg
    rotateY: 0 // 初始沿y轴翻转角度,单位:deg
  })
</script>
```


## 选项

这些选项均有默认值，可根据自己喜好配置不同值

| 选项       | 类型    | 默认 | 描述                           |
| ---------- | ------- | ---- | ------------------------------ |
| isAutoPlay   | Boolean | true | 是否自动轮播                   |
| interTime   | Number  | 1000 | 轮播的时间，单位：毫秒         |
| rotateX | Number  | -20  | 初始沿x轴翻转角度,单位:deg |
| rotateY | Number  | 0  | 初始沿y轴翻转角度,单位:deg   |

> 如果你不想要点击当前图片跳转链接，可以设置a标签中的`href`为`javascript:;`

## 兼容性

* 兼容Chrome、Opera
