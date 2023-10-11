import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Center, Radio,PasswordInput , Box } from '@mantine/core';
function ProfileSetting() {

  const navigate = useNavigate();

   const submit = ()=>{
    navigate("/Home")
   }
   const form = useForm({
    initialValues: { name: '', email: '', age: 0 },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address'),
      
    },
   });

     return (
      
      
      <Box sx={{ maxWidth: 350 }} mx="auto">
      <>
      <h2>Sign Up</h2>
  
     <form onSubmit={submit}>
      <TextInput label="name" placeholder="name" {...form.getInputProps('name')} withAsterisk/>
      
      <NumberInput
        mt="md"
        label="grade"
        placeholder="grade"
        min={1}
        max={4}
        {...form.getInputProps('grade')}withAsterisk />
      
      <TextInput mt="sm" label="email" placeholder="example@email.com" {...form.getInputProps('email')} withAsterisk/>
      <PasswordInput
      placeholder="passworrd"
      label="password"
      description="Password must contain at least one alphanumeric character, number" withAsterisk/>
      <Center><Button mt="md" type="submit">submit</Button></Center>
      
      </form>
      </>
      </Box>
    
    )
  
}

export default ProfileSetting
