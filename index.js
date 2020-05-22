var photo3D = function (ele, parameter) {
  var rotateX = (parameter && parameter.rotateX) || -20
  var rotateY = (parameter && parameter.rotateY) || 100
  var interTime = (parameter && parameter.interTime) || 1000
  var isAutoPlay = parameter && parameter.isAutoPlay
  if (isAutoPlay === null || isAutoPlay === undefined) {
    isAutoPlay = true
  }
  console.log(isAutoPlay, interTime, rotateX, rotateY)
  var wrap = ele.querySelector('div')
  wrap.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
  wrap.style.transition = interTime + 'ms linear'
  var imgs = ele.querySelectorAll('img')
  var deg = 360 / (imgs.length)
  imgs.forEach(function (el, index) {
    el.style.transform = 'rotateY(' + index * (-deg) + 'deg) translateZ(300px)'
    // el.onmouseenter = function (e) {
    //   clearInterval(inter)
    // }
    // el.onmouseleave = function (e) {
    //   autoPlay()
    // }
    el.onmousedown = function (e) {
      var event = e || window.event
      // 阻止事件冒泡
      if (event && event.stopPropagation) { // w3c标准
        event.stopPropagation()
      } else { // IE系列 IE 678
        event.cancelBubble = true
      }
    }
  })
  // 添加拖拽事件
  var curX
  var curY
  var move = function (e) {
    var event = e || window.event
    var x = (event.clientX - curX) / 5
    var y = (event.clientY - curY) / 5
    curX = event.clientX
    curY = event.clientY
    rotateX += y
    rotateY += x
    wrap.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
  }
  // 添加轮播事件
  var inter
  function autoPlay () {
    if (isAutoPlay) {
      inter = setInterval(function () {
        rotateY -= deg
        wrap.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
      }, interTime)
    }
  }
  ele.onmousedown = function (e) {
    clearInterval(inter)
    var event = e || window.event
    curX = event.clientX
    curY = event.clientY
    this.style.cursor = 'grabbing'
    this.onmousemove = move
  }
  ele.onmouseup = function (e) {
    autoPlay()
    this.style.cursor = 'grab'
    this.onmousemove = null
  }
  autoPlay()
}
