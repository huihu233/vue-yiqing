(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;  // 获取设备的宽度
        if(!clientWidth) return;
        if(clientWidth >= 750){
          docEl.style.fontSize = '100px'; // 根元素
        } else {
          /**
           * 移动端的适配
           * 设置: html根元素大小， 100设计稿的html大小 750设计稿
           * 测试设计稿大小：测试的值px px 转rem 测量的px/100=?rem
           */
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
      }
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window)