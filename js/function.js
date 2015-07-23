$(function(){
  $(window).load(function(){
     $(".global_menu_inner").mCustomScrollbar();
     $(".page_menu_inner").mCustomScrollbar();
     $(".detail").mCustomScrollbar({
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

jQuery(function($) {
  $('.note').each(function() {
    var $target = $(this);

    // オリジナルの文章を取得する
    var html = $target.html();

    // 対象の要素を、高さにautoを指定し非表示で複製する
    var $clone = $target.clone();
    $clone
      .css({
        display: 'none',
        position : 'absolute',
        overflow : 'visible'
      })
      .width($target.width())
      .height('auto');

    // DOMを一旦追加
    $target.after($clone);

    // 指定した高さになるまで、1文字ずつ消去していく
    while((html.length > 0) && ($clone.height() > $target.height())) {
      html = html.substr(0, html.length - 1);
      $clone.html(html + '...');
    }

    // 文章を入れ替えて、複製した要素を削除する
    $target.html($clone.html());
    $clone.remove();
  });
});
