# cargo添加依赖

```rust
[dependencies]
# 本地
mylib = [path="./mylib", version="0.1.0"]

# crate.io
time = "0.1.12"

# github.com 默认master
regex = { git = "https://github.com/rust-lang/regex",]
regex = { git = "https://github.com/rust-lang/regex", branch = "next"]
regex = { git = "https://github.com/rust-lang/regex", tag = "v0.1.1", rev="xxxx"]

# 根据平台引入依赖
[target.'cfg(windows)'.dependencies]
winhttp = "0.5.0"

[target.'cfg(unix)'.dependencies]
openssl = "0.5.0"

[target.'cfg(not(unix))'.dependencies] # 不是unix 平台是后引入
openssl = "1.0.1"

[target.'cfg(target_arch = "x86_64")'.dependencies]
native = { path = "native/x86_64" 

[target.x86_64-pc-windows-gnu.dependencies]
winhttp = "0.4.0"

[target.i686-unknown-linux-gnu.dependencies]
openssl = "1.0.1"


# 测试开发依赖
[dev-dependencies]
tempdir = "0.3"

[target.'cfg(unix)'.dev-dependencies]
mio = "0.0.1"


# 构建依赖   构建脚本( build.rs )和项目的正常代码是彼此独立
[build-dependencies]
cc = "1.0.2"

[target.'cfg(unix)'.build-dependencies]
cc = "1.0.3"


# 重命名依赖
[dependencies]
foo = "0.1"
bar = { git = "https://github.com/example/project", package = "foo" }
baz = { version = "0.1", registry = "custom", package = "foo" }

# extern crate foo; // 来自 crates.io
# extern crate bar; // 来自 git repository
# extern crate baz; // 来自 registry `custom`


# 依赖覆盖
```

