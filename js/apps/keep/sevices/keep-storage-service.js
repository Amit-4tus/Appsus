'use strict';

export default {getKeeps, addKeep, deleteKeep, updateKeep, getAllLabels};

window.currId = 101;

function getKeeps() {
    if (!localStorage.getItem('gKeeps')) {
        localStorage.setItem('gKeeps', JSON.stringify(gKeeps));
        localStorage.setItem('KeepsCurrId', currId);
    }
    currId = localStorage.getItem('KeepsCurrId');
    return Promise.resolve(JSON.parse(localStorage.getItem('gKeeps')));
};

function addKeep(newKeepData) {
    let keeps = JSON.parse(localStorage.getItem('gKeeps'));
    keeps.unshift(newKeepData);
    localStorage.setItem('gKeeps', JSON.stringify(keeps));
    localStorage.KeepsCurrId = currId;
};

function deleteKeep(id) {
    let keeps = JSON.parse(localStorage.getItem('gKeeps'));
    let idx = keeps.findIndex(keep => keep.id === id);
    keeps.splice(idx, 1);
    localStorage.setItem('gKeeps', JSON.stringify(keeps));
};

function updateKeep(updtdKeepData) {
    let keeps = JSON.parse(localStorage.getItem('gKeeps'));
    let idx = keeps.findIndex(keep => keep.id === +updtdKeepData.id);
    keeps.splice(idx, 1, updtdKeepData);
    localStorage.setItem('gKeeps', JSON.stringify(keeps));
};

function getAllLabels() {
    if (!localStorage.getItem('gKeepLabels')) localStorage.setItem('gKeepLabels', JSON.stringify(gLabels));
    return JSON.parse(localStorage.getItem('gKeepLabels'));
};

const gLabels = ['personal', 'work'];

const gKeeps = [
    {
        title: 'Do Laundry',
        id: currId++,
        type: 'task',
        color: '#EEF26C',
        labels: ['personal'],
    },
    {
        title: 'Mountain',
        id: currId++,
        type: 'image',
        extra: 'https://cdn.shopify.com/s/files/1/2341/3995/files/charlotte-karlsen-768256-unsplash_2048x2048.jpg?v=1547581682',
        color: '#B89747',
        labels: ['personal'],
    },
    {
        title: 'New Song Idea',
        id: currId++,
        type: 'audio',
        extra: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        color: '#FE7F34',
        labels: ['work'],
    },
    {
        title: 'Bunny Rsbbit',
        id: currId++,
        type: 'video',
        extra: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
        color: '#96A90E',
        labels: [],
    },
];