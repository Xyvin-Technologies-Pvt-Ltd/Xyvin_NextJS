import type { ContactInput } from "./contact";

// Content screening for contact-form messages.
//   block   – obvious bot/link spam: dropped silently (the sender still sees "sent").
//   suspect – sales-pitch spam: still delivered, but the subject is tagged "[Possible spam]"
//             so it can be filtered in the inbox without risking a real enquiry.

const URL_PATTERN = /\b(?:https?:\/\/|www\.)\S+/gi;

const SPAM_PHRASES: RegExp[] = [
  /\bseo\s+(?:services?|agency|expert|package|audit)\b/i,
  /\bback-?links?\b/i,
  /\bguest\s+posts?\b/i,
  /\bfirst\s+page\s+of\s+google\b/i,
  /\brank(?:ing)?\s+(?:higher|your\s+(?:site|website|business))\b/i,
  /\b(?:boost|increase|grow)\s+(?:your\s+)?(?:website\s+)?(?:traffic|rankings?|sales\s+by)\b/i,
  /\b(?:web|website|organic)\s+traffic\b/i,
  /\bdear\s+(?:sir|madam|business\s+owner|website\s+owner)\b/i,
  /\b(?:crypto(?:currency)?|bitcoin|forex|casino|betting|viagra|cialis)\b/i,
  /\b(?:business\s+)?loans?\s+(?:offer|approval|funding)\b/i,
  /\bwhite[-\s]label\b/i,
  /\bunsubscribe\b/i,
  /\bno\s+longer\s+wish\s+to\s+receive\b/i,
];

export interface SpamVerdict {
  block: boolean;
  suspect: boolean;
  reasons: string[];
}

export function screenContact(input: ContactInput): SpamVerdict {
  const reasons: string[] = [];
  const links = input.message.match(URL_PATTERN)?.length ?? 0;

  // Hard blocks
  if (/(?:https?:\/\/|www\.|@)/i.test(input.name)) reasons.push("link or email in name");
  if (/\[url=|\[link=|<a\s+href/i.test(input.message)) reasons.push("BBCode/HTML link markup");
  if (links >= 3) reasons.push(`${links} links in message`);
  const block = reasons.length > 0;

  // Soft flags
  const phraseHits = SPAM_PHRASES.filter((re) => re.test(`${input.company}\n${input.message}`));
  if (phraseHits.length > 0) reasons.push(`sales/spam phrases (${phraseHits.length})`);
  if (links === 2) reasons.push("2 links in message");
  const suspect = !block && reasons.length > 0;

  return { block, suspect, reasons };
}
