# remix-corner

Makes a Glitch logo banner in the corner like GitHub's "Fork me on GitHub" banner, linking directly to a new remix of the current project. A mashup inspired by [https://remix.glitch.me/](https://remix.glitch.me/) and [https://glitchcorner.glitch.me/](https://glitchcorner.glitch.me/).

Simply include `<script src="https://remix-corner.glitch.me/glitch-corner.js"></script>` in any html file you'd like to show the remix corner on.

If you're using the README.md file as your project's homepage (which is rendered to html by [Showdown](http://showdownjs.com/)) then adding this snippet will add the corner banner to the rendered html:
```
var filterGlitchCornerExt = {
  type: 'output',
  filter: function(text, converter) {
    text = text + '\n<script src="https://remix-corner.glitch.me/glitch-corner.js"></script>';
    console.log(text);
    return text;
  }
};
const converter = new showdown.Converter({extensions: [filterGlitchCornerExt]});
```
Happy remixing!