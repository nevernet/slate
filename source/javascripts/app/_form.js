//= require ../lib/_jquery
//= require ../lib/_jquery.highlight

(function (window) {
  'use strict';

  function startTest(obj) { 
      var p = $(obj).parent();
      var form = p.children("div.sub")
      form.fadeToggle();
   }

   function postForm(obj) {
       var form = $(obj).parent();
       var method = form.prop("method")
       var url = form.prop("action")
       $(obj).parent().submit();

    //    $.ajax({

    //    });
   }

   window.startTest = startTest;
   window.postForm = postForm;
})(window);