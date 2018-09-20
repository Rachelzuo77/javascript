xAxis:{
	type:'datetime',
	labels: {
		formatter: function () {
			return HighCharts.dateFormat('%Y-%m-%d %H:%M', this.value);//时间戳转日期格式
		},
		rotation: -45//让标签旋转-45°
	}
}