//可変ボックス
window.onload=function(){
  jQuery(function() {
      jQuery( '.global_menu' ).resizable({
          ghost: true,
          minWidth: 200
      });
      jQuery( '.page_menu' ).resizable({
          ghost: true,
          minWidth: 200
      });
      jQuery( '.main' ).resizable({
          ghost: true,
      });
  });
}
//ボックス非表示
$(document).ready(function(){
  $(".global_menu_btn").click(function () {
    jQuery( '.global_menu' ).toggle( 'fade', '', 100 );
  });
});
