#Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
#Example:
#Input: [[1, 2], [2, 3], [4, 5]]
#Output: [[1, 3], [4, 5]]
#Input: [[1, 5], [2, 3]]
# Output: [[1, 5]]

intervals_list = [[1,2], [2,3], [4,5]]
my_list = []

list_count = 0
while list_count < len(intervals_list):
    list_count = list_count + 1 #access second list in intervals_list
    index_count = 0 #access first item in nested list
    next_firstnr = intervals_list[list_count][index_count]
    next_secondnr = intervals_list[list_count][index_count+1]
    for first_nr, second_nr in intervals_list:

        if second_nr == next_firstnr :
            new_interval = [first_nr, next_secondnr]
            my_list.append(new_interval)
            list_count = list_count + 2
        
        elif first_nr < next_firstnr and second_nr > next_secondnr :
            new_interval = [first_nr, next_secondnr]
            print('new interv:', new_interval)
            my_list.append(new_interval)
            
        if first_nr == new_interval[0] or second_nr == new_interval [1]:
            continue
    
        else:
            new_interval = [first_nr, second_nr]
            my_list.append(new_interval)

print(my_list)

