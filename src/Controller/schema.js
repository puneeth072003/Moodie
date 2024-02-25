const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    username: String,
    result: Object
});

const ResultModel = mongoose.model('result', resultSchema,'results');

const suggestionSchema = new mongoose.Schema({
    positive: [String],
    negative: [String],
    neutral: [String]
});

const SuggestionModel = mongoose.model('Suggestion', suggestionSchema,'suggestions');

const postSchema = new mongoose.Schema({
    username: String,
    posts: [String]
});

const PostModel = mongoose.model('Post', postSchema,'posts');

const datasetSchema = new mongoose.Schema({
    username: String,
    sentence: String
});

const DatasetModel = mongoose.model('Dataset', datasetSchema,'datasets');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const UserModel = mongoose.model('User', userSchema,'users');

module.exports = {ResultModel,SuggestionModel,PostModel,DatasetModel,UserModel};
