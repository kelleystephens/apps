(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#toggleMe').click(change);
  }

  function change(){
    $(this).toggleClass('change');
  }


})();
