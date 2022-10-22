const pageText = [
  `
  Story and art by
  Elizabeth Albert
  `,
  `
  BoBo lives with her brother YoYo.  They both love to eat.
  One day, when it was time for dinner,
  YoYo pushed BoBo out of the way and ate all the food.
  `,
  `
  BoBo was hungry and became angry at YoYo.
  She decided that she would become
  large enough to push HIM out of the way!
  `,
  `
  And so she started eating.
  And eating.
  And eating.
  `,
  `
  Soon she was larger than YoYo.
  She easily pushed him out of the way at dinner time.
  But she didn't stop there.
  She continued to eat and grow.
  `,
  `
  BoBo became too large to fit in the house.
  She had to live outside.
  `,
  `
  Even outside, she continued to eat.
  She started eating trees, buildings, and cars.
  People looked tasty, but they would run away.
  `,
  `
  After a day of intense eating, BoBo found herself stuck!
  She thought, "I can eat these buildings to free myself!"
  But she was too large to reach them.
  `,
  `
  She started to think about her situation.
  Why did she get so large?  To get revenge on YoYo, right?
  But she had accomplished that long ago.  Why didn't she stop then?
  Had she become a monster?
  `,
  `
  She decided to set things right.
  She stopped eating trees, buildings, and cars.
  She became unstuck from between the buildings.
  As time passed, she started getting smaller.
  `,
  `
  When she was back to the size of a house cat, she went home.
  She apologized to YoYo, who welcomed her back.
  Then she curled up on the bed and went to sleep.
  `
];

const images = [
  "./images/cover-page.png",
  "./images/yoyo-eating.png",
  "./images/bobo-angry.png",
  "./images/bobo-growing.png",
  "./images/bobo-eating.png",
  "./images/bobo-outside.png",
  "./images/bobo-outside-feast.png",
  "./images/bobo-stuck.png",
  "./images/bobo-thinking.png",
  "./images/bobo-shrinking.png",
  "./images/bobo-sleeping.jpg"
];

export const allPages = [];

for (const [index, text] of pageText.entries()) {
  const page = {
    text,
    image: images[index]
  }
  allPages.push(page);
}
