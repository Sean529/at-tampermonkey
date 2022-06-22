// ==UserScript==
// @name         前端面试题宝典
// @author       AT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  隐藏敏感词
// @match        https://fe.ecool.fun/*
// @icon         https://www.google.com/s2/favicons?domain=ecool.fun
// @require      https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'
  $(document).ready(function () {
    const log =
      'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg'

    // 修改 fivicon.ico
    const link =
      document.querySelector('link[rel*="icon"]') ||
      document.createElement('link')

    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = log
    document.getElementsByTagName('head')[0].appendChild(link)

    // 修改 logo
    document.getElementsByClassName('logo___R8PNJ')[0].src = log

    // 修改文字颜色
    const headLinks = document.querySelectorAll('.header___1E4MV a')
    headLinks.forEach((item) => {
      item.style.color = '#fff'
    })

    $('button').on('click', function () {
      const [elements] = $('div[class*=qrBox__]')
      elements.remove()
    })
  })
})()
