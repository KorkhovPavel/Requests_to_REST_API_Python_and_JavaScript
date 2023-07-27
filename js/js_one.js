// get data in rest api
async function getData(link) {
    try {
      const data = await fetch(link, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await data.json();
    } catch (err) {
      console.log(err);
    }
  }

// add element whit data in rest api
async  function add_element(){
  let one = await getData('https://catfact.ninja/fact')
  const container = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.classList.add('red');
  h1.textContent = one.fact;
  container.append(h1);
  }

// start
add_element()