from whereami.learn import learn
from whereami.predict import locations, predict
from time import sleep

# def whereami_learn(location):
#     learn(location)

# whereami_learn()
# print(locations())

while True:
    sleep(5)
    write_to_database(predict())

