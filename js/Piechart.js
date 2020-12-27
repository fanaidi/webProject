window.onload = function() {
	var ecPie = echarts.init(document.getElementById('ecPie'), 'lightTheme');
	var pieOption = {
		backgroundColor: '#fcf8e8', //背景颜色
		title: {
			text: '会员分类消费占比',
			x: 'center'
		},
		visualMap: {
			show: false, //不显示visualMap组件，只用于明暗度的映射
			min: 80, //映射的最小值为80
			max: 600, //映射的最大值为600
			inRange: {
				colorLightness: [0, 1] //明暗度的范围为0到1
			}
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%', //半径
			roseType: 'angle', //玫瑰样式--南丁格尔玫瑰图，突出角度
			//图形样式
			itemStyle: {
				//普通样式
				normal: {
					shadowBlur: 100, //阴影大小
					shadowOffsetX: 0, //阴影水平方向的偏移
					shadowOffsetY: 0, //阴影垂直方向的偏移
					shadowColor: 'rgba(0,0,0,0.5)' //阴影颜色
				},
				//高亮样式
				emphasis: {
					shadowBlur: 200, //阴影大小
					shadowColor: 'rgba(0,0,0,0.5)' //阴影颜色
				}
			},
			//文本样式
			label: {
				//文本普通样式
				normal: {
					textStyle: {
						color: 'rgba(0, 0, 0, 0.8)' //文字颜色（红绿蓝,透明度）-黑色
					},
					formatter: '{b} : {c} ({d}%)'
				}
			},
			//引导线样式
			labelLine: {
				//引导线普通样式
				normal: {
					lineStyle: {
						color: 'rgba(0, 0, 0, 0.4)' //引导线颜色（红绿蓝,透明度）-黑色
					}
				}
			},
			//具体数据
			data: [{
					name: '小米手机',
					value: 400,
					 itemStyle: { color: '#433D3C' }
				},
				{
					name: '电视',
					value: 274 ,
					itemStyle: { color: '#E9C496' }
				},
				{
					name: '笔记本',
					value: 310 ,
					itemStyle: { color: '#654062' }
				},
				{
					name: '家电',
					value: 335 ,
					itemStyle: { color: '#a7c5eb' }
				},
				{
					name: '红米手机',
					value: 235 ,
					itemStyle: { color: '#c70039' }
				}
			]
		}]
	}
	var option = {
	    title: {
	        text: '会员分类消费占比',
	        subtext: '纯属虚构',
	        left: 'center'
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c} ({d}%)'
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['小米手机', '电视', '笔记本', '家电', '红米手机']
	    },
	    series: [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius: '55%',
	            center: ['50%', '60%'],
	            data: [
	                {value: 335, name: '小米手机',itemStyle: { color: '#433D3C' }},
	                {value: 310, name: '电视',itemStyle: { color: '#E9C496' }},
	                {value: 234, name: '笔记本',itemStyle: { color: '#654062' }},
	                {value: 135, name: '家电',itemStyle: { color: '#a7c5eb' }},
	                {value: 1548, name: '红米手机',itemStyle: { color: '#c70039' }}
	            ],
	            emphasis: {
	                itemStyle: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};

	ecPie.setOption(option);
}
