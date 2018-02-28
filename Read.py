#!/usr/bin/env python

import RPi.GPIO as GPIO
import SimpleMFRC522

reader = SimpleMFRC522.SimpleMFRC522()

try:
	id, text = reader.read()
	print('This is the ID of the data: ', id)
	print('This is the data in the card: ', text)

finally:
	GPIO.cleanup()

