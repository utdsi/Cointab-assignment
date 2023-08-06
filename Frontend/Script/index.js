




  
  const fetchButton = document.getElementById("fetchButton");

    fetchButton.addEventListener("click", async function() {
      
      fetchButton.disabled = true;

      try {
        const response = await fetch('http://127.0.0.1:8000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
          
        });

        if (!response.ok) {
          throw new Error(`Fetch request failed with status ${response.status}`);
        }

        const data = await response.json();
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        
        fetchButton.disabled = false;
        alert('Your data has been added successfully');
      }
    });

    const deleteButton = document.getElementById("deleteButton");

    deleteButton.addEventListener("click", async function() {
      const confirmed = confirm("Are you sure you want to delete your data? This action cannot be undone.");

      if (!confirmed) {
        return;
      }

      deleteButton.disabled = true;

      try {
        alert("Your database is getting deleted.");

        const response = await fetch('http://127.0.0.1:8000/del', {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error(`Delete request failed with status ${response.status}`);
        }

        alert("Your data has been deleted successfully.");
      } catch (error) {
        console.error('Error deleting data:', error);
      } finally {
        deleteButton.disabled = false;
      }
    });


    const userDetailsButton = document.getElementById("userDetailsButton");

    userDetailsButton.addEventListener("click", async function() {
      userDetailsButton.disabled = true;

      try {
        const response = await fetch('http://127.0.0.1:8000/asc');
        if (!response.ok) {
          throw new Error(`Fetch request failed with status ${response.status}`);
        }

        const userData = await response.json();
        console.log('Fetched user details:', userData);

        // Store user details in local storage
        localStorage.setItem('user', JSON.stringify(userData));

        alert('User details fetched.');

        let userdetails = JSON.parse(localStorage.getItem('user'));

        if(userdetails.length==0){


            alert('your user list is empty please add some user, then proceed');



        }else{

            window.location.href = "./Html/userdetail.html"; 

        }

        

      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        userDetailsButton.disabled = false;
      }
    });
