import parseGweet from "../functions/parser.js";
async function getEvents() {
  let res = await fetch("https://api.github.com/events");
  let json = await res.json();
  let events = parseGweet(json);
  return events;
}
async function getUser(user) {
  let res = await fetch(`https://api.github.com/users/${user}`);
  let json = await res.json();
  return json;
}
export { getEvents, getUser };
