const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <select>
        <option value="">Select Role</option>
        <option value="customer">Customer</option>
        <option value="store_owner">Store Owner</option>
      </select>

      <button>Create Account</button>
    </div>
  );
};

export default Signup;
