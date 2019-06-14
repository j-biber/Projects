const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const postGenerator = (numOfPosts) => {
    const posts = [];
    for (let i = 0; i < numOfPosts; i++) {
        posts.push(
            {
                id: i,
                title: lorem.generateWords(3),
                intro: lorem.generateSentences(2)
            })
    }
    return posts;
}


module.exports.postGenerator = postGenerator