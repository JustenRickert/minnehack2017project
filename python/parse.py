import random
import time

def many_random_of(possiblilities, length):
    random_possibilities = []
    while length > 0:
        random_possibilities.append(random.choice(possiblilities))
        length -= 1
    return random_possibilities

class Transition(object):
    transitions = ()
    possible = ['bedroom', 'bathroom', 'livingroom', 'frontdoor']

    def __init__(self):
        self.transitions = many_random_of(self.possible, 10)

    def detect_too_many_bathroom_uses(self):
        uses = 0
        for el in self.transitions:
            if el == 'bathroom':
                uses += 1
        return uses >= 4

    def detect_trapped_in_the_bathroom(self):
        inarow = 0
        for i in range(0, len(self.transitions)):
            if self.transitions[len(self.transitions)-i-1] == 'bathroom':
                inarow += 1
            else:
                return inarow > 360
        return inarow > 360

    def detect_leaving_house():
        if self.transitions[-1] is 'frontdoor':
            for i in range(0, len(self.transitions)-1):
                if self.transitions[i] != None:
                    return False
        return True

    def detect_not_waking_up(self):
        not_waking_up = True
        hour = time.strftime('%H')
        for i in range(self.transitions):
            if self.transitions[i] != 'bedroom':
                not_waking_up = False
                break
        return not_waking_up and hour < 10

    def detect_up_at_night(self):
        hour = time.strftime('%H')
        if int(hour) <= 7:
            if self.transitions[-1] != 'bedroom':
                return True


# trans = Transition()
# print(time.strftime('%H'))
# print(trans.transitions)
# print(trans.detect_too_many_bathroom_uses())

# test_array = [1,2,3,4,5,6,7,8,9,10]
# while test_array:
#     print(test_array)
#     test_array = test_array[1:-1]
