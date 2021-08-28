function user(firstName, lastName) {
    return {
      firstName, // object literal
      lastName, // property short hand
      fullName: firstName + " " + lastName,
    };
  }
  
  // const u = user("john", "doe");
  // const fullName = u.fullName;
  // const name = u.fullName;
  // property_name:alias_name
  const { fullName: name, firstName, age } = user("john", "doe");
  // console.log(fullName); // throws error
  console.log(name, firstName, age);

  // template / string literals : '', "", ``
  
  // const message = "Hello I'm " + name;
  const message = `Hello I'm ${name.toUpperCase()}`;
  console.log(message);