# 路由配置

### 基本配置

###### 文件路径：`common>router.js`

###### 基本示例：

```javascript
module.exports.routers = [{
		path: "/pages/index/index",   	  //绝对路径
		name: 'index',				  	  //名称，最好与文件名一致，不允许重复
		ch_name: "首页"，					//自定义名称
		 beforeEnter:(to,from,next)=>{ 	  //路由独享守卫，进入该页面前执行
        	 next({name:'xxx'});          //跳转到其他页面
         }
	},
	{
		path: "/pages/public/login",
		name: 'login',
		ch_name: "登录",
		filter: true,					  //是否需要登录拦截，true不需要，不填写或flase为需要
	}
]
```





### 全局路由守卫

**已封装，无特殊要求不需要改动**

封装解读：

```javascript
router.beforeEach((to, from, next) => { 
	USERINFO = $common.getUserInfo()  	 //获取用户信息
	if (!to.filter) {				  	 //需要登录垃拦截
		if (!USERINFO) {				 //没有用户信息缓存
			next({						 //跳转登录页
				name: 'login',
				NAVTYPE: 'push',		 //跳转方式，见下
				params: {
					"from": from.name	 //携带参数为从哪里来页面名称，登录成功后可回到from
				}
			});
			return;
		} else {
			setReqBaseDaata()
		}
	} else {

	}
	next()
})
```





### 路由跳转

- ### `router.push() 等同于uni.navigateTo()`

- ### `router.replace() 等同于uni.redirectTo()` 

- ### `router.replaceAll() 等同于uni.reLaunch()` 

- ### `router.pushTab() 等同于uni.switchTab()`

- ### `router.back(n) 等同于uni.navigateBack()` 



### 页面传参

```js
this.$Router.push({ name: 'xxx', params: { userId: '123' }})
```



### 参数获取

##### 正常获取

```javascript
this.$Route.query.userId;
```

##### 从nvue页面进来参数获取

比如:现有三个页面，a.vue，b.nvue，c.vue，a,b分别向c传递参数，使用下列方法接受

```js
onLoad(options) {
	_self = this;
	let query = _self.$Common.$nRouter.query(options);	
 }
```

[uni-simple-router官方API](http://hhyang.cn/)

<font color=red>**以上路由跳转拦截等不支持nvue页面**</font>



### NVUE页面路由

app.vue里全局样式需要加判断，否则真机运行会报错。

需要使用nvue页面时，请参靠下面地址：

[**[uni-app 开发vue和nvue时，注意事项](https://segmentfault.com/a/1190000018516970)**](https://segmentfault.com/a/1190000018516970?utm_source=tag-newest)

nvue页面需引入全部js

```js
import Custom from '@/common/custom.js';
```

路由跳转

```js
Custom.$nRouter.replace({ name: 'cloudmap', params: {} });
```



### 



