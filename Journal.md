I am passing data from one then to call another by
the argument passed into the .then in the chain. if you return a promise then the .then receives an input

Journal 2
A promise is a stand in for a value you dont have yet. if the api is down the server request has to travel and come back. catch helps use handle that by making a promise where it settles into either a resolve  or reject.