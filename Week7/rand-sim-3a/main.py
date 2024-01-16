from csv_manager import CSV_Manager
from manipulator import Manipulator
import json

def filter_CSV(filter_field, value):
    reader = CSV_Manager("./articles.csv")
    articles = reader.get_csv_as_dicts()
    manipulator = Manipulator(articles)
    filtered = manipulator.filter_by(filter_field, value)
    return list(filtered)

def count_articles(key,value):
    return len(filter_CSV(key,value))

def is_article(key,value):
   return count_articles(key,value) > 0

def longest_article(key,value):
    return max(filter_CSV(key,value), key=lambda article: article["pages"])

# print("Articles with a title of t4:")
# print(filter_CSV("title", "t4"))
# print('')
# print("Articles of a1 author:")
# print(filter_CSV("author", "a1"))

print(count_articles("author","a1"))
print(count_articles("title","t1"))
print(is_article("title","t4"))
print(is_article("author","a0"))
print(longest_article('author', 'a1'))

reader = CSV_Manager("./articles.csv")
for key, value in reader.get_csv_as_single_dict().items():
    print(f'{key} -> {value}')
