import { useState } from "react";

const initial = {
  name: "",
  email: "",
  pass: "",
  post: "",
  gender:""
};
function StudentForm() {
  const [formData, setFormData] = useState(initial);

  const { name, email, pass, post, gender } = formData;

  function handleclick(e) {
    e.preventDefault();
    const { name,value } = e.target;
    setFormData({ ...formData, [name]: value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={handleclick}
        placeholder="Enter Your Name"
        name="name"
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleclick}
        placeholder="Enter Your Email"
      />
      <br />
      <br />
      <input
        type="password"
        name="pass"
        value={pass}
        onChange={handleclick}
        placeholder="Enter Correct Password"
      />
      <br />
      <br />
      <select value={post} onChange={handleclick} name="post" id="">
        <option value="Freshman">Freshman</option>
        <option value="Sophomore">Junior</option>
        <option value="Senior">Senior</option>
      </select>
      <br />
      <br />
      Male{" "}
      <input type="radio" name="gender" value={"Male"} onChange={handleclick} />
      Female{" "}
      <input
        type="radio"
        value={"Female"}
        onChange={handleclick}
        name="gender"/>
      <br /><br />
      <input type="submit" />
    </form>
  );
}

export default StudentForm;
