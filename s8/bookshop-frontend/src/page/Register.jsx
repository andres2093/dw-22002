export const Register = () => {
  return (
    <div>
      <form onSubmit="">
        <h3>Register</h3>
        <input type="text" placeholder="Name"/>
        <input type="lastname" placeholder="Lastname"/>
        <input type="address" placeholder="Email"/>
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}