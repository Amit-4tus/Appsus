'use strict';

import {eventBus} from '../../../main-services/event-bus-service.js';
import keepStorageService from './keep-storage-service.js';
export default {getKeeps, addKeep, deleteKeep, updateKeep, getAllLabels};

function getKeeps() {
    return keepStorageService.getKeeps();
};

function addKeep(newKeepData) {
    keepStorageService.addKeep(newKeepData);
};

function deleteKeep(id) {
    keepStorageService.deleteKeep(id);
    eventBus.$emit('keepDeleted');
};

function updateKeep(updtdKeepData) {
    keepStorageService.updateKeep(updtdKeepData);
};

function getAllLabels() {
    return keepStorageService.getAllLabels();
};

eventBus.$on('email-keep-added', addKeep);