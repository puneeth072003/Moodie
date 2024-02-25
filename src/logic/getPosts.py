import praw
import json
import sys
import re
import os

username = sys.argv[1]
# username = "Pandamonium773"

reddit = praw.Reddit(
    client_id='K6_eU3sLgqICnPS99qQzjw',
    client_secret='BIfL0bYJyRlj6QsnJpr3AVLRp3TQbQ',
    user_agent='moodie.py'
)

target_user = reddit.redditor(username)

user_posts = target_user.submissions.new(
    limit=10)

Cache=[]
sentence = ""
for post in user_posts:
    sentence += " "+post.title
    sentence += " "+post.selftext
    Cache.append(post.selftext)
cleaned_sentence = re.sub(
    r'[\n\r]|(\[.*?\]\(https?://[^\)]+\))|u/[^\s]+|[\\*]|#.*?|[^\x20-\x7E]', '', sentence)

user_posts_data = {"sentence": cleaned_sentence}

# for data.json
user_database_data = {"username":username,"sentence":cleaned_sentence}

# for posts.json
postsJsonData={"username":username,"posts":Cache}

directory_path = "./src/Controller"
cleanedFile_path = os.path.join(directory_path, "./target/data.json")
with open(cleanedFile_path, "w") as file:
    json.dump(user_database_data, file, indent=4)

postsFile_path = os.path.join(directory_path, "./target/posts.json")
with open(postsFile_path, "w") as file:
    json.dump(postsJsonData, file, indent=4)

print("File created")
