This example demonstrates form handling with FormData API. The form data is sent as a multipart/form-data request. The server receives the form data as a multipart/form-data request and parses it for you!

But in this example to keep things simple, we just have a brief look at the client side. The server side is not implemented.

## Client side

We have three parts:
1. The event listener for the form submit event.
2. The function that handles the form submit event. `formHandler()`
3. A utility function that parses the form data and returns a serialized string. `jsonForm()`

## Usage

1. Clone the repository.
2. Follow the recommendations about installing the extensions.
3. Running the `live-server` by clicking "Go Live" in the status bar.
   