(function() {
  
  var projectName = location.hostname.split('.')[0];

  document.write( '<a href="https://glitch.com/edit/#!/remix/' + projectName + '" title="Remix me on Glitch!">' +
    '<img width="40" height="26" alt="Remix on Glitch" src="https://glitch.com/edit/images/logos/glitch/logo-day.svg" style="position: absolute; top: 20px; right: 10px;  border: 0; transform: rotate(45deg); z-index: 100;">' +
    '</a>');
})();