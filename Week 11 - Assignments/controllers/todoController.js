const { Todo } = require('../models');

class todoController {
    static healthCheck(req, res, next) {
        res.status(200).json({message: "All is Well!"})
    }
    
    static index (req, res, next) {
        Todo.findAll()
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                next(err)
            })
    }

    static add (req, res, next) {
        Todo.create({
            activity: req.body.activity
        })
        .then(data => {
            res.status(201).json({data, message: "Activity created!"})
        })
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        })
    }

    static detail (req, res, next){
        Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data){
                res.status(404).json({message: 'Activity not found!'})
            } else {
                res.status(200).json({data})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        })
    }

    static edit (req, res, next) {
        const updatedTodo = {
            activity: req.body.activity
        }

        Todo.findByPk(req.params.id)
            .then(data => {
                if (!data){
                    throw ({status: 404, msg: "No activity of this ID was found"})
                } else {
                    return Todo.update(updatedTodo, {where: {id: req.params.id}})
                }
            })
            .then(data => {
                res.status(200).json({data: updatedTodo, message: 'Activity updated!'})
            })
            .catch(err => {
                res.status(500).json({message: "Something went wrong", error: err})
            })
    }

    static delete (req, res, next) {
        Todo.findByPk(req.params.id)
            .then(data => {
                if (!data) {
                    res.status(404).json({status: 404, message: 'Activity not found!'})
                } else {
                    return Todo.destroy({where: {id: req.params.id}})
                }
            })
            .then(data => {
                res.status(200).json({message: 'Activity deleted!'})
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = todoController;