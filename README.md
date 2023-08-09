This example demonstrates form handling with FormData API. The form data is sent as a multipart/form-data request. The server receives the form data as a multipart/form-data request and parses it for you!

But in this example to keep things simple, we just have a brief look at the client side. The server side is not implemented.

## Client side

We have three parts:
1. The [event listener](https://github.com/mi-skam/fcc-form/blob/00ce2b83dfc9b73f2fee2cf46ada807b3eceb98d/script.js#L28) for the form submit event.
2. The [function](https://github.com/mi-skam/fcc-form/blob/00ce2b83dfc9b73f2fee2cf46ada807b3eceb98d/script.js#L19-L25) that handles the form submit event. `formHandler()`
3. A [utility function](https://github.com/mi-skam/fcc-form/blob/00ce2b83dfc9b73f2fee2cf46ada807b3eceb98d/script.js#L1-L17C3) that parses the form data and returns a serialized string. `jsonForm()`

## Usage

1. Clone the repository.
2. Follow the recommendations about installing the extensions.
3. Running the `live-server` by clicking "Go Live" in the status bar.
   