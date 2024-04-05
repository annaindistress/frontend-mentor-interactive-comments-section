const commentsData = [
  {
    id: "1",
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "Tue Mar 05 2024 00:00:00 GMT+0400 (Georgia Standard Time)",
    score: 12,
    username: "amyrobson",
    replyingTo: "",
    parentComment: "",
  },
  {
    id: "2",
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: "Fri Mar 22 2024 00:00:00 GMT+0400 (Georgia Standard Time)",
    score: 5,
    username: "maxblagun",
    replyingTo: "",
    parentComment: "",
  },
  {
    id: "3",
    content:
      "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    createdAt: "Thu Mar 28 2024 00:00:00 GMT+0400 (Georgia Standard Time)",
    score: 4,
    username: "ramsesmiron",
    replyingTo: "maxblagun",
    parentComment: "2",
  },
  {
    id: "3",
    content:
      "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    createdAt: "Thu Mar 28 2024 00:00:00 GMT+0400 (Georgia Standard Time)",
    score: 4,
    username: "ramsesmiron",
    replyingTo: "maxblagun",
    parentComment: "2",
  },
  {
    id: "4",
    content:
      "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    createdAt: "Wed Apr 03 2024 00:00:00 GMT+0400 (Georgia Standard Time)",
    score: 2,
    username: "juliusomo",
    replyingTo: "ramsesmiron",
    parentComment: "2",
  },
];

export default commentsData;
