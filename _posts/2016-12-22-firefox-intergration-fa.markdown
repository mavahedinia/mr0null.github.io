---
title: اتصال فایرفاکس به پرسپولیس
subtitle: به راحتی در میان مرورتان دانلود کنید
layout: default
tags:
  - fa
modal-id: 100
date: 2016-12-22
img: addons.jpg
thumbnail: addons.jpg
alt: flashgot
category: Integration
project-date: Dec 2016

---
  <p class="pabout" >
            ابتدا افزونه FlashGot را <a href="https://addons.mozilla.org/en-US/firefox/addon/flashgot/" class="linuxihaa">از این لینک </a>دانلود و نصب کنید.<br/>
            سپس در صفحه تنظیمات افزونه بر روی تب Prefrences کلیک کرده و در قسمت Download Manager گزینه Add را انتخاب نمایید سپس نام Persepolis Download Manager را وارد نمایید.<br/>
            در قسمت Executable Path برای گنولینوکس آدرس زیر را وارد کنید:<br/>
          <p class="pabout" dir="ltr">
            <code>/usr/bin/persepolis</code>
          </p>
		<p class="pabout"> و برای مک‌او‌اس آدرس زیر را بنویسید : </p>
          <p class="pabout" dir="ltr">
		<code>/Applications/Persepolis Download Manager.app/Contents/MacOS/Persepolis Download Manager</code>

          </p>
          <p>
          و در قسمت Command Line Argument Template متن زیر را وارد کنید:<br/>
          <p dir="ltr">
          <code>[--link URL][--name FNAME][--referer REFERER][--headers HEADERS][--agent UA][--cookie COOKIE]</code>
          </p>
          <img class="screenshot" src="/img/portfolio/screen11.png"/><br/>
          <p class="pabout">
            در تب Advanced گزینه Automatic Download Manager Detection را غیر فعال کنید.<br/>
            همچنین در تب Flashgot Media دانلود منیجر پرسپولیس را انتخاب کنید.<br/>
          </p>
          <img class="screenshot" src="/img/portfolio/screen13.jpeg"/><br/>
          <p class="pabout">
            در تب Downloads گزینه Automatic Downloads را غیر فعال کنید.
          </p>
          <br/>
          <img class="screenshot" src="/img/portfolio/screen12.jpeg"/><br/>
