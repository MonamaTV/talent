function test() {
  fetch(
    "https://494d-41-13-92-55.ngrok-free.app/api/artists/schedule?search=AKA"
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => console.log(data));
}

test();
