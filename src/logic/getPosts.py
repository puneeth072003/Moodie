import praw
import json
import sys
import re

username = sys.argv[1]


reddit = praw.Reddit(
    client_id='K6_eU3sLgqICnPS99qQzjw',
    client_secret='BIfL0bYJyRlj6QsnJpr3AVLRp3TQbQ',
    user_agent='moodie.py'
)

target_user = reddit.redditor(username)

user_posts = target_user.submissions.new(
    limit=10)

sentence = ""
for post in user_posts:
    sentence += " "+post.title
    sentence += " "+post.selftext
cleaned_sentence = re.sub(
    r'[\n\r]|(\[.*?\]\(https?://[^\)]+\))|u/[^\s]+|[\\*]|[^\x20-\x7E]', '', sentence)

user_posts_data = {"sentence": cleaned_sentence}
with open("data.json", "w") as file:
    json.dump(user_posts_data, file, indent=4)
