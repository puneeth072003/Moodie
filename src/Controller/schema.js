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

module.exports = {ResultModel,SuggestionModel};
