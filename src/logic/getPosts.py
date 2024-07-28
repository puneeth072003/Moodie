import os
import sys
import re
import praw
from prawcore.exceptions import NotFound
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json

# Step 1: Extract user posts and clean the data

def fetch_user_posts(username):
    reddit = praw.Reddit(
        client_id='K6_eU3sLgqICnPS99qQzjw',
        client_secret='BIfL0bYJyRlj6QsnJpr3AVLRp3TQbQ',
        user_agent='moodie.py'
    )

    try:
        target_user = reddit.redditor(username)
        user_posts = target_user.submissions.new(limit=10)

        sentence = ""
        Cache = []
        for post in user_posts:
            sentence += " " + post.title
            sentence += " " + post.selftext
            Cache.append(post.selftext)

        cleaned_sentence = re.sub(
            r'[\n\r]|(\[.*?\]\(https?://[^\)]+\))|u/[^\s]+|[\\*]|#.*?|[^\x20-\x7E]', '', sentence)

        user_posts_data = {"sentence": cleaned_sentence}
        postsJsonData = {"username": username, "posts": Cache}

        return user_posts_data, postsJsonData

    except NotFound:
        print(f"User '{username}' not found or has no submissions.")
        return None, None

# Step 2: Analyze sentiment

def sentiment_scores(value):
    sid_obj = SentimentIntensityAnalyzer()
    sentiment_dict = sid_obj.polarity_scores(value)

    flag = ""
    if sentiment_dict['compound'] >= 0.05:
        flag = "Positive"
    elif sentiment_dict['compound'] <= -0.05:
        flag = "Negative"
    else:
        flag = "Neutral"

    json_object = {
        "Positive": "{0:.2f}".format(sentiment_dict['pos'] * 100),
        "Negative": "{0:.2f}".format(sentiment_dict['neg'] * 100),
        "Neutral": "{0:.2f}".format(sentiment_dict['neu'] * 100),
        "Overall": flag
    }
    return json_object

if __name__ == "__main__":
    # username = "KillerBoi935"
    username = sys.argv[1]
    user_posts_data, postsJsonData = fetch_user_posts(username)

    if user_posts_data and postsJsonData:
        cleaned_sentence = user_posts_data["sentence"]
        sentiment_analysis = sentiment_scores(cleaned_sentence)
        print(json.dumps(sentiment_analysis, indent=4))
    else:
        print("No data to analyze.")
