/**
 * 2019年4月5日12:44:58
 * 简单封装uni-app请求，下载，上传。
 */
let _baseuUrl = '';
let _isUpOpenDown = false; //是否在上传js中引入下载的js
let _defaultReq = {
	isreq: true, //是否已经打开ajax，默认为true
	url: '', //独立的url ajax
	baseData: {}, //ajax基本参数
	header: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	},
	type: 'GET',
	dataType: 'json',
	responseType: 'text',
	beforeSend:r=>r,
	beforeFinsh: r=> r
}
let _defaultUp = {
	url: '', //独立的url 
	baseData: {},
	header: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	},
}

/**
 * 代理控制 2019年4月6日16:06:05
 */
let ProxyControll = (obj, callback = (key, val, oldval) => {}) => {
	for (let key in obj) {
		let itemval = obj[key];
		Object.defineProperty(obj, key, {
			enumerable: true,
			get: function() {
				return this[`HHYANG_${key}`]
			},
			set: function(newvalue) {
				callback(key, newvalue, this[`HHYANG_${key}`]);
				this[`HHYANG_${key}`]= newvalue;
			}

		})
		obj[key] = itemval;
	}
}
ProxyControll(_defaultReq);
ProxyControll(_defaultUp);

class Request {
	constructor(arg) {
		this.platform = this.platformChunk();
		this.defaultReq = _defaultReq;
		this.defaultUp = _defaultUp;
	}
	set baseuUrl(value) {
		_baseuUrl = value;
		_defaultReq.url = value;
		_defaultUp.url = value;
	}
	get baseuUrl() {
		return _baseuUrl;
	}
	set isUpOpenDown(value) {
		_isUpOpenDown = value;
	}
	get isUpOpenDown() {
		return _isUpOpenDown;
	}
	/**
	 * 基本ajax请求
	 */
	ajax({
		path = '', //请求路径
		title = false, //请求头部 默认为false不显示, 传入字符串则显示 推荐7个字内
		header = this.defaultReq.header, //请求header 默认为"application/x-www-form-urlencoded"
		data = {}, //请求数据，默认为空对象
		type = this.defaultReq.type, //请求类型 默认为'GET'
		dataType = this.defaultReq.dataType, //返回数据类型，默认为json。会对返回数据做一个JSON.parse
		responseType = this.defaultReq.responseType, //设置响应的数据类型默认为'text'
		abortFun = _bt => {}
	} = {}, ...extra) {
		return new Promise(async (resolve, reject) => {
			if (!this.defaultReq.isreq) {
				return reject('要想使用ajax，请开放isreq 设置为true');
			}
			Object.assign(data, this.defaultReq.baseData); //合并参数
			if (typeof header === 'string') { //如果用户只想设置content-type
				header = {
					'content-type': header
				};
			}
			let req_url = typeof path==="string"?path:path.path;
			let beforeInfo={
				description:path.description?path.description:"description",
				filter:!path.filter,
				url: this.defaultReq.url + req_url,
				method: type,
				dataType,
				responseType,
				data,
				header,
			}
			let verifyBeforeInfo =await this.defaultReq.beforeSend(beforeInfo);		//用户自定义后的请求参数
			if(!verifyBeforeInfo){
				return reject( Object.assign(beforeInfo,{beforeClose:true}));
			}
			if (title) { //显示请求提示
				uni.showLoading({
					title,
					mask: true,
				});
			}
			const requestTask = uni.request({
				...beforeInfo,
				complete:async ({
					statusCode,
					...finsh,
				}={}) => {
					let callData = Object.assign({
						extra
					}, finsh,{statusCode});
					if (statusCode == 200) {
						let verifyRes =await this.defaultReq.beforeFinsh(callData);
						if(verifyRes){
							resolve(verifyRes);
						}
					}else{
						reject(callData)
					}
					if (title) {
						uni.hideLoading();
					}
				}
			});
			abortFun(beforeInfo,requestTask);
		})
	}
	/**
	 * 2019年4月6日12:05:55 
	 * 封装上传文件功能
	 */
	ajaxFile({
		path = '',
		title = false,
		header = this.defaultUp.header,
		filePath = '',
		fileName = '',
		extra = {},
		abort = bt => {},
		_isFirst = true,
		_autoClose = true,
		...args
	} = {}) {
		Object.assign(extra,this.defaultUp.baseData);
		return new Promise((resolve, reject) => {
			if (title && _isFirst) { //显示请求提示
				uni.showLoading({
					title,
					mask: true,
				});
			}
			const url=this.defaultUp.url + path;
			let beforeInfo=Object.assign({},{path:url,header,filePath,fileName,extra,args})
			const uploadTask = uni.uploadFile({
				url,
				filePath,
				name: fileName,
				header,
				formData: extra,
				complete: ({
					statusCode = 0,
					...finsh
				} = {}) => {
					if (title && _autoClose) {
						uni.hideLoading();
					}
					if (statusCode == 200) {
						return resolve(finsh);
					}
					return reject(finsh);
				}
			});
			abort(beforeInfo,uploadTask);
		})
	}
	/**
	 * 内部下载文件，仅内部调用
	 */
	downFiles({
		abort = () => {},
		path = '',
		title = false,
		index=0,	//所属下载索引
		...extra
	} = {}) {
		return new Promise((resolve, reject) => {
			if (!path) {
				reject('请选设置请求路径');
			}
			if (title) {
				uni.showLoading({
					title,
					mask: true,
				});
			}
			const downloadTask = uni.downloadFile({
				url: path,
				...extra,
				complete: ({
					statusCode = 0,
					...finsh
				} = {}) => {
					if (title) {
						uni.hideLoading();
					}
					if (statusCode === 200) {
						return resolve(Object.assign({}, {
							statusCode,
							params: extra,
							...finsh
						}));
					}
					return reject(finsh)
				},
			})
			abort({
				abort,
				path,
				title,
				index,
				...extra
			},downloadTask);
		})
	}
	/**
	 * 设置代理
	 */
	proxy(obj, callback) {
		ProxyControll(obj, callback);
	}
	/**
	 * 运行环境判断
	 */
	platformChunk() {
		if (typeof plus == 'undefined') {
			return 1;
		}
		return 0;
	}
}

export const req = new Request();
export const RQ = Request;
