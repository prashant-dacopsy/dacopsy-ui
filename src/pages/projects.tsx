// import CoverImg from '../assets/Blue Background White Doodles Set.jpg';
import { BsLayoutSplit } from "react-icons/bs";
import { FiFolderPlus } from "react-icons/fi";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../components/ui/card";
import { InputWithButton } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { projectsList } from "../data/projects/data";
export default function Projects() {
    return (
        <Card className="w-full border-none">
            <CardContent className="grid md:grid-cols-12 gap-5 w-full p-5">
                <div className="col-span-3 border flex items-center justify-center  hero-image rounded-lg">
                    <InputWithButton placeholder="Add Project" buttonText="Add" icon={<FiFolderPlus size={25} />} btnType="primary" className="h-16 focus:ring-0 focus:border-gray-100" />
                </div>
                <div className="col-span-9">
                    <div className="grid md:grid-cols-3 gap-5 items-center">
                        {projectsList.map(item => (
                            <Card key={item.id} className="h-full relative pb-16">
                                <CardHeader>
                                    <Label title={item.title} variant='subtitle' className="line-clamp-2" >{item.title}</Label>
                                    <CardDescription>{item.date}</CardDescription>
                                </CardHeader>
                                <CardFooter className="absolute bottom-0 right-0">
                                    <Button>
                                        <BsLayoutSplit />  View Datasets
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
