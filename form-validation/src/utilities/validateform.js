export default function validateForm(data) {

  const errors = {};

  if (!data.name.trim()) {

    errors.name = 'Name is required.';

  } else if (data.name.length < 2) {

    errors.name = 'Name must be at least 2 characters.';

  } else if (!/^[a-zA-Z\s'-]+$/.test(data.name)) {

    errors.name = 'Name must contain only letters and valid characters.';

  }

  if (!data.email.trim()) {

    errors.email = 'Email is required.';

  } else if (data.email.length < 5) {

    errors.email = 'Email must be at least 5 characters.';

  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {

    errors.email = 'Email format is invalid.';

  }

  if (!data.age.toString().trim()) {

    errors.age = 'Age is required.';

  } else if (isNaN(Number(data.age))) {

    errors.age = 'Age must be a number.';

  } else if (Number(data.age) <= 0) {

    errors.age = 'Age must be greater than zero.';

  }

  return errors;

}