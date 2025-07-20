const customName = document.getElementById('customName');
const generateBtn = document.getElementById('generate');
const story = document.getElementById('story');

const stories = [
    "Bob built a rocket out of soda cans and flew to the grocery store.",
"Bob argued with a toaster and lost.",
"Bob tried to yawn quietly and summoned a lion.",
"Bob painted their house with ketchup by mistake. Now ants own it.",
"Bob high-fived a tree and became its best friend.",
"Bob blinked too hard and accidentally time-traveled to lunch.",
"Bob sang to the microwave and it applauded.",
"Bob slipped on air and invented a new dance move.",

];

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

generateBtn.addEventListener('click', () => {
    let newStory = randomValueFromArray(stories);

    const name = customName.value.trim();
    if (name !== '') {
        newStory = newStory.replaceAll('Bob', name);
    }

    story.textContent = newStory;
});
