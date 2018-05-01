// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/src/templates/post.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/src/templates/page.js")),
  "component---src-templates-tag-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/src/templates/tag.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/dev-404-page.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/src/pages/index.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/layout-index.json"),
  "beach-day.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/beach-day.json"),
  "a-walk-in-the-park.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/a-walk-in-the-park.json"),
  "sailing-around-the-bay.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/sailing-around-the-bay.json"),
  "puppies.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/puppies.json"),
  "about.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/about.json"),
  "tag-fun.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/tag-fun.json"),
  "tag-play.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/tag-play.json"),
  "tag-obedient.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/tag-obedient.json"),
  "tag-fancy.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/tag-fancy.json"),
  "tag-cute.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/tag-cute.json"),
  "dev-404-page.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/dev-404-page.json"),
  "contact.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/contact.json"),
  "index.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/index.json"),
  "404-html.json": require("/Users/austriker/Documents/web-development/github-repos/madewithspark/client/.cache/json/404-html.json")
}