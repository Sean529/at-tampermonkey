// ==UserScript==
// @name         100LS辅助工具
// @author       AT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  100LS视频辅助工具
// @match        https://v.youku.com/v_show/id_XMzUzMzUyMzQ0.html?spm=a2h1n.8261147.0.0&s=cc028462962411de83b1
// @icon         https://www.google.com/s2/favicons?domain=ecool.fun
// @require      https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  $().ready(function () {
    const mask = document.querySelector('#mask')
    console.log('%c AT 🥝 mask 🥝-18', 'font-size:13px; background:#1330fb; color:#5774ff;', mask)
    if (!mask) {
      $('body').append(
        '<div id="mask" style="display:none; width:100%; height:50px; position: fixed; top: 367px; left: 0; z-index: 999999; background: black;">我是遮罩</div>',
      )
    }
  })

  // 监听热键
  document.onkeyup = function (event) {
    const TIME = 1.8 //单位秒，每次增减10秒
    const videoElement = document.querySelector('video')

    if (!videoElement) return


    //键盘事件
    const e = event || window.event || arguments.callee.caller.arguments[0]

    if (!e) return

    const { key } = e

    //键盘快捷键
    if (key === 'a') {
      // 快退
      videoElement.currentTime !== 0 ? (videoElement.currentTime -= TIME) : 1
      let leftArrowCount = localStorage.getItem('leftArrowCount')
      console.log(
        '%c AT 🥝 leftArrowCount 🥝-35',
        'font-size:13px; background:#2eba3f; color:#72fe83;',
        leftArrowCount,
      )
      if (!leftArrowCount) {
        localStorage.setItem('leftArrowCount', 1)
      } else {
        leftArrowCount++
        localStorage.setItem('leftArrowCount', leftArrowCount)
      }
    } else if (key === 'd') {
      // 快进
      videoElement.currentTime += 5
    } else if (key === 'k') {
      const mask = document.querySelector('#mask')
      if (mask) {
        console.log(
          '%c AT 🥝 mask 🥝-54',
          'font-size:13px; background:#633c57; color:#a7809b;',
          mask,
        )

        const cssValue = $('#mask')[0].style.display
        console.log(
          '%c AT 🥝 cssValue 🥝-64',
          'font-size:13px; background:#ec732a; color:#ffb76e;',
          cssValue,
        )

        if (cssValue === 'none') {
			$('#mask').css('display', 'block')
        } else {
			$('#mask').css('display', 'none')
		}
      }
    }
  }
})()
