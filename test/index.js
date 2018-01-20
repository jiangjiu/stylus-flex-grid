import '../src/index.styl';
// hmr 更新逻辑
if (module.hot) {
    // 接受热更新的依赖数组
    module.hot.accept(['./index.js'], () => {
    });
}
