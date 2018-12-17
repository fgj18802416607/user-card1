import { Component, OnInit } from '@angular/core';


declare var AMap: any;
declare var AMapUI: any;
@Component({
  selector: 'app-practice4',
  templateUrl: './practice4.component.html',
  styleUrls: ['./practice4.component.css']
})
export class Practice4Component implements OnInit {
  private info: any;
  constructor() { }

  ngOnInit() {
      const userDetail = JSON.parse(localStorage.getItem('user'));
      let map = new AMap.Map('container', {
        resizeEnable: true,
        center:[123.44778,41.722547],
        zoom:11,
        isHotspot: true
      });

      AMap.plugin('AMap.ToolBar',()=>{
        let toolbar = new AMap.ToolBar();
        map.addControl(toolbar)
        map.add(marker);
        map.setFitView();
      });

      const marker = new AMap.Marker({
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [123.44778,41.722547]
      });

      const placeSearch = new AMap.PlaceSearch();
      const infoWindow=new AMap.AdvancedInfoWindow({});
      map.on('hotspotclick', (result) => {
        placeSearch.getDetails(result.id, (status,result)=> {
          if (status === 'complete' && result.info === 'OK') {
            placeSearch_CallBack(result);
          }
        });
      });

      let placeSearch_CallBack = (data) =>{
        const poiArr = data.poiList.pois;
        const location = poiArr[0].location;
        infoWindow.setContent(createContent(poiArr[0]));
        infoWindow.open(map,location);
      }

      let createContent = (poi)=>{
        const s = [];
        s.push('<div class="info-title" style="font-weight: bolder;color: #fff;font-size: 14px;line-height: 26px;padding: 0 0 0 6px;background: #25A5F7;">'+poi.name+'</div>' +
          '<div class="info-content" style="padding: 4px;color: #666666;line-height: 23px;font: 12px Helvetica, \'Hiragino Sans GB\', \'Microsoft Yahei\', \'微软雅黑\', Arial;">'+"地址：" + poi.address);
        s.push("电话：" + poi.tel);
        s.push("类型：" + poi.type);
        s.push('<div>');
        return s.join("<br>");
      }

      AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {
        const marker = new AMap.Marker({
          map: map,
          zIndex: 888,
          position: map.getCenter()
        });

      this.info = new SimpleInfoWindow({
        infoTitle: '<strong>IT 国际</strong>',
        infoBody: '<div><strong>个人信息</strong> ' +
        '<br/> 姓名：' + userDetail.name + '' +
        '<br/> 性别：' + userDetail.gender + '' +
        '<br/> 年龄：' + userDetail.age + '' +
        '<br/> 电话：' + userDetail.tel + '' +
        '<br/> 地址：' + userDetail.address + '</div >',
        offset: new AMap.Pixel(0, -31)
      });

      AMap.event.addListener(marker, 'click', () => {
        this.openInfoWin(map , marker);
      });
    });
  }

  openInfoWin(map,marker) {
    this.info.open(map, marker.getPosition());
  }


  // getlocal(){
  //   const userDetail = JSON.parse(localStorage.getItem('user'));
    // console.log(userDetail.name);
    // let map = new AMap.Map('container', {
    //   resizeEnable: true,
    //   center:[123.44778,41.722547],
    //   zoom:11,
    //   isHotspot: true
    // });
    // AMap.plugin('AMap.ToolBar',function(){
    // AMap.plugin('AMap.ToolBar',()=>{
    //   let toolbar = new AMap.ToolBar();
    //   map.addControl(toolbar)
    //   map.add(marker);
    //   map.setFitView();
    // });

    // const marker = new AMap.Marker({
    //   icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
    //   position: [123.44778,41.722547]
    // });
    //构造地点查询类
    // const placeSearch = new AMap.PlaceSearch();
    // const infoWindow=new AMap.AdvancedInfoWindow({});
    // map.on('hotspotclick', (result) => {
      // placeSearch.getDetails(result.id, function(status, result)
      // {
    //   placeSearch.getDetails(result.id, (status, result) => {
    //     if (status === 'complete' && result.info === 'OK') {
    //       placeSearch_CallBack(result);
    //     }
    //   });
    // });
    //回调函数
    // function placeSearch_CallBack(data) { //infoWindow.open(map, result.lnglat);
    // let placeSearch_CallBack = (data)=>{
    //   const poiArr = data.poiList.pois;
    //   const location = poiArr[0].location;
    //   infoWindow.setContent(createContent(poiArr[0]));
    //   infoWindow.open(map,location);
    // }
    //信息窗体内容
    // function createContent(poi) {
    // let createContent = (poi)=>{
    //   const s = [];
    //   s.push('<div class="info-title" style="font-weight: bolder;color: #fff;font-size: 14px;line-height: 26px;padding: 0 0 0 6px;background: #25A5F7;">'+poi.name+'</div>' +
    //     '<div class="info-content" style="padding: 4px;color: #666666;line-height: 23px;font: 12px Helvetica, \'Hiragino Sans GB\', \'Microsoft Yahei\', \'微软雅黑\', Arial;">'+"地址：" + poi.address);
    //   s.push("电话：" + poi.tel);
    //   s.push("类型：" + poi.type);
    //   s.push('<div>');
    //   return s.join("<br>");
    // }
    // AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {
    //
    //   const marker = new AMap.Marker({
    //     map: map,
    //     zIndex: 888,
    //     position: map.getCenter()
    //   });

      // const infoWindow = new SimpleInfoWindow({
      //   infoTitle: '<strong>IT 国际</strong>',
      //   infoBody: '<div><strong>个人信息</strong> ' +
      //   '<br/> 姓名：' + userDetail.name + '' +
      //   '<br/> 性别：' + userDetail.gender + '' +
      //   '<br/> 年龄：' + userDetail.age + '' +
      //   '<br/> 电话：' + userDetail.tel + '' +
      //   '<br/> 地址：' + userDetail.address + '</div >',
      //   offset: new AMap.Pixel(0, -31)
      // });

      // function openInfoWin() {
    //   let openInfoWin = ()=>{
    //     infoWindow.open(map, marker.getPosition());
    //   }
    //
    //   AMap.event.addListener(marker, 'click', () => {
    //     openInfoWin();
    //   });
    // });
  // }
}
