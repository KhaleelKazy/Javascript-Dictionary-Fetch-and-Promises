I am passing data from one then to call another by
the argument passed into the .then in the chain. if you return a promise then the .then receives an input

Journal 2
A promise is a stand in for a value you dont have yet. if the api is down the server request has to travel and come back. catch helps use handle that by making a promise where it settles into either a resolve  or reject.

Journal 3
The Fetch API only updating a portion of the page improves user experience because traditional page would send the brower to the server when serach is clicked and throw away the entire page. The API only gives you data you need everything else stays the same. This allows the page to never blank out and doesnt reset.

Journal 4
I prefer async/await because they read up and down and your not jumping between nested functions