const clone = require('clone');

let db = {};

const defaultData = {
    '8xf0y6ziyjabvozdd253nd': {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2,
        imageCard: 'https://picsum.photos/341/180/?image=96',
        imageBanner: 'https://picsum.photos/1024/180/?image=96',
    },
    '6ni6ok3ym7mf1p33lnez': {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0,
        imageCard: 'https://picsum.photos/341/180/?image=70',
        imageBanner: 'https://picsum.photos/1024/180/?image=70',

    },
    '6ni6o735gdkdp33lnez': {
        id: '6ni6o735gdkdp33lnez',
        timestamp: 1468479767190,
        title: 'Create amazing pages with React!',
        body: 'Well at least yeah, what the title said.',
        author: 'luis',
        category: 'react',
        voteScore: 20,
        deleted: false,
        commentCount: 0,
        imageCard: 'https://picsum.photos/341/180/?image=66',
        imageBanner: 'https://picsum.photos/1024/180/?image=66',

    },
    '674jdgslm7mf1p33lnez': {
        id: '674jdgslm7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes! (Part 2)',
        body: 'Still going to take more than 10 minutes tho',
        author: 'malave',
        category: 'redux',
        voteScore: -20,
        deleted: false,
        commentCount: 0,
        imageCard: 'https://picsum.photos/341/180/?image=33',
        imageBanner: 'https://picsum.photos/1024/180/?image=33',

    },
    '674jdgslm7mf1p33lnes': {
        id: '674jdgslm7mf1p33lnes',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes! (Part 600)',
        body: 'Still going to take more than 10 minutes tho. Still going to take more than 10 minutes tho. Still going to take more than 10 minutes tho. Still going to take more than 10 minutes tho. Still going to take more than 10 minutes tho. Still going to take more than 10 minutes tho. Still going to take more than 10 minutes tho. Still going to take more than 10 minutes tho.',
        author: 'malave',
        category: 'redux',
        voteScore: -20,
        deleted: false,
        commentCount: 0,
        imageCard: 'https://picsum.photos/341/180/?image=22',
        imageBanner: 'https://picsum.photos/1024/180/?image=22',

    }
};

function getData(token) {
    let data = db[token];
    if (data == null) {
        data = db[token] = clone(defaultData);
    }
    return data;
}

function getByCategory(token, category) {
    return new Promise((res) => {
        let posts = getData(token);
        let keys = Object.keys(posts);
        let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted);
        res(filtered_keys.map(key => posts[key]));
    });
}

function get(token, id) {
    return new Promise((res) => {
        const posts = getData(token);
        res(
            posts[id].deleted
                ? {}
                : posts[id]
        );
    });
}

function getAll(token) {
    return new Promise((res) => {
        const posts = getData(token);
        let keys = Object.keys(posts);
        let filtered_keys = keys.filter(key => !posts[key].deleted);
        res(filtered_keys.map(key => posts[key]));
    });
}

function add(token, post) {
    return new Promise((res) => {
        let posts = getData(token);
        const imageId = Math.floor(Math.random() * 86); // use a small set of https://picsum.photos where we will always get a valida id
        posts[post.id] = {
            id: post.id,
            timestamp: post.timestamp,
            title: post.title,
            body: post.body,
            author: post.author,
            category: post.category,
            voteScore: 1,
            deleted: false,
            commentCount: 0,
            imageCard: `https://picsum.photos/341/180/?image=${imageId}`,
            imageBanner: `https://picsum.photos/1024/180/?image=${imageId}`,
        };

        res(posts[post.id]);
    });
}

function vote(token, id, option) {
    return new Promise((res) => {
        let posts = getData(token);
        let post = posts[id];
        switch (option) {
            case 'upVote':
                post.voteScore = post.voteScore + 1;
                break;
            case 'downVote':
                post.voteScore = post.voteScore - 1;
                break;
            default:
                console.log(`posts.vote received incorrect parameter: ${option}`);
        }
        res(post);
    });
}

function disable(token, id) {
    return new Promise((res) => {
        let posts = getData(token);
        posts[id].deleted = true;
        res(posts[id]);
    });
}

function edit(token, id, post) {
    return new Promise((res) => {
        let posts = getData(token);
        for (let prop in post) {
            posts[id][prop] = post[prop];
        }
        res(posts[id]);
    });
}

function incrementCommentCounter(token, id, count) {
    const data = getData(token);
    if (data[id]) {
        data[id].commentCount += count;
    }
}

module.exports = {
    get,
    getAll,
    getByCategory,
    add,
    vote,
    disable,
    edit,
    getAll,
    incrementCommentCounter
};
