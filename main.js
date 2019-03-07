//给图片设置初始状态，第一张图片在显示位置，其他图片在待进入位置。
$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
//设置定时器，定时改变三张图图片的状态，使它们达到轮播的效果
let n = 1
setInterval(() =>{
    //移出当前显示的图片
    $(`.images > img:nth-child(${x(n)}`).removeClass('current').addClass('leave')
    //移出当前图图片后，使其进入待进入位置
        .one('transitionend', (e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    //移入后边待进入位置的图片
    $(`.images > img:nth-child(${x(n + 1)}`).removeClass('enter').addClass('current')
    n += 1
}, 2000)

//n 不能大于3
const x = function(n) {
    if(n>3) {
        n = n % 3
        if(n === 0) {
            n = 3
        }
    }
    return n
}