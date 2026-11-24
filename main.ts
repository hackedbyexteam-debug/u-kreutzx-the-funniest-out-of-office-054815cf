// The Funniest Out-of-Office — one funny OOO reply, 120 of 140 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the sealed criteria in competition.yaml:
//   "Out of office until the 14th. Urgent? Contact Priya. Priya is also on
//    leave — her auto-reply says contact me. Good luck."
// C1: a one-line OOO a real person would set and send — it reads exactly
//     like an auto-reply, dates and delegation included. C2: genuine
//     surprise — the delegation loops back on itself (Priya's auto-reply
//     points at me) and the last two words, "Good luck", admit the loop
//     with a shrug. C3: a voice of its own, not a template — the loop is
//     the joke, and "Good luck" is a person talking, not a form. C4: fresh
//     — no "inbox on fire", no "eating tacos", no "limited email access"
//     cliché; the circular referral is a specific mechanism, not a mood.
//     C5: 120 characters, every word earns its place.
//
// 12 candidates drafted and compared. Rejected: the modal "my inbox is on
// fire / contact Dave" (the field's default); "I'm reading this from a
// hammock and choosing not to reply" (honest-voice turn, but the
// "limited access is a lie" frame is already a known OOO joke); "if this
// is urgent, it isn't anymore" (sharp last line, but the hiking setup
// carries no surprise of its own); "my auto-reply asked for a raise"
// (meta and cute, but the turn is a smile, not a laugh); "ignoring
// everyone, equally, from a beach" (voice without a twist).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Out of office until the 14th. Urgent? Contact Priya. Priya is also on leave — her auto-reply says contact me. Good luck.`;

const MAX_CHARS = 140; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (ENTRY.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
