# 上拉下拉

**非特殊情况下，不允许使用页面自带上拉加载，下拉刷新**

**[使用mescroll-uni](http://www.mescroll.com/uni.html#tagUpCallback)**

例：

```vue
<template>
	<view class="container flex-direction_column">
		<view class="head_serch">
			<uni-search  @onSearch="onSearch" @onInput="onInput"></uni-search>
		</view>
		<view class="scroll-wrap">
			<mescroll-uni  
                 :fixed="false" 
                  top="0" 
                  :down="downOption"
                   @down="downCallback"
                   :up="upOption"
                    @up="upCallback"
                     @init="mescrollInit">
				<view class="scroll-content">
					<view class="monitor-view" v-for="(item, index) in dataList" :key="index">
						<view>item</view>
					</view>
				</view>
			</mescroll-uni>
		</view>
	</view>
</template>

<script>
var _self;
export default {
	data() {
		return {
			dataList: [],
			mescroll: null, //mescroll实例对象
			downOption:{
				auto:false // 不自动加载
			},
			upOption:{
				auto:true, // 不自动加载
				textLoading:"正在加载",
				textNoMore:"没有更多数据了",
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 20// 每页数据的数量
				},
				noMoreSize:5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
				empty:{}
			}
		};
	},
	onLoad() {
		_self = this;
	},
	methods: {
		onSearch(e){
			_self.keywords  = e 
			_self.mescroll.resetUpScroll();
		},
		onInput(e){
			if(!e){
				_self.keywords = "";
				_self.mescroll.resetUpScroll();
			}
		},
		mescrollInit(mescroll) {
			this.mescroll = mescroll;
		},
		/*下拉刷新的回调 */
		downCallback(mescroll) {
			_self.getListDataFromNet(
				0,
				1,
				data => {
					mescroll.endSuccess();
					_self.dataList.unshift(data[0]);
				},
				() => {
					//联网失败的回调,隐藏下拉刷新的状态
					mescroll.endErr();
				}
			);
		},
		upCallback(mescroll) {
			_self.getListDataFromNet(
				mescroll.num,
				mescroll.size,
				curPageData => {
					mescroll.endSuccess(curPageData.length);
					//设置列表数据
					if (mescroll.num == 1) _self.dataList = []; //如果是第一页需手动制空列表
					_self.dataList = _self.dataList.concat(curPageData); //追加新数据
				},
				() => {
					mescroll.endErr();
				}
			);
		},
		getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            //数据请求
			_self.$ajax({
				path: _self.$api.video_monitor,
				data: {
					admin_id:_self.$common.getUserInfo(),
					keyword:_self.keywords,
					page:pageNum,
					pageSize:pageSize
				},
				success(res) {
					let { data, code, msg } = res.data;
					let listData = [];
                        listData = data;//数据
					successCallback && successCallback(listData);
				}
			});
		}
	}
};
</script>

<style scoped>
.container {
	background-color: #f6f6f6;
	align-items: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
</style>

```

