// Social profile links, in display order. Used by Contact, CornerNavs (icons), and the
// schema.org `sameAs` list in _app.
export const SOCIALS = [
  { href: 'https://www.facebook.com/haotang0619/', name: 'Facebook' },
  { href: 'https://www.instagram.com/hao_tang_0619/', name: 'Instagram' },
  { href: 'https://github.com/haotang0619/', name: 'GitHub' },
  { href: 'https://leetcode.com/u/ht619/', name: 'LeetCode' },
  { href: 'https://www.linkedin.com/in/haotang0619/', name: 'LinkedIn' },
] as const;

export type SocialName = (typeof SOCIALS)[number]['name'];
