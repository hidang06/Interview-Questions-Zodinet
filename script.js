// Question 1
// Use JavaScript to write a function that fetches data from this API endpoint.
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        return response.json()  
    })
    .then(data => {
        console.log('>>> check fetch data: ', data)
    })
}

// fetchData()

// Question 2 
// Use JavaScript to write a function that creates a new post using this API endpoint.
function createResource(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'new post',
          body: 'this is creating a new post using this API endpoint',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

// createResource()

// Question 3





