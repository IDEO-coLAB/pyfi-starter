import time

# PyFi lets you send messages to a client two ways:
# by calling pyfi_message or by returning a value.
# pyfi_message is automagically injected into the environment
# by PyFi

def slow_task(time_per_tick):
    total_time = 0
    for i in range(0,100):
        # send message to client's onMessage handler
        pyfi_message({"progress": i})
        time.sleep(time_per_tick)
        total_time += time_per_tick
    # return value to client   
    return(total_time)

