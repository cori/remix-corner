(function() {
  var projectName = location.hostname.split('.')[0];

document.write( '<a href="https://glitch.com/edit/#!/remix/' + projectName + '">' +
                '<img width="40" height="26" src="https://glitch.com/edit/images/logos/glitch/logo-day.svg" style="position: absolute; top: 20; border: 0; right: 10; transform: rotate(45deg); z-index: 100;">' +
                '</a>');
})();