//可変ボックス
window.onload=function(){
  jQuery(function() {
      jQuery( '.global_menu' ).resizable({
          minWidth: 100,
          maxWidth: 400
      });
      jQuery( '.page_menu' ).resizable({
          minWidth: 150,
          maxWidth: 600
      });
      jQuery( '.main' ).resizable({
      });
  });
}
//ボックス非表示
$(document).ready(function(){
  $(".global_menu_btn").click(function () {
    jQuery( '.global_menu' ).toggle( 'fade', '', 100 );
  });
});
