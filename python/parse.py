import random
import datetime

def many_random_of(possiblilities, length):
    random_possibilities = []
    while length > 0:
        random_possibilities.append(random.choice(possiblilities))
        length -= 1
    return random_possibilities

class Transition:
    transitions = ()
    possible = ['bedroom', 'bathroom', 'livingroom', 'frontdoor']

    def __init__(self):
        self.transitions = many_random_of(self.possible, 10)

    def detect_too_many_bathroom_uses(self):
        uses = 0
        for i in range(self.transitions):
            if self.transitions[i] == 'bathroom':
                uses += 1
        return uses >= 4

    # def detect_not_waking_up(self):
    #     not_waking_up = True
    #     datetime.time()
    #     for i in range(self.transitions):
    #         if self.transitions[i] != 'bedroom':
    #             not_waking_up = False
    #             break




print(datetime.time())
