---
title:  پرسپولیس بر روی دبیان
subtitle: نصب پرسپولیس بر توزیع های پایه دبیان
layout: default
tags:
  - fa
modal-id: 5
date: 2017-1-18
img: debian.png
thumbnail: debian.png
alt: رزبین
project-date: دی  ۱۳۹۵
category: نصب
---
از امروز مخازن لانچپد پرسپولیس برای پردازنده های معماری  آرم  نیز قابل دسترس است و تقریبا در همه توزیع های پایه دبیان مثل جسی ، رزبین و... می توانیداز پرسپولیس لذت ببرید  
در قدم اول آدرس مخزن پرسپولیس را باید به فایل مخازن apt بیافزایید :  
```bash
sudo echo "deb http://ppa.launchpad.net/persepolis/ppa/ubuntu xenial main
#deb-src http://ppa.launchpad.net/persepolis/ppa/ubuntu xenial main " > /etc/apt/sources.list.d/persepolis-ppa.list```  
سپس سیستم را آپدیت کنید   
```bash
sudo apt-get update  ```   
اگر با اخطار این چنینی روبرو شدید :  
```text
W: GPG error: http://ppa.launchpad.net/persepolis/ppa/ubuntu xenial InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY AC4E8D9CDCB0980D```   
دستور زیر را وارد کنید :  
```bash
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys AC4E8D9CDCB0980D```   
پس از آپدیت ، پرسپولیس را نصب کنید و لذت ببرید  
```bash
sudo apt-get update && sudo apt-get install persepolis```  
