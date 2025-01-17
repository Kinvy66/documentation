---
sidebar_position: 20
---

# 网络设置

## 以太网设置

使用有线上网时，请将网线插入RJ45接口。 桌面右下角会有一个网络连接图标，选择你要连接的网络，输入密码就可以上网了。

![rock5a/rock5a_wifi](/img/rock5a/rock5a_ethernet.webp)

## 无线网设置

如果需要无线上网，就需要有无线模块。
以下是ROCK 5A无线上网教程：

- 点击桌面右下角的WiFi图标，选择您要连接的WiFi并输入密码。

![rock5a/rock5a_wifi](/img/rock5a/rock5a_wifi_1.webp)

- 进入 KDE KDE Wallet Service界面，按照指引设置 wallet。

- 如果WiFi连接成功，网络管理会显示你的wifi名称已激活。 如果要关闭wifi，点击箭头所指的方框取消wifi连接。

![rock5a/rock5a_wifi](/img/rock5a/rock5a_wifi_5.webp)

## 静态 IP 设置

网络通常使用动态 IP 地址来更好地管理网络上的 IP 地址分配。 动态 IP 地址通过 DHCP（动态主机配置协议）自动分配，这意味着每台设备在连接到网络时都会分配到一个唯一的 IP 地址。 这种方法可以更轻松地管理网络，并避免设备之间发生 IP 地址冲突的可能性。

如果要设置静态 IP 地址，则需要手动为设备分配固定 IP 地址。

如以下操作所示：

    system setting >> connections >> wire-ed Ethernet or Wi-Fi >> IPv4 >> select Manual >> Add >> enter address, netmask, gatewat >> Apply

![rock5a/rock5a_wifi](/img/rock5a/rock5a_static_ip.webp)
