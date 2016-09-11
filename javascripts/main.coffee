msnry = null
ref = new Firebase "https://personal-sites.firebaseio.com"


renderContent = ($el) ->
  type = $el.data 'type'
  $('#content').html teacup.render ->
    switch type
      when 'text'
        div '.panda', -> 'wakka'
      else
        div '.sss', -> 'rr'

$( document ).ready ->
  $('.desktop-nav > .link').on 'click', (e) ->
    $el = $ e.currentTarget
    renderContent $el
