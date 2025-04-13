import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import postContact from "../api/postContact";
export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      //formData si an object that contains the data of the form
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message")
      );
    },
  });
  return (
    <div>
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>submitted</h3>
      ) : (
        <form onSubmit={mutation.mutate}>
          <input name="name" placeholder="Name" />
          <input name="email" placeholder="Email" type="email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
