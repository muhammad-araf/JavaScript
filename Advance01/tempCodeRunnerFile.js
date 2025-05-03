(async function getUserData() {
    const response = await fetch('https://api.github.com/users/muhammad-araf');
    const data = await response.json();
    console.log(data);
})();