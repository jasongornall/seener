// Generated by CoffeeScript 1.8.0
var msnry, ref, renderContent;

msnry = null;

ref = new Firebase("https://personal-sites.firebaseio.com");

renderContent = function($el) {
  var type;
  type = $el.data('type');
  return $('#content').html(teacup.render(function() {
    switch (type) {
      case 'text':
        return div('.panda', function() {
          return 'wakka';
        });
      default:
        return div('.sss', function() {
          return 'rr';
        });
    }
  }));
};

$(document).ready(function() {
  return $('.desktop-nav > .link').on('click', function(e) {
    var $el;
    $el = $(e.currentTarget);
    return renderContent($el);
  });
});
