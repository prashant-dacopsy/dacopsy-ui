import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
function Admin() {
  return (
    <div className="flex items-center flex-col w-full gap-4 justify-center h-screen">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-primary">Dacopsy</CardTitle>
          <CardDescription>Datacooker for Psychologists</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-48 items-center space-y-4">
            <div className="space-y-1">
              <Label>Email * </Label>
              <Input variant={'default'} placeholder="Email" type="email" />
            </div>
            <div className="space-y-1">
              <Label>Password *</Label>
              <Input
                variant={'default'}
                placeholder="Password"
                type="password"
              />
            </div>
            <div>
              <Link
                to="#"
                className="w-fit float-right underline underline-offset-4 text-gray-400 hover:text-primary"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Sign-up!</Button>
          <Button>Login!</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Admin;
