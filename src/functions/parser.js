function parseGweet(events) {
  let eventsArray = [];
  for (let e of events) {
    if (e.type === "PullRequestEvent") {
      eventsArray.push({
        actor: e.actor,
        id: e.payload.id,
        gweet: `Just ${e.payload.action} Pull Request #${e.payload.number} in ${e.repo.name}`,
      });
    } else if (e.type === "ForkEvent") {
      eventsArray.push({
        actor: e.actor,
        id: e.payload.id,
        gweet: `Just Forked this cool repo ${e.payload.forkee.name}`,
      });
    } else if (e.type === "CommitCommentEvent") {
      eventsArray.push({
        actor: e.actor,
        id: e.payload.id,
        gweet: `${e.payload.comment.body}`,
      });
    }
  }
  return eventsArray;
}
export default parseGweet;
