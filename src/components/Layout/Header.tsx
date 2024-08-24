import { FaSearch } from 'react-icons/fa';
import CompanyLogo from '../Icons/logo';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { InputWithIcon } from '../ui/input';
import { Label } from '../ui/label';

export default function Header() {
  return (
    <div className="flex  px-10 h-28 items-center bg-primary justify-between">
      <div className="">
        <div className="flex gap-2 items-center">
          <CompanyLogo size={40} type="dark" />
          <div className="flex flex-col gap-0">
            <Label className="text-white" variant={'title'}>
              Dacopsy
            </Label>
            <Label className="text-white font-normal" variant={'label'}>
              Datacooker for Psychologists
            </Label>
          </div>
        </div>
      </div>
      <div className="">
        <InputWithIcon
          className="border w-[600px] h-[50px] focus:border-neutral-200 items-center bg-transparent text-white placeholder:text-white"
          placeholder="Search datasets, projects"
          icon={<FaSearch size={16} />}
          position={'right'}
        />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 ">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ">
                <Label className="text-white cursor-pointer">Matt Morgan</Label>
                <Label variant="input">Free version</Label>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
