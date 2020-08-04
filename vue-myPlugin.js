(function () {
    // 需要向外暴露的插件对象
    const MyPlugin = {}
    // 插件对象必须有一个install
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log('vue函数对象方法myGlobalMethod执行了')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive',(el,binding)=>{
            console.log(binding)
            el.textContent=binding.value.toUpperCase()
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethods=function () {
            console.log('vue实例对象方法$myMethods')
        }
    }
    // 向外暴露
    window.MyPlugin=MyPlugin
})()
