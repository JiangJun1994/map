
	function tooltipHtml(n, d){	/* 生成小标签函数 */
		return "<h4>"+n+"</h4><table>"+
			"<tr><td>收入：</td><td>"+(d.income)+"</td></tr>"+
			"</table>";
	}
	var contanier = document.getElementById('contanier');
	var timer = null;
	var sampleData ={};
	/*var citys = ["4510", "4512", "4503", "4501", "4502", "4514", "4513", "4509", "4504", "4511", "4507",
	"4508", "4506", "4505"];*/

	var citys = ["6209", "6207", "6230", "6206", "6212", "6210", "6204", "6211", "6205", "6201", "6208",
	"6229", "6203", "6202"];

	/* 生成随机数据，包括income 和 color */
	// citys.forEach(function(item){
	// 	var income = Math.round(1000*Math.random());
	// 	sampleData[item]={
	// 		id:item,
	// 		income:income + "亿",
	// 		color:d3.interpolate("#ffffcc", "#800026")(income/1000)
	// 	};
	// });

	/* 调用函数绘图到target svg */
	// GuangXi.draw('#target', sampleData, tooltipHtml);
	// citys.forEach(function(item){
	// 	var income = Math.round(1000*Math.random());
	// 	sampleData[item]={
	// 		id:item,
	// 		income:income + "亿",
	// 		color:d3.interpolate("#ffffcc", "#800026")(income/1000)
	// 	};
	// });
	/* 每隔2秒更新地图 */
	timer = setInterval(function(){

		citys.forEach(function(item){
			var income = Math.round(1000*Math.random());
			sampleData[item]={
				id:item,
				income:income + "亿",
				color:d3.interpolate("#ebcaff", "#5f009a")(income/1000)
			};
		});
/*    color:d3.interpolate("#ebcaff", "#5f009a")(income/1000) 紫色
     color:d3.interpolate("#76c6ff", "#0011a0")(income/1000) 蓝 色
*/
		GanSu.draw('#target', sampleData, tooltipHtml);
		// GuangXi.draw('#target', sampleData, tooltipHtml);


	},2000);
