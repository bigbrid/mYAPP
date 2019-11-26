# 拦截须知

### 强制登录

强制登录时，即用户不能登录及浏览不了APP时；

- **默认是首页，`onload`方法里的请求要加私有拦截，或拿到用户缓存执行请求方法**

- **路由拦截要的跳转方式`push`需要换成`relpaceAll`**
- **登录成功后使用`relpaceAll`跳转** 

```
this.$Router.replaceAll({ name: "index", params: {} });
```



### TabBar页面

- onload请求必须要做判拦截或者判断

