const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
for (let i = 1; i <= 10; i++) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
