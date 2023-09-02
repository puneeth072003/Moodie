from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import sys
import json


def sentiment_scores(value):
    sid_obj = SentimentIntensityAnalyzer()

    sentiment_dict = sid_obj.polarity_scores(value)

    flag = ""
    if sentiment_dict['compound'] >= 0.05:
        flag = "Positive"

    elif sentiment_dict['compound'] <= - 0.05:
        flag = "Negative"

    else:
        flag = "Neutral"

    json_object = {
        "Positive": "{0:.2f}".format(sentiment_dict['pos']*100),
        "Negative": "{0:.2f}".format(sentiment_dict['neg']*100),
        "Neutral": "{0:.2f}".format(sentiment_dict['neu']*100),
        "Overall": flag
    }
    print(json.dumps(json_object))


if __name__ == "__main__":
    arguments = sys.argv[1:]
    # arguments = "I want to die"
    sentiment_scores(arguments)
