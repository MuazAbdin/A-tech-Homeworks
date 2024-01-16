import csv
from collections import defaultdict


class CSV_Manager:
    def __init__(self, filename):
        self.filename = filename

    def get_csv_as_single_dict(self): 
        articles = self.get_csv_as_dicts()
        result = defaultdict(lambda: [])
        for article in articles[1:]:
            result[article['author']].append(article)
            result[article['category']].append(article)
        return result

    def get_csv_as_dicts(self):
        with open(self.filename) as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            rows = [row for row in csv_reader]
            return self.to_dict(rows)

    def to_dict(self, rows):
        keys = rows[0]
        all_data = []

        for row in rows:
            data_dict = {}
            for i in range(0, len(row)):
                data_dict[keys[i]] = row[i]
            all_data.append(data_dict)

        return all_data
