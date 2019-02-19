class Page {
  constructor(content) {
    this.content = content;
  }

  render() {
    return "<div>" + this.content + "</div>";
  }
}

class Post extends Page {
  constructor(tags, content) {
    super(content);
    this.tags = tags;
  }

  render() {
    var page = super.render();
    return "<ul>" + this.renderTags() + "</ul>" + page;
  }

  renderTags() {
    return "<li>" + this.tags.join("<li></li>") + "</li>";
  }
}

var page = new Page("Welcome to my site!");
var post = new Post(["news"], "A new product!");
