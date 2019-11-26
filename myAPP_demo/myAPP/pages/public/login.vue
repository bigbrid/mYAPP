<template>
	<view class="container">
		<view class="logo"></view>
		<!-- 账号密码输入框 -->
		<view class="login-form">
			<view class="form-row username">
				<view class="icon-image"><image src="/static/user/icon-phone.png" mode="widthFix" style="width: 29upx;height: 38upx;"></image></view>

				<input
					@focus="fixedToggle"
					@blur="fixedToggle(true)"
					placeholder="请输入登录账号"
					v-model="mobile"
					placeholder-style="color: rgba(191,191,191,1);"
				/>
			</view>
			<view class="form-row password">
				<view class="icon-image"><image src="/static/user/icon-password.png" mode="widthFix" style="width: 30upx;height: 38upx;"></image></view>
				<input
					@focus="fixedToggle"
					@blur="fixedToggle(true)"
					placeholder="请输入密码（6~12位）"
					maxlength="12"
					v-model="password"
					password="true"
					placeholder-style="color: rgba(191,191,191,1);"
				/>
			</view>
			<view class="logon-sub" @tap="doLogin">登 录</view>
		</view>
	</view>
</template>

<script>
var _self;
export default {
	data() {
		return {
			from: '',
			mobile: '',
			password: '',
			windowHeight: '', //设备高度
			hasFixed: true // 是否显示底部定位元素
		};
	},
	onLoad(options) {
		_self = this;
		_self.from = _self.$Route.query.from;
		// 获取设备高度，解决flex定位顶起的问题
		uni.getSystemInfo({
			success: res => {
				this.windowHeight = res.windowHeight;
			}
		});
		uni.onWindowResize(res => {
			if (res.size.windowHeight < this.windowHeight) {
				this.hasFixed = false;
			} else {
				this.hasFixed = true;
			}
		});
		console.log(this.$Route)
	},
	onBackPress() {},
	methods: {
		async doLogin() {
			uni.hideKeyboard();
			// if(!this.$common.checkPhone(this.mobile)){
			// 	return false;
			// }
			// if(!this.$common.checkPassword(this.password)){
			// 	return false;
			// }
			if(!_self.mobile){
				uni.showToast({
					icon:"none",
					title:"请输入用户名"
				})
				return false;
			}
			if(!_self.password){
				uni.showToast({
					icon:"none",
					title:"请输入密码"
				})
				return false;
			}
			
			_self.$ajax({
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
								if (code) {
									uni.setStorageSync('USERINFO', data);
									uni.hideToast()
									_self.$Router.replaceAll({ name: "index", params: {} });
								} else {
									
								}
							}, 1200);
						}
					});
				}
			})
		},
		fixedToggle(has) {
			//是否显示三方登录
			this.tabbar = has || false;
		}
	}
};
</script>
<style scoped>
.container{
	align-items: center;
}
.logo {
	width: 172upx;
	height: 172upx;
	border-radius: 42upx;
	margin-top: 185upx;
	background-color: #2999f8;
}
.login-form {
	margin-top: 70upx;
	padding: 0 75upx 0 75upx;
}
.login-form .form-row {
	height: 119upx;
	border-bottom: 1px solid #ededed;
	display: flex;
	align-items: center;
}
.login-form .icon-image {
	width: 30upx;
	display: flex;
	justify-content: center;
}
.login-form input {
	height: 42upx;
	line-height: 45upx;
	font-size: 32upx;
	color: rgba(194, 194, 194, 1);
	flex: 1;
	margin-left: 22upx;
}
.logon-sub {
	width: 600upx;
	height: 94upx;
	background: rgba(41, 153, 248, 1);
	border-radius: 45upx;
	text-align: center;
	line-height: 94upx;
	margin-top: 90upx;
	color: #fff;
	font-size: 34upx;
}
</style>
