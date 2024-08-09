// import CoverImg from '../assets/Blue Background White Doodles Set.jpg';
import { BsLayoutSplit } from "react-icons/bs";
import { FiFolderPlus } from "react-icons/fi";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { InputWithButton } from "../components/ui/input";
import { projectsList } from "../data/projects/data";
export default function Projects() {
    return (
        <Card className="w-full">
            <CardContent className="grid md:grid-cols-12 gap-5 w-full p-5">
                <div className="col-span-3 border flex items-center justify-center  hero-image rounded-lg">
                    <InputWithButton buttonText="Add" icon={<FiFolderPlus size={25} />} btnType="primary" className="h-16 focus:ring-0 focus:border-gray-100" />
                </div>
                <div className="col-span-9">
                    <div className="grid md:grid-cols-3 gap-5 items-center">
                        {projectsList.map(item => (
                            <Card className="h-full relative pb-16">
                                <CardHeader>
                                    <CardTitle className="line-clamp-2" title={item.title}>{item.title}</CardTitle>
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
