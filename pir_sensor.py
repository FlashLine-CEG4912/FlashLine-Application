import sys
import time
import RPi.GPIO as gpio

gpio.setwarnings(False)
gpio.setmode(gpio.BOARD)
gpio.setup(40,gpio.IN)

def motion_detect():
    try:
        while True:
            time.sleep(1)
            if gpio.input(40)==1:
                print "Motion Detected"
#		time.sleep(0.2)
	    else:
                print "No motion detected"
    except KeyboardInterrupt:
        gpio.cleanup()
        print "\n Terminated by User"
        sys.exit()


if __name__ == "__main__":
    motion_detect()
