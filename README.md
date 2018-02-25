# remix-corner

Makes a Glitch logo banner in the corner like GitHub's "Fork me on GitHub" banner, linking directly to a new remix of the current project. A mashup inspired by [https://remix.glitch.me/](https://remix.glitch.me/) and [https://glitchcorner.glitch.me/](https://glitchcorner.glitch.me/).

Simply include `<script src="https://remix-corner.glitch.me/glitch-corner.js"></script>` in any html file you'd like to show the remix corner on. 

If you're using the README.md file as your project's homepage (perhaps rendered to html by [Showdown](http://showdownjs.com/)) then adding this snippet will add the corner banner to the rendered html:
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

Also supports custom sizes (default size being 40px) by providing a size query string param and a specific id on the script tag like so: `<script id="remix-banner" src="https://remix-corner.glitch.me/glitch-corner.js?size=64"></script>`. For now the id _must_ be "remix-banner"; if you want to use a different id ... remix me!

Happy remixing!