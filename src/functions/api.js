import parseGweet from "../functions/parser.js";
async function getEvents() {
  let res = await fetch("https://api.github.com/events");
  let json = await res.json();
  let events = parseGweet(json);
  return events;
}
export { getEvents };
