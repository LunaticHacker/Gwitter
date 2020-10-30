import parseGweet from "../functions/parser.js";
async function getEvents(user) {
  let res1, res2, json1, json2, final;
  if (!user) {
    res1 = await fetch("https://api.github.com/events");
    final = await res1.json();
  } else {
    res1 = await fetch(`https://api.github.com/users/${user}/events`);
    res2 = await fetch(`https://api.github.com/users/${user}/received_events`);
    json1 = await res1.json();
    json2 = await res2.json();
    final = json1.concat(json2);

    final.sort((x, y) => {
      return Date.parse(y.created_at) - Date.parse(x.created_at);
    });
  }
  let events = parseGweet(final);
  return events;
}
async function getUser(user) {
  let res = await fetch(`https://api.github.com/users/${user}`);
  let json = await res.json();
  return json;
}
export { getEvents, getUser };
