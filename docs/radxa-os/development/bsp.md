# 编译内核和启动引导程序

## 使用 `bsp`

[`bsp`](https://github.com/radxa-repo/bsp) 是目前 RadxaOS 唯一支持的内核/引导程序编译环境，其有以下几个特点：

1. 生成环境容器化，无需额外配置生成依赖
2. 自动为所对应的产品下载相应的源代码
3. 编译时会重置源代码仓库，避免生成未提交的修改

目前 `bsp` 对于在 x64 平台上交叉编译是正式支持，并有试验性的 aarch64 平台原生编译支持。

可参考此项目自带的 [Getting Started](https://radxa-repo.github.io/bsp/) 页面来完成项目安装和编译测试。

如需要在 `bsp` 基础上进行二次开发，则请继续阅读文档其余部分，以了解开发流程以及如何使用编译输出。

## 手动编译

:::caution
`bsp` 是目前唯一在维护的编译方式，并且在编译的时候会对源代码进行额外的修改。  
如果想要基于我们正式发布的软件进行开发，则最低限度也需要使用 `bsp` 来下载和配置代码。

如果需要使用自定义的 `make` 命令来进行编译，请参照 [Prepare working tree](https://radxa-repo.github.io/bsp/dev_flow.html#prepare-working-tree) 部分来配置代码。
:::

## 参考

- [U-Boot | Build U-Boot](https://u-boot.readthedocs.io/en/latest/build/index.html)
- [U-Boot | Amlogic](https://docs.u-boot.org/en/latest/board/amlogic/)
- [U-Boot | Rockchip](https://u-boot.readthedocs.io/en/latest/board/rockchip/)
