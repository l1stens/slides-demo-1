//n 不能大于3
let n
const x = function(n) {
    if(n>3) {
        n = n % 3
        if(n === 0) {
            n = 3
        }
    }
    return n
}
//获取图片节点函数
const getImage = function(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}
//初始化图片状态函数
const initImage = function() {
    n = 1
    $(`.images > img:nth-child(${x(n)}`).addClass('current')
        .siblings().addClass('enter')
}
//设置图片为状态函数
const makeCurrent = function($node) {
    return $node.removeClass('enter leave').addClass('current')
}
const makeEnter = function($node) {
    return $node.removeClass('leave current').addClass('enter')
}
const makeLeave = function($node) {
    return $node.removeClass('current enter').addClass('leave')
}
//设置定时器，定时改变三张图图片的状态，使它们达到轮播的效果
//给图片设置初始状态
initImage()
//设置定时器，定时改变三张图图片的状态，使它们达到轮播的效果
setInterval(() =>{
    //移出当前显示的图片
    makeLeave(getImage(n))
    //移出当前图图片后，使其进入待进入位置
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    //移入后边待进入位置的图片
    makeCurrent(getImage(n + 1))
    n += 1
}, 2000)


