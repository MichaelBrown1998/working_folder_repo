const Form = () => `
<form>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" name="name">
    </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name="email">
  </div>

  <div class="mb-3">
    <label for="tel" class="form-label">Phone #</label>
    <input type="tel" class="form-control" id="tel" name="phone">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;

export default Form;
