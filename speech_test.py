from subprocess import call
import time

time.sleep(2)
#os.system("say 'hello'")
speech ="Now serving, Professor Dan, ticket number 77"
call(["espeak","-ven+f4", speech])
