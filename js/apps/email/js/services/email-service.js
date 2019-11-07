'use strict';
import { utilService } from '../../../../main-services/util-service.js'



export const emailService = {
    getEmails,
    getEmailById,
    removeEmail,
    sendMail,
    getNextEmailId,
    changeEmailParameter
}

const STORAGE_KEY = 'emails';
let gEmail;
createEmails()

function getEmails() {
    return gEmail;
}

function getEmailById(emailId) {
    const email = gEmail.find(email => email.id === emailId)
    return Promise.resolve(email);
}

function removeEmail(currEmail) {
    var idx = gEmail.findIndex(email => email.id === currEmail.id);
    currEmail.isDraft = true;
    if (idx !== -1) gEmail.splice(idx, 1, currEmail)
    utilService.store(STORAGE_KEY, gEmail)
    return Promise.resolve();
}


function changeEmailParameter(currEmail, parametr) {
    var idx = gEmail.findIndex(email => email.id === currEmail.id);
    currEmail[parametr] = !currEmail[parametr];
    if (idx !== -1) gEmail.splice(idx, 1, currEmail)
    utilService.store(STORAGE_KEY, gEmail)
    return Promise.resolve();
}

function sendMail(email, subject, text) {
    console.log(email);
    let newEmail = _createEmail(utilService.makeId(), 'tomi', email, subject, _timeAtSend(), text, false, false, false, false)
    console.log(newEmail)
    gEmail.unshift(newEmail)
    utilService.store(STORAGE_KEY, gEmail)
}

function getNextEmailId(emailId) {
    var idx = gEmail.findIndex(email => email.id === emailId);
    idx++;
    if (idx === gEmail.length) idx = 0;

    return gEmail[idx].id;
}

function _timeAtSend() {
    let timeAt = '' + new Date();
    return timeAt.substring(16, 21)
}

function createEmails() {
    gEmail = utilService.load(STORAGE_KEY)
    if (!gEmail || gEmail.length === 0) {
        gEmail = [
            _createEmail(utilService.makeId(), 'avi', 'avi@gmail.com', 'Wassap with Vue?', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, false, true),
            _createEmail(utilService.makeId(), 'koki', 'koki@gmail.com', 'hi', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, false, false),
            _createEmail(utilService.makeId(), 'bobi', 'bobi@gmail.com', 'hola', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, false, true, false),
            _createEmail(utilService.makeId(), 'momi', 'momi@gmail.com', 'bey', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, true, false),
            _createEmail(utilService.makeId(), 'yomi', 'yomi@gmail.com', 'hello', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, true, false),
            _createEmail(utilService.makeId(), 'tomi', 'tomi@gmail.com', 'yoyo', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, false),
            _createEmail(utilService.makeId(), 'avi', 'avi@gmail.com', 'Wassap with Vue?', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, false, false),
            _createEmail(utilService.makeId(), 'koki', 'koki@gmail.com', 'hi', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, true),
            _createEmail(utilService.makeId(), 'bobi', 'bobi@gmail.com', 'hola', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, false, true, false),
            _createEmail(utilService.makeId(), 'momi', 'momi@gmail.com', 'bey', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, true),
            _createEmail(utilService.makeId(), 'yomi', 'yomi@gmail.com', 'hello', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, true, false),
            _createEmail(utilService.makeId(), 'tomi', 'tomi@gmail.com', 'yoyo', _timeAtSend(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, false)

        ]
        utilService.store(STORAGE_KEY, gEmail)
    }

    return Promise.resolve(gEmail);
}


function _createEmail(id, name, email, subject, sentAt, text, isRead, isStarred, isSendMail, isDraft) {
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
    }
}