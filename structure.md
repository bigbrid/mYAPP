# 基础结构



### 结构说明

```
├─common
│  └─css
│  │  └─style1.css 			//部分页面的公共css
│  └─api.js					//api接口集合
│  └─common.js				//公共方法
│  └─custom.js				//全局文件
│  └─nRouter.js				//nvue路由路由跳转
│  └─request.js				//接口请求
│  └─router.js				//路由管理
│  └─util.js				//工具方法集合
├─components
│  ├─mescroll-uni  			//下拉刷新上拉加载
│  ├─mpvue-citypicker  		//城市联动
│  ├─mpvue-picker      		//普通联动
│  ├─u-charts		   		//图标
│  ├─uni-badge		   		//提示标点，角标
│  ├─uni-popup		   		//弹窗
│  ├─uni-title		  		//自定义导航
│  └─yq-avatar		   		//图片裁剪
├─node_modules 				//npm包管理
├─pages
│  ├─index  
│  │  └─index				//首页
│  ├─tab2					//自定义
│  ├─tab3					//自定义
│  ├─user					//个人中心
│  └─public  
│  │  └─login.vue  			//登录
│  │  └─register.vue  		//注册
│  │  └─forget.vue  	 	//忘记密码
│  │  └─change.vue			//修改密码
│  │  └─setting.vue			//修改密码
│  │  └─logout.vue			//注销
│  │  └─....vue				//其他公共页面



```



**注：**

<u>nvue页面统一放在一级页面即pages下，否则会不识别。</u>









