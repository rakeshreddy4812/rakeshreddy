document.getElementById('madlib-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const adjective = document.getElementById('adjective').value;
    const animal = document.getElementById('animal').value;
    const verb = document.getElementById('verb').value;
  
    const story = `
      Once upon a time, ${name} went to ${place}.
      There, they saw a very ${adjective} ${animal}.
      The ${animal} decided to ${verb} all around, making everyone laugh!
      It was truly an unforgettable day for ${name}.
    `;
  
    document.getElementById('story').innerText = story;
  });
  