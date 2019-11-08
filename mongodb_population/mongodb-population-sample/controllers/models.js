const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = Schema({
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storiesSchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
})

exports.get_model = {
    get_person_model: function(){
        return mongoose.model("Person",personSchema)
    },
    get_stories_model: function(){
        return mongoose.model("Story",storiesSchema)
    }
}

