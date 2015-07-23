$(window).on('resize', function(){});
$(function(){
     function adjust(){
          var h = $(window).height(); //ウィンドウの高さ
          $('.main').css('height', h); //可変部分の高さを適用
     }
     adjust();
     $(window).on('resize', function(){
          adjust();
     })
});
$(window).on('resize', function(){});
$(function(){
     function adjust(){
          var h = $(window).height(); //ウィンドウの高さ
          var h1= $('.page_menu .config').height(); //他要素の高さ
          var h2= $('.page_menu .page_menu_footer').height(); //他要素の高さ
          $('.page_menu_inner').css('height', h-h1-h2); //可変部分の高さを適用
          $('.page_menu_footer').css('top', h-h1-h2); //可変部分の高さを適用
     }
     adjust();
     $(window).on('resize', function(){
          adjust();
     })
});

$(function(){
  $(window).load(function(){
     $(".global_menu_inner").mCustomScrollbar({
       autoHideScrollbar: true
     });
     $(".page_menu_inner").mCustomScrollbar({
       autoHideScrollbar: true
     });
     $(".detail").mCustomScrollbar({
       autoHideScrollbar: true,
       advanced:{
          updateOnContentResize: true
        }
     });
  });
});

//ボックス非表示
$(document).ready(function(){
  $(".global_menu_btn").click(function () {
    jQuery( '.global_menu' ).toggle( 'fade', '', 100 );
  });
});

window.onload=function(){
  //画面幅移動
  jQuery(function() {
      jQuery( '.global_menu' ).resizable({
          minWidth: 100,
          maxWidth: 400
      });
      jQuery( '.page_menu' ).resizable({
          minWidth: 150,
          maxWidth: 600
      });
      jQuery( '.detail' ).resizable({
      });
  });

  //タスクドーナツグラフ 緑
  var Dougnut_data = [
    {
      value: 60,
      color:"#43aea8"
    },
    {
      value: 40,
      color: "#e0f2f2"
    }
  ];
  //タスクドーナツグラフ 黄色
  var Dougnut_data_yellow = [
    {
      value: 40,
      color:"#feb22e"
    },
    {
      value: 60,
      color: "#fff4e0"
    }
  ];
  //タスクドーナツグラフ 赤
  var Dougnut_data_red = [
    {
      value: 10,
      color:"#ed6d44"
    },
    {
      value: 90,
      color: "#fbebea"
    }
  ];

  var options = {
    percentageInnerCutout : 70,
    animationSteps : 20,
    animationEasing: "easeOutQuart",
    showTooltips: false,
  //   //String - A legend template
  //   legendTemplate : '<% for (var i=0; i<segments.length; i++){ %><p style="color:<%=segments[i].fillColor%>"><%= Math.ceil(segments[i].value / total * 1000) / 10 %>%</p><% } %>',
  //   onAnimationComplete: function() {
  //     $(".number").html(this.generateLegend()).fadeIn();
  //  }
  }

  var myDoughnut = new Chart(document.getElementById("task_graph_green").
  getContext("2d")).Doughnut(Dougnut_data,options);
  var myDoughnut = new Chart(document.getElementById("task_graph_red").
  getContext("2d")).Doughnut(Dougnut_data_red,options);
  var myDoughnut = new Chart(document.getElementById("task_graph_yellow").
  getContext("2d")).Doughnut(Dougnut_data_yellow,options);
  var html = graph.generateLegend();
}
