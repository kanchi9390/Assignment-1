const apiUrl = "https://jsonplaceholder.typicode.com/users";


async function fetchUsersWithPosts() {
  try {
    // Fetch all users
    const usersResponse = await fetch(`${apiUrl}`);
    const users = await usersResponse.json();

    // Fetch posts for each user
    const usersWithPosts = await Promise.all(
      users.map(async (user) => {
        const postsResponse = await fetch(`${apiUrl}/${user.id}/posts`);
        const posts = await postsResponse.json();

        return { ...user, posts };
      })
    );

    return usersWithPosts;
  } catch (error) {
    console.error('Error fetching users with posts:', error);
    throw error;
  }
}

// Example: Fetch all users along with their posts
fetchUsersWithPosts()
  .then(usersWithPosts => {
    console.log('Users details along with posts:', usersWithPosts);
  })
  .catch(error => {
    // Handle errors here
  });
  
  
