// controllers/todos.js

// convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    //index,
    show,
    new: newSkill,
    create
    //delete
};



function newSkill(req, res) {
  res.render("skills/new"), { title: "Add Skill", errorMsg: ""}
}


  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
  }

function create(req, res){
  Skill.create(req.body)
  res.redirect('/skills')
}
  
// function delete(req, res) {

// }