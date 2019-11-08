const mongoose = require("mongoose");
const Person = require("./models").get_model.get_person_model();
const Story = require("./models").get_model.get_stories_model();

exports.add = function(req,res){
    const author = new Person({
        _id: new mongoose.Types.ObjectId(),
        name: 'Ian Fleming',
        age: 50
      });
      
      author.save(function (err) {
        if (err) {
          res.send({
            status: false,
            isError: true,
            resCode: 500,
            message: "Internal server error while Inserting data."
          })
        };
      
        const story1 = new Story({
          title: 'Casino Royale',
          author: author._id    // assign the _id from the person
        });
      
        story1.save(function (err) {
          if (err) {
            res.send({
              status: false,
              isError: true,
              resCode: 500,
              message: "Internal server error while Inserting data."
            })
          }else if(!err){
            res.send({
              status: true,
              isError: false,
              resCode: 200,
              message: "Added a person along with a story successfully."
            })
          }
          // thats it!
        });
      });
}

exports.selectall = function(req,res){

}