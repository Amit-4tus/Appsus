'use strict';
import { utilService } from '../../../../main-services/util-service.js'
import { eventBus } from '../../../../main-services/event-bus-service.js';


export const emailService = {
    getEmails,
    getEmailById,
    getRemoveOrAdd,
    sendMail,
    changeEmailParameter,
    getReadPrecent,
    getNextPrevEmail,
    getTrashEmails,
}

const STORAGE_KEY_EMAILS = 'EMAILS';
const STORAGE_KEY_TRASH_EMAILS = 'TRASH_EMAILS';
let gEmails;
let gTrashEmails;
createEmails()
createTrashEmails()

function getEmails() {
    return gEmails;
}

function getTrashEmails() {
    return gTrashEmails;
}

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}

function getRemoveOrAdd(currEmail, removeOrAdd) {
    let removeFrom;
    let addTo;
    console.log(removeOrAdd);
    // debugger
    if (removeOrAdd === 'removed') {
        currEmail.isTrash = true;
        removeFrom = gEmails;
        addTo = gTrashEmails
    } else {
        currEmail.isTrash = false;
        removeFrom = gTrashEmails;
        addTo = gEmails
    }
    let idx = removeFrom.findIndex(email => email.id === currEmail.id);
    console.log(idx);


    if (idx !== -1) removeFrom.splice(idx, 1)
    addTo.unshift(currEmail)
    console.log('remove from', removeFrom);
    console.log('gemail', gEmails);
    console.log('gemail', gTrashEmails);
    utilService.store(STORAGE_KEY_TRASH_EMAILS, gTrashEmails)
    utilService.store(STORAGE_KEY_EMAILS, gEmails)
    return Promise.resolve();
}



function changeEmailParameter(currEmail, parametr) {
    var idx = gEmails.findIndex(email => email.id === currEmail.id);
    currEmail[parametr] = !currEmail[parametr];
    if (idx !== -1) gEmails.splice(idx, 1, currEmail)
    utilService.store(STORAGE_KEY_EMAILS, gEmails)

    if (parametr === 'isRead') {
        let readPrecent = getReadPrecent()
        eventBus.$emit('readPrecent', readPrecent);
    }

    return Promise.resolve();
}

function sendMail(email, subject, text, isDraft) {
    let newEmail = _createEmail(utilService.makeId(), 'tomi', email, subject, Date.now(), text, false, false, false, isDraft, false)
    gEmails.unshift(newEmail)
    utilService.store(STORAGE_KEY_EMAILS, gEmails)
}



// function getNextEmailId(emailId) {
//     var idx = gEmail.findIndex(email => email.id === emailId);
//     idx++;
//     if (idx === gEmail.length) idx = 0;

//     return gEmail[idx].id;
// }

// function _timeAtSend() {
//     let timeAt = '' + new Date();
//     return timeAt.substring(16, 21)
// }


function getNextPrevEmail(emailId) {
    let idx = gEmails.findIndex(email => email.id === emailId);
    let nextIndex = idx + 1;
    if (nextIndex === gEmails.length) nextIndex = 0;
    let next = gEmails[nextIndex].id;
    let prevIndex = idx - 1;
    if (prevIndex === -1) prevIndex = gEmails.length - 1;
    let prev = gEmails[prevIndex].id;
    return { prev, next };
}


function getReadPrecent() {
    let readEmails = gEmails.filter(email => email.isRead)
    let numOfRead = (readEmails.length / gEmails.length) * 100
    return numOfRead.toFixed()
}

function createEmails() {
    gEmails = utilService.load(STORAGE_KEY_EMAILS)
    if (!gEmails || gEmails.length === 0) {
        gEmails = [
            _createEmail(utilService.makeId(), 'avi', 'avi@gmail.com', '[Draft] Wassap with Vue?', 1573298869482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, true, false),
            _createEmail(utilService.makeId(), 'koki', 'koki@gmail.com', 'hi', 1573298869182, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, false, false),
            _createEmail(utilService.makeId(), 'bobi', 'bobi@gmail.com', 'hola', 1573298829482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, false, false),
            _createEmail(utilService.makeId(), 'momi', 'momi@gmail.com', 'bey', 1573298863482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, true, false, false),
            _createEmail(utilService.makeId(), 'yomi', 'yomi@gmail.com', 'hello', 1573298369482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, true, false, false),
            _createEmail(utilService.makeId(), 'tomi', 'tomi@gmail.com', 'yoyo', 1573298269582, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, false, false),
            _createEmail(utilService.makeId(), 'avi', 'avi@gmail.com', 'Wassap with Vue?', 1573298829482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, true, false, false),
            _createEmail(utilService.makeId(), 'koki', 'koki@gmail.com', '[Draft] hi', 1573298863482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, true, false),
            _createEmail(utilService.makeId(), 'bobi', 'bobi@gmail.com', 'hola', 1573298862482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, false, true, false, false),
            _createEmail(utilService.makeId(), 'momi', 'momi@gmail.com', '[Draft] bey', 1573298369482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, true, false),
            _createEmail(utilService.makeId(), 'yomi', 'yomi@gmail.com', 'hello', 1573298849482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, true, false, false),
            _createEmail(utilService.makeId(), 'tomi', 'tomi@gmail.com', 'yoyo', 1573298569482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, false, false)

        ]
        utilService.store(STORAGE_KEY_EMAILS, gEmails)
    }

    return Promise.resolve(gEmails);
}

function createTrashEmails() {
    gTrashEmails = utilService.load(STORAGE_KEY_TRASH_EMAILS)
    if (!gTrashEmails || gTrashEmails.length === 0) {
        gTrashEmails = [
            _createEmail(utilService.makeId(), 'avi', 'dgjdhujhg@yahoo.com', 'Wassap with Vue?', 1573228869482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, false, true),
            _createEmail(utilService.makeId(), 'koki', 'koki@outlook.com', 'hi', 1573298669482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, false, true),
            _createEmail(utilService.makeId(), 'bobi', 'bodsgfhgbi@gmail.com', 'yoyo', 1573198869482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, false, true),
            _createEmail(utilService.makeId(), 'momi', 'moasdfgmi@gmail.com', 'how r u?', 1575298369482, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, false, true),

        ]
        utilService.store(STORAGE_KEY_TRASH_EMAILS, gTrashEmails)
    }

    return Promise.resolve(gTrashEmails);
}


function _createEmail(id, name, email, subject, sentAt, text, isRead, isStarred, isSendMail, isDraft, isTrash) {
    return {
        id,
        name,
        email,
        subject,
        sentAt,
        text,
        isRead,
        isStarred,
        isSendMail,
        isDraft,
        isTrash
    }
}