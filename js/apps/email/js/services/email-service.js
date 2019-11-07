'use strict';
import { utilsService } from '../../../../main-services/util-service.js'



export const emailService = {
    getEmails,
    getEmailById,
    removeEmail,
    sendMail
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

function removeEmail(emailId) {
    var idx = gEmail.findIndex(email => email.id === emailId);
    if (idx !== -1) gEmail.splice(idx, 1)
    utilsService.store(STORAGE_KEY, gEmail)
    return Promise.resolve();
}

function sendMail(name, email, subject, text) {
    console.log(email);
    let newEmail = _createEmail(utilsService.makeId(), name, email, subject, _timeAtSend(), text, false, false, false, false)
    console.log(newEmail)
    gEmail.unshift(newEmail)
    utilsService.store(STORAGE_KEY, gEmail)
}

function _timeAtSend() {
    let timeAt = '' + new Date();
    return timeAt.substring(16, 21)
}

function createEmails() {
    gEmail = utilsService.load(STORAGE_KEY)
    if (!gEmail || gEmail.length === 0) {
        gEmail = [
            _createEmail(utilsService.makeId(), 'avi', 'avi@gmail.com', 'Wassap with Vue?', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, false, true),
            _createEmail(utilsService.makeId(), 'koki', 'koki@gmail.com', 'hi', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, false, false),
            _createEmail(utilsService.makeId(), 'bobi', 'bobi@gmail.com', 'hola', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, false, true, false),
            _createEmail(utilsService.makeId(), 'momi', 'momi@gmail.com', 'bey', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, true, false),
            _createEmail(utilsService.makeId(), 'yomi', 'yomi@gmail.com', 'hello', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, true, false),
            _createEmail(utilsService.makeId(), 'tomi', 'tomi@gmail.com', 'yoyo', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, false),
            _createEmail(utilsService.makeId(), 'avi', 'avi@gmail.com', 'Wassap with Vue?', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, false, false),
            _createEmail(utilsService.makeId(), 'koki', 'koki@gmail.com', 'hi', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, true),
            _createEmail(utilsService.makeId(), 'bobi', 'bobi@gmail.com', 'hola', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, false, true, false),
            _createEmail(utilsService.makeId(), 'momi', 'momi@gmail.com', 'bey', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, false, false, true),
            _createEmail(utilsService.makeId(), 'yomi', 'yomi@gmail.com', 'hello', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', true, true, true, false),
            _createEmail(utilsService.makeId(), 'tomi', 'tomi@gmail.com', 'yoyo', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', false, true, true, false)

        ]
        utilsService.store(STORAGE_KEY, gEmail)
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