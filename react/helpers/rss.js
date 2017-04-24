export function parseRss(rss) {
  var body = rss.channel[0];
  return {
    items: body.item
  }
}
