# 数据请求

### 接口配置

所有接口需要写在`api.js`里

###### 文件路径：`common>api.js

配置：

```js
module.exports = {
	login:{						//接口名，不允许重复，这个是以后调用此接口需要的字段名称
		path:"user/login",  	//接口路径
		filter:true,			//不需要登录拦截，默认或不填写为需要登录拦截
		description:"登录"	   //接口说明
	},
	logout:{
		path:"user/logout",		
		description:"注销"
	}
}
```



### 方法

###### 文件：common>custom.js

##### 全局配置：

- 域名：`req.baseuUrl`
- 请求地址：`req.defaultReq.url`
- 请求类型：`req.defaultReq.type` 默认POST
- 请求头：`req.defaultReq.header`
- 请求携带参数：`req.defaultReq.baseData`

##### 请求方法

已封装

使用：

```js
			_self.$ajax({
                title:"",
				path: _self.$api.login,
				data: {
					account: _self.mobile,
					password: _self.password
				},
				filter(){
					return true/false
				},
				success(res){
					let { data, code, msg } = res.data;
					uni.showToast({
						title: msg,
						icon: code ? 'success' : 'none',
						success() {
							setTimeout(function() {
								...
							}, 800);
						}
					});
				}
			})
```

**参数详情：**

| 参数    | 必须 | 类型 | 解释                                                         |
| ------- | ---- | ---- | ------------------------------------------------------------ |
| title   | 否   | s    | 请求时加载文字，常用于，数据量大，加载慢得到情况，或需要提示 |
| path    | 是   | o    | 请求路径，需要在api.js定义                                   |
| filter  | 否   | f    | 单独请求拦截，方法。返回值true为拦截，false发不拦截          |
| success | 是   | f    | code为1或2000的成功回调                                      |
| fail    | 否   | f    | 失败回调                                                     |
| data    | 是   | o    | 请求参数，自动携带公共请求参数                               |



### 请求拦截

**请求拦截，无特殊要求不需要更改，详解**

```js
req.defaultReq.beforeSend = (request) => {
	USERINFO = $common.getUserInfo();   //获取用户缓存
	if (!request.filter) {				//不需要拦截直接可以求情
		return request;
	} else {							//需要拦截
		if (USERINFO) {					//有用户信息
			setReqBaseDaata()			//设置请求头
			return request;
		} else {						//没有用户信息
			let pages = getCurrentPages();     //获取页面堆栈
			let page = pages[pages.length - 1];
			for (let key in router.routers) {
				for (let i = 0; i < router.routers[key].length; i++) {
					let {
						name,
						path
					} = router.routers[key][i];
					if (path == "/" + page.route) {  //拿到当前页面名称
						router.push({				 
							"name": "login",		
							params: {
								"from": name		//携带当前页面名字去登录页
							}
						})
					}
				}
			}
		}
	}
}
```

登录成功回调

```js
_self.$Router.replaceAll({ name: "index", params: {from:from} });
```



[了解更多](http://tool.hhyang.cn/doc1/request/ajax.html)































