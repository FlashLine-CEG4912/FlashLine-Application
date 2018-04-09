from Tkinter import *
#Tkinter with a capital "T" is for python 2

from firebase.firebase import FirebaseApplication
from firebase.firebase import FirebaseAuthentication
#import for firebase
import time

#===========================FIREBASE ACCESS=======================

app = FirebaseApplication('https://adminflashline.firebaseio.com/', authentication=None)
authentication = FirebaseAuthentication('pt14BYHQUUxMhFoa0Eigtr59aIa3Gyfvwoc209Tu',
                                        'finrazaf@gmail.com', extra={'id': 123})
app.authentication = authentication

user = authentication.get_user()

result = app.get('/Ticket/ticketnum', None)
print ('===============================')
print('Result: ' + str(result))




#===========================UI TKINTER=======================
#global variables for methods
buttoncolor = "blue"
cardTaped = False

#Global variables for UI
nowServing = app.get('/Ticket/ticketnum', None)
nWaiting = 2
nextAvailable = 10
nbservedStr = "Now Serving"

waitingStr = "Waiting on the line: " + str(nWaiting)
nextavailableStr = "Next available number: " + str(nextAvailable)


#Methods
def pickATicket():

    global buttoncolor

    #increment the num of waiting
    global nWaiting
    nWaiting += 1
    global waitingStr
    waitingStr = "Waiting on the line: " + str(nWaiting)
    nbwaiting ["text"] = waitingStr

##    
##    if buttoncolor == 'blue':
##        nbservedNUM["bg"] = "red"
##        buttoncolor = "red"
##        
##
##    else:
##        
##        nbservedNUM["bg"] = "blue"
##        buttoncolor = "blue"
##    bottomlabel1 ["text"] = "Please tap you card"

    #update now serving in database
    global nowServing
    nowServing += 1
    app.put('/Ticket',"ticketnum", nowServing )
    nbservedNUM["text"] = app.get('/Ticket/ticketnum', None)
    



#UI
root = Tk()
root.title("Ticket system")
root.minsize(width=800, height=400)
root.configure(bg="white")

#frames 
topframe = Frame(root,bg="white")
topframe.pack(side=TOP)

middleframe = Frame(root,bg="#BBDEFB")
middleframe.pack(side=TOP)

bottomframe2= Frame(root,bg="green")
bottomframe2.pack(side=BOTTOM)
bottomlabel2 = Label(bottomframe2, bg="white", height=2,text="-")
bottomlabel2.pack()

bottomframe1= Frame(root,bg="green")
bottomframe1.pack(side=BOTTOM)
bottomlabel1 = Label(bottomframe1, bg="white", height=3,text="-")
bottomlabel1.pack()

bottomframeB= Frame(root,bg="white", pady=15)
bottomframeB.pack(side=BOTTOM)


#labels
thelabel = Label(topframe,bg="white",height=3, text="FLASHLINE LOGO")


nbwaiting = Label(topframe,bg="white",height=3, width=30,
                  font=("Helvetica",12,"bold"), text=waitingStr)


nbnextavailable = Label(topframe,bg="white",height=3, width=30,
                        font=("Helvetica",12,"bold"),text=nextavailableStr)

#main label

nbserved = Label(middleframe,bg="#BBDEFB",height=2, width=10 ,
                font=("Helvetica",15,"bold"),text=nbservedStr)
nbservedNUM = Label(middleframe, bg="#BBDEFB",height=2, width=5,
                font=("Helvetica",50,"bold"),text=nowServing)


#button
button1 = Button(bottomframeB, command=pickATicket, bg= '#448AFF',
                 activebackground='#448AFF', text="Pick a ticket", fg="white")



#pack() for labels and buttons
button1.pack()

thelabel.pack()


nbwaiting.pack(side=LEFT)

nbnextavailable.pack(side=LEFT)

nbserved.pack()
nbservedNUM.pack()

def updateDB():
    time.sleep(1)
    print "dot "
    nbservedNUM["text"] = app.get('/Ticket/ticketnum', None)


root.mainloop()



