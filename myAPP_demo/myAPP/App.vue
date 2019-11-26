<script>
export default {
	onLaunch: function() {
		
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
/* #ifndef APP-NVUE */
button::after {
	border: none;
}
page {
	font-family: PingFang SC;
	box-sizing: border-box;
	min-height: 100%;
}
text,
view {
	box-sizing: border-box;
	line-height: 1;
}
.container{
	display: flex;
	flex-direction: column;
}
/* #endif */
</style>
