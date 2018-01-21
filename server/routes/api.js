/**
 *
 * Example route for API
 *
 */

import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', function(req, res) {
    res.json({message: "yea!"});
})

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

//Get All Tasks

function getTasks(req, res){
  Task.find().exec((err, tasks) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ tasks });
  });
}

//Get Single Task

function getOneTask(req, res){
    Task.findOne({ cuid: req.params.cuid }).exec((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ task });
  });

}

//Post Task

function saveTask(req, res){
  var newTask = new Task(req.body.task);
  newTask.title = req.body.title;
  newTask.description = req.body.description;
  newTask.cuid = guid();

  newTask.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ task: saved });
  });
}

//Update Task

function updateTask(req, res){

}

//Delete Task

function removeTask(req, res){
  Task.findOne({ cuid: req.params.cuid }).exec((err, task) => {
    if (err) {
      res.status(500).send(err);
    }

    task.remove(() => {
      res.status(200).end();
    });
  });

}


router.route('/tasks').get(getTasks);
router.route('/tasks').post(saveTask);
router.route('/tasks/:cuid').get(getOneTask);
router.route('/tasks/:cuid').delete(removeTask);





export default router;
