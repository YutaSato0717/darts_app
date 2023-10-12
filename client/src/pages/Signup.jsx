import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Center, PasswordInput, Box } from '@mantine/core';

function Signup() {
  const navigate = useNavigate();

  const form = useForm({
   initialValues: { name: '', email: '', grade: '', password: '' },

    validate: {
      name: (value) => {
        if (value.length < 2) {
          return 'Name must have at least 2 letters';
        }
        return null;
      },
      email: (value) => {
        if (!/^\S+@\S+$/.test(value) || !value.includes('@') || !value.includes('.')) {
          return 'Invalid email address';
        }
        return null;
      },
      grade: (value) => {
        if (!/^\d+$/.test(value)) {
          return 'Grade must be a number';
        }
        return null;
      },
      password: (value) => {
        if (value.length < 8) {
          return 'Password must be at least 8 characters long';
        }
        if (!/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
          return 'Password must contain at least one alphanumeric character and one number';
        }
        return null;
      },
    },
  });

  const submit = () => {
    if (!form.isValid()) {
      alert("正しく入力してください");
    } else {
      navigate('/Home');
    }
  };

  return (
    <Box sx={{ maxWidth: 350 }} mx="auto">
      <h2>Sign Up</h2>
      <form onSubmit={submit}>
  
        <TextInput label="name" placeholder="name" {...form.getInputProps('name')} 
        description="Name must have at least 2 letters"
        withAsterisk />
        <NumberInput
          mt="md"
          label="grade"
          placeholder="grade"
          min={1}
          max={4}
          description="Grade must be a number"
          {...form.getInputProps('grade')}
          withAsterisk
        />
        <TextInput
          mt="sm"
          label="email"
          placeholder="example@email.com"
          {...form.getInputProps('email')}
          withAsterisk
        />
        <PasswordInput
          placeholder="password"
          label="password"
          description="Password must contain at least one alphanumeric character and be 8 characters or longer"
          {...form.getInputProps('password')}
          withAsterisk
        />
        <Center>
          <Button mt="md" type="submit">
            submit
          </Button>
        </Center>
      </form>
    </Box>
  );
}

export default Signup;

