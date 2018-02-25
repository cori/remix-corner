(function() {
  
  var script = document.getElementById('remix-banner');
  var url = script === null ? '' : script.src;
  var size = qs('size', url);
  
  console.log(size);
  
  var projectName = location.hostname.split('.')[0];

  document.write( '<a href="https://glitch.com/edit/#!/remix/' + projectName + '" title="Remix me on Glitch!">' +
    '<img width="' + size + 'px" height="' + size + 'px" alt="Remix on Glitch" src="https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fapple-touch-icon.png" style="position: absolute; top: 20px; right: 10px;  border: 0; transform: rotate(45deg); z-index: 100;">' +
    '</a>');
})();

function qs (term, url = '') {
  
  var qs = '';
  if ( url === '' ) {
    qs = location.search.substr(1);
  } else {
    qs = url.split('?')[1];
  }
  qs = qs.split('&');
  
  for( var i = 0; i < qs.length; i++) {
    if( qs[i].startsWith(term) ) {
      qs = qs[i].split('=')[1];
    }
  }
  
  return isNaN(Number.parseInt(qs)) ? 40 : qs;
}