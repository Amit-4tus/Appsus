'use strict';

export default returnKeeps;

var currId = 101;

function returnKeeps() {
    return keepsStorage;
};

const keepsStorage = [
    {
        title: 'Do Laundry',
        id: currId++,
        type: 'task',
    },
    {
        title: 'Mountain',
        id: currId++,
        type: 'image',
        imgUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_8YPSy9XlAhXSDewKHZoHDH8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tentree.com%2Fblog%2F10-reasons-why-climbing-mountains-can-enrich-your-life%2F&psig=AOvVaw28YyNCNO9kz2Ef9p8X2BFZ&ust=1573129865716276',
    },
    {
        title: 'New Song Idea',
        id: currId++,
        type: 'audio',
        audioUrl: 'https://drive.google.com/open?id=16bSLZJviEwTXkfSiPe_pnPZ5mnr29bAa',
    },
];