<template>
	<view class="content">
		<view class="list">
			<view class="uni-form-item uni-column">
				<view class="title">最大值</view>
				<input class="uni-input" v-model="max" type="number" placeholder="最大值" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">最小值</view>
				<input class="uni-input" v-model="min" type="number" placeholder="最小值" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">时间间隔(ms)</view>
				<input class="uni-input" v-model="interval" type="number" placeholder="时间间隔" />
			</view>
		</view>
		<view class="button-area">
			<button @click="onSave">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				max:100,
				min:0,
				interval:100
			}
		},
		created(){
			let setting=uni.getStorageSync('setting')||{max:100,min:0,interval:100}
		    this.max=setting.max
			this.min=setting.min
			this.interval=setting.interval
		},
		methods: {
			onSave(){
			 let setting={max:this.max,min:this.min,interval:this.interval}	
			 if(!setting.max||!setting.min||!setting.interval){
				 uni.showToast({
				                 title: '请填写完整内容',
				                 icon:'none',
				                 duration:650
				             });
			 }
			uni.setStorageSync("setting",setting)
			console.log(setting)
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 40rpx;
	}
	.uni-form-item{
		margin-top:20rpx;
	}
	.uni-input{
		border-bottom:1px solid rgb(169, 169, 169);
		font-size: 26rpx;
		margin-top:16rpx;
	}
	.button-area{
		margin-top: 120rpx;
		display: flex;
		justify-content: center;
		
		button{
			width: 400rpx;
		}
	}
</style>
