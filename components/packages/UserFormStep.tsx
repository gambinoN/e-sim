'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const userFormSchema = z.object({
  firstName: z.string().min(2, 'Ime mora imati najmanje 2 karaktera'),
  lastName: z.string().min(2, 'Prezime mora imati najmanje 2 karaktera'),
  email: z.string().email('Unesite validnu email adresu'),
  phone: z.string().min(9, 'Unesite validan broj telefona'),
});

type UserFormValues = z.infer<typeof userFormSchema>;

interface UserFormStepProps {
  onNextStep: () => void;
}

export function UserFormStep({ onNextStep }: UserFormStepProps) {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = (data: UserFormValues) => {
    // Here you would typically save the user data
    console.log('Form data:', data);
    onNextStep();
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Unesite vaše podatke</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ime</FormLabel>
                  <FormControl>
                    <Input placeholder="Unesite vaše ime" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prezime</FormLabel>
                  <FormControl>
                    <Input placeholder="Unesite vaše prezime" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="+387..." type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Nastavi na plaćanje
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}