const mongoose = require("mongoose");
const Story = require("./models").get_model.get_stories_model();

exports.add = function(req,res){
    
}

exports.search = function(req,res){
    Story.findOne({title: "Casino Royale"}).populate("author").exec(function (err, story) {
        if (err) {
            console.log(err)
            res.send({
                status: false,
                isError: true,
                resCode: 500,
                message: "Internal server error while getting stories."
            })
        }else if(story){
            console.log('The author is %s', story.author.name);
            // prints "The author is Ian Fleming"
            res.send({
                status: true,
                isError: false,
                resCode: 200,
                message: "Story found successfully.",
                data: story
            })
        }
      });
}

exports.selectall = function(req,res){
    Story.find({}).exec(function (err, stories) {
        if (err) {
            res.send({
                status: false,
                isError: true,
                resCode: 500,
                message: "Internal server erro while getting stories."
            })
        }else if(story){
            res.send({
                status: true,
                isError: false,
                resCode: 200,
                message: "Stories found successfully.",
                data: stories
            })
        }
      });
}