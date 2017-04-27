import { parseRss, checkSourceListForSource } from '../rss';

const list = [{name: "test", source: "url"}];
const rss = {
  channel: [{
    item: [{
      description: ["description"],
      guid: [{_: "guid"}],
      link: ["link"],
      'media:thumbnail': [{$: "thumbnail"}],
      pubDate: ["pubDate"],
      title: ["title"]
    }]
  }]
};

describe('checkSourceListTests', () => {
  it('returns true if the url exists in the source list', () => {
    expect(checkSourceListForSource(list, "url")).toBeTruthy();
  });
  it('returns false if the url doesnt exist in the source list', () => {
    expect(checkSourceListForSource(list, "wrong")).toBeFalsy();
  });
  it('returns false if there are no items in the source list', () => {
    expect(checkSourceListForSource([], "url")).toBeFalsy();
  });
});

describe('parseRssTests', () => {
  it('returns the correct top level keys', () => {
    expect(parseRss(rss)).toHaveProperty('items');
    expect(parseRss(rss)).toHaveProperty('description');
    expect(parseRss(rss)).toHaveProperty('link');
    expect(parseRss(rss)).toHaveProperty('title');
  });
  it('returns the items properties as flat level keys', () => {
    var parsedRss = parseRss(rss);
    expect(parsedRss.items).toHaveLength(1);
    expect(parsedRss.items[0]).toMatchObject({
      description: "description",
      guid: "guid",
      link: "link",
      thumbnail: "thumbnail",
      pubDate: "pubDate",
      title: "title",
    })
  });
});
