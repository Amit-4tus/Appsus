'use strict';
import { storageService } from '../../../../main-services/util-service.js'



export const emailService = {
    getEmails
}

const STORAGE_KEY = 'emails';
let gEmail;
createEmails()

function getEmails() {
    return gEmail;
}


function createEmails() {
    gEmail = storageService.load(STORAGE_KEY)
    if (!gEmail || gEmail.length === 0) {
        gEmail = [
            _createEmail(makeId(), 'avi', 'avi@gmail.com', 'Wassap with Vue?', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
            _createEmail(makeId(), 'avi', 'avi@gmail.com', 'Wassap with Vue?', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
            _createEmail(makeId(), 'avi', 'avi@gmail.com', 'Wassap with Vue?', 1551133930594, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
        ]
        storageService.store(STORAGE_KEY, gEmail)
    }
}





function _createEmail(id, name, email, subject, sentAt, text, isRead) {
    return {
        id,
        name,
        email,
        subject,
        sentAt,
        text,
        isRead,

    }
}