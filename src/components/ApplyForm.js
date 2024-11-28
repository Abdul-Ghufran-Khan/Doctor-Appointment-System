"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  bio: z.string().min(2).max(120),
  hospital: z.string().min(2).max(50),
  days: z.array(z.string()),
  fees: z.string(),
  gender: z.string(),
  appointmentTime: z.string(),
  degree: z.string(),
  specialization: z.string(),
  experience: z.string(),
  profileImage: z.string(),
  number: z.string(),
  email: z.string().email(),
  address: z.string(),
});

const onSubmit = (values) => {
    // Do something with the form values.
    console.log(values);
  };

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      days: [],
      fees: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      experience: "",
      profileImage: "",
      number: "",
      email: "",
      address: "",
    },
  });

  return (
    <Form>
      <FormField>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input />
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Bio</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Hospital</FormLabel>
        <FormControl>
          <Input />
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Days</FormLabel>
        <FormControl>
          <Input  />
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Fees</FormLabel>
        <FormControl>
          <Input  />
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Gender</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Appointment Time</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Degree</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Specialization</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Experience</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Profile Image</FormLabel>
        <FormControl>
          <Input />
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Phone Number</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <FormField>
        <FormLabel>Address</FormLabel>
        <FormControl>
          <Input/>
        </FormControl>
        <FormMessage></FormMessage>
      </FormField>

      <Button>Submit</Button>
    </Form>
  );
};

export default FormComponent;
