import math;
import random;
list1=[]
for i in range (0,25):
    x=-1
    while x ==-1 or x in list1:
        x= math.floor(random.random()*100)
    list1.append(x)
    
print(list1)
    