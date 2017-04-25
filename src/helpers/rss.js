/**
  Custom function to parse the RSS feed top level object into an easier to use
  plain JS object

  @param {Object} rss
  @return {Object}
*/
export function parseRss(rss) {
  var body = rss.channel[0];
  return {
    items: body.item.map(formatRssItem)
  }
}

/**
  Takes the sourceList from state and checks if the source provided exists

  @param {Array} list
  @param {String} source
  @return {bool}
*/
export function checkSourceListForSource(list = [], source) {
  return !!list.find(srcObj => srcObj.source === source);
}

/**
  Formats an rss item by removing the values from arrays and returning them as
  flat values

  To be used as part of a map function
*/
function formatRssItem(item) {
  return {
    description: item.description ? item.description[0] : null,
    guid: item.guid ? item.guid[0] : null,
    link: item.link ? item.link[0] : null,
    thumbnail: item['media:thumbnail'] ? item['media:thumbnail'][0] : null,
    pubDate: item.pubDate ? item.pubDate[0] : null,
    title: item.title ? item.title[0] : null,
    content: item['content:encoded'] ? item['content:encoded'][0] : null
  }
}
