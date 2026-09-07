---
slug: my-learning-method
title: My Tech Learning Methodology
date: 2026-09-07
authors: [Koki]
tags: [learning, misc]
excerpt: "Sharing five methodologies I've developed for learning new technologies: official docs first, hands-on practice, Feynman technique, building a knowledge system, and regular review."
---

Sharing the methodologies I've developed for learning new technologies — hope you find them helpful.

## 1. Official Docs First

When encountering a new technology, read the official documentation first — not blog posts. Official docs are the most authoritative and up-to-date source. Blogs can supplement, but never replace, the documentation.

## 2. Hands-On Practice

Reading without doing is fool's gold. For every concept you learn, write code to verify it. Even a minimal example sticks better than reading the docs ten times.

```javascript
// Example: minimal Promise demo when I was learning it
const promise = new Promise((resolve) => {
  setTimeout(() => resolve('Hello'), 1000);
});
promise.then(console.log);
```

## 3. Feynman Technique

After learning a concept, try to explain it in your own words (or write it down). If you can't explain it clearly, you haven't truly understood it. This blog is my Feynman practice.

## 4. Build a Knowledge System

Scattered knowledge points are easily forgotten. Organize them into a system. I use Docusaurus docs to categorize by direction — precisely to build a knowledge network.

## 5. Review Regularly

Spend time each week reviewing what you've learned, and do a monthly summary. Review isn't re-reading — it's trying to recall and apply from memory.

---

Learning is a marathon, not a sprint. Keep your pace, keep accumulating, and time will give you the answer.
