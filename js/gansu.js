(function() {

	var GanSu = {};//创建GanSu对象

	//生成地理生成器
	var projection = d3.geo.mercator()
		.center([106, 38])//设置地图位置
		.scale(3000);//设置地图大小
	var path = d3.geo.path().projection(projection);

	//为GanSu对象绑定draw方法绘图
	GanSu.draw = function(id, data, toolTip) {
		var svg = d3.select(id);

		d3.json("js/gansu.json", function(error, gansu) {
			console.log(gansu.features)
			//绘图之前先清理上一次的图
            svg.selectAll(".state").remove();

			//绘图开始
			svg.selectAll("path")
				.data(gansu.features)
				.enter()
				.append("path")
				.attr("class", "state")
				.attr("d", path)
				.style("fill", function(d) {
					return data[d.properties.id].color;
				})
				.on("mouseover", function(d) {
					d3.select("#tooltip").transition().duration(200).style("opacity", 1);
					d3.select("#tooltip").html(toolTip(d.properties.name, data[d.properties.id]));
						// .style("left", (d3.event.pageX) + "px")
						// .style("top", (d3.event.pageY - 28) + "px");
				})
				.on("mouseout", function() {
					d3.select("#tooltip").transition().duration(500).style("opacity", 1);
				});
		});
	}
	this.GanSu = GanSu;
})();
