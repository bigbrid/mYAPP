# 公共方法

###### 文件路径 common >common.js

##### 获取用户信息

`this.$common.getUserInfo();`

例：

```js
_self.userinfo = _self.$common.getUserInfo();
```

或

```js
_self.$common.getUserInfo(res=>{
	console.log(res)
});
```



##### 修改用户信息

常用于修改用户资料后，再次把最新用于数据保存到缓存

```js
 _self.$common.setUserInfo(data,callback);
```



##### 正则用法

参考登录页

**例：**

```js
if(!this.$common.checkPhone(str)){
	return false;
}
```

