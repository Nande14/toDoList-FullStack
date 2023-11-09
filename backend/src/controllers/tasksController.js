const { response } = require('express');
const tasksModels = require('../models/tasksModels');

const getAll = async (_request, response) => {
    
    const tasks = await tasksModels.getAll();
    
    return response.status(200).json(tasks);
};

const createTasks = async (request, response) => {

const createTasks = await tasksModels.createTasks(request.body);
return response.status(201).json(createTasks);
};

module.exports = {
    getAll,
    createTasks,
}