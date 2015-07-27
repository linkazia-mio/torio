$(window).on('resize', function(){});
$(function(){
     function adjust(){
          var h = $(window).height(); //ウィンドウの高さ
          $('.main').css('height', h); //可変部分の高さを適用
     };
     function adjust(){
          var h = $(window).height(); //ウィンドウの高さ
          var h1= $('.page_menu .config').height(); //他要素の高さ
          var h2= $('.page_menu .page_menu_footer').height(); //他要素の高さ
          $('.page_menu_inner').css('height', h-h1-h2-53); //可変部分の高さを適用
          $('.page_menu_footer').css('top', h-h1-h2); //可変部分の高さを適用
     }
     adjust();
     $(window).on('resize', function(){
          adjust();
     })
});

$(function(){
      function adjust(){
           var h = $(window).height(); //ウィンドウの高さ
           $('.global_menu_inner').css('height', h); //可変部分の高さを適用
      }
     adjust();
     $(window).on('resize', function(){
          adjust();
     })
});

$(function(){
     function adjust(){
          var h = $(window).height(); //ウィンドウの高さ
          $('.viewers_list').css('max-height', h/2); //可変部分の高さを適用
     }
     adjust();
     $(window).on('resize', function(){
          adjust();
     })
});

$(document).click(function() {
  $('.option_box,.add_page,.activity_box,.check_box').hide();
});

//Activity
$(document).ready(function(){
  $(".activity p").click(function () {
    $(".activity_box").toggle( 'fade', '', 100 );
    event.stopPropagation();
    $('.add_page,.check_box,.option_box').hide();
  });
});

//Check box
$(document).ready(function(){
  $(".config .check").click(function () {
    $(".check_box").toggle( 'fade', '', 100 );
    event.stopPropagation();
    $('.add_page,.activity_box,.option_box').hide();
  });
});

//Option box
$(document).ready(function(){
  $(".config .option").click(function () {
    $(".option_box").toggle( 'fade', '', 100 );
    event.stopPropagation();
    $('.add_page,.activity_box,.check_box').hide();
  });
});

//Add page
$(document).ready(function(){
  $(".page_menu_footer p").click(function () {
    $(".add_page").toggle( 'fade', '', 100 );
    event.stopPropagation();
    $('.option_box,.activity_box').hide();
  });
});

$(function(){
  $('#add_member,#add_group,#viewers_box').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });
});

$(function(){
  $(window).load(function(){
     $(".global_menu_inner").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $(".page_menu_inner").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $(".detail .file").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
          updateOnContentResize: true
        }
     });
     $(".viewers_list").mCustomScrollbar({
       autoHideScrollbar: true,
       scrollInertia: 0,
       advanced:{
          autoScrollOnFocus: true,
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

  //File可変グリッド
  $(function(){
      $('#masonry').masonry({
          itemSelector: '.grid',
          isFitWidth: true,
          isAnimated: true
      });
  });
  jQuery(window).resize(function(){
    $('#masonry').masonry({
        itemSelector: '.grid',
        isFitWidth: true,
        isAnimated: true
    });
  });

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
        minWidth: 450
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
}
