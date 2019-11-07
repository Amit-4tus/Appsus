'use strict';

export default {getKeeps, addKeep, deleteKeep};

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

const gKeeps = [
    {
        title: 'Do Laundry',
        id: currId++,
        type: 'task',
        color: '#EEF26C',
    },
    {
        title: 'Mountain',
        id: currId++,
        type: 'image',
        extra: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_8YPSy9XlAhXSDewKHZoHDH8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tentree.com%2Fblog%2F10-reasons-why-climbing-mountains-can-enrich-your-life%2F&psig=AOvVaw28YyNCNO9kz2Ef9p8X2BFZ&ust=1573129865716276',
        color: '#B89747',
    },
    {
        title: 'New Song Idea',
        id: currId++,
        type: 'audio',
        extra: 'https://drive.google.com/open?id=16bSLZJviEwTXkfSiPe_pnPZ5mnr29bAa',
        color: '#FE7F34',
    },
];