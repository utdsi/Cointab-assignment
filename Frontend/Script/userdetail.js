

let userData = JSON.parse(localStorage.getItem('user'));


function displayUserDetails(pageNumber, entriesPerPage) {
  const tableBody = document.getElementById('tableBody');
  const paginationDiv = document.getElementById('pagination');

  
  const startIndex = (pageNumber - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, userData.length);

 
  tableBody.innerHTML = '';
  paginationDiv.innerHTML = '';

  // Display user details for the current page
  for (let i = startIndex; i < endIndex; i++) {
    const user = userData[i];
    const row = `<tr>
      <td>${i + 1}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.city}</td>
      <td>${user.state}</td>
      <td>${user.nat}</td>
      <td>${user.age}</td>
    </tr>`;
    tableBody.insertAdjacentHTML('beforeend', row);
  }

  // Generate pagination buttons
  const totalPages = Math.ceil(userData.length / entriesPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.classList.add('pagination-button');
      if (i === pageNumber) {
        button.classList.add('active');
      }
      button.addEventListener('click', () => displayUserDetails(i, entriesPerPage));
      paginationDiv.appendChild(button);
    }
}

// Initial display on page load
displayUserDetails(1, 10);


const sorting = document.getElementById("sortSelect")

sorting.addEventListener('change',async function() {
    const selected = sorting.value

    
    if(selected=="asc"){

        try {
            const response = await fetch('http://127.0.0.1:8000/asc');
            if (!response.ok) {
              throw new Error(`Fetch request failed with status ${response.status}`);
            }
    
              userData = await response.json();
    
            // Display fetched data
            displayUserDetails(1,10)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }else{

        try {
            const response = await fetch('http://127.0.0.1:8000/dsc');
            if (!response.ok) {
              throw new Error(`Fetch request failed with status ${response.status}`);
            }
    
             userData = await response.json();
    
            // Display fetched data
            displayUserDetails(1,10)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
  });