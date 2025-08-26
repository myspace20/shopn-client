import { Link, useSearchParams } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";
import {
  useLoginWithEmailAndPassword,
  loginInputSchema,
} from "@/features/auth/api/login";
import { useForm } from "react-hook-form";
import { paths } from "@/configs/paths";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLoginWithEmailAndPassword({
    mutationConfig: {
      onSuccess: () => {},
    },
  });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const form = useForm<z.infer<typeof loginInputSchema>>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginInputSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-center w-full">
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
        <div className="flex justify-end">
          <Link
            className="underline underline-offset-1 text-blue-600"
            to={paths.auth.register.getHref()}
          >
            Register
          </Link>
        </div>
      </form>
    </Form>
  );
};
