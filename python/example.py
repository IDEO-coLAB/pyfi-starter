import time

def slow_task(time_per_tick):
    total_time = 0
    for i in range(0,100):
        pyfi_message({"progress": i})
        time.sleep(time_per_tick)
        total_time += time_per_tick
    return(total_time)
