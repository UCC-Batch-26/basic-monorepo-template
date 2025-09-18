export function LoginForm() {
  return (
    <form>
      <fieldset>
        <div>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </fieldset>
    </form>
  );
}
