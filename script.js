const jsonForm = (data) => {
  const output = {};

  for (let [key, value] of data) {
    // if output!key] is a string, convert it to an array and push value to it
    if (typeof output[key] === "string") {
      output[key] = [output[key], value];
      // if output[key] is an object, push a value to it
    } else if (typeof output[key] === "object") {
      output[key] = [...output[key], value];
    } else {
      output[key] = value;
    }
  }

  return JSON.stringify(output);
};

const formHandler = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  
  return jsonForm(data);
};

const form = document.querySelector("form");
form.addEventListener("submit", formHandler);
