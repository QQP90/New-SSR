<template>
  <div>
    高德地图
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 页面全部加载完之后，执行
    window.onLoad = function() {
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        // center: [116.397428, 39.90923],//中心点坐标，天安门广场
        viewMode: "3D" //使用3D视图
      });

      //实时路况图层
      var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
      });
      map.add(trafficLayer); //添加图层到地图
      // // 添加标记点
      // var marker = new AMap.Marker({
      //     // content:"llq",
      //     position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      //     title: '北京'
      // })
      // map.add(marker);//添加到地图
      // 异步加载插件
      var toolbar = new AMap.ToolBar();
      map.addControl(toolbar);
      // 驾车路线
      var driving = new AMap.Driving({
        // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
        policy: AMap.DrivingPolicy.LEAST_TIME,
        // map 指定将路线规划方案绘制到对应的AMap.Map对象上
        map,
        // panel 指定将结构化的路线详情数据显示的对应的DOM上，传入值需是DOM的ID
        panel: "panel"
      });

      var points = [
        { keyword: "吉山幼儿园", city: "广州" },
        { keyword: "长隆", city: "广州" }
      ];

      driving.search(points, function(status, result) {
        // 未出错时，result即是对应的路线规划方案
      });
    };
    // 引入高德地图的js 文件
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=cb77e0951f5bfc0a20186f582a1e61b8&callback=onLoad&plugin=AMap.ToolBar,AMap.Driving";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);   
  }
};
</script>

<style>
#container {
  width: 500px;
  height: 500px;
}
#panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
}
#panel .amap-call {
  background-color: #009cf9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#panel .amap-lib-driving {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
</style>
