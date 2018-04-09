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

instance = firebaseSynch_test()

while True:
    time.sleep(1)
    instance.updateDB()

    
