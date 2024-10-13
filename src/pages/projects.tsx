// import CoverImg from '../assets/Blue Background White Doodles Set.jpg';
import { FiDatabase, FiFolder, FiPlus } from 'react-icons/fi';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { projectsList } from '../data/projects/data';

export default function Projects() {
  const countries = ['Argentina', 'Brazil', 'Nepal', 'Paraguay'];

  return (
    <Card className="w-full border-none bg-transparent">
      <CardContent className="grid md:grid-cols-12 gap-5 w-full p-5">
        <div className="col-span-12  spacing-1">
          <div className="grid md:grid-cols-4 grid-offset-4 gap-3">
            <div className="flex flex-1 flex-col h-full text-center items-center justify-center bg-white px-3 rounded-lg gap-3 align-center py-3 w-full">
              <span className="text-xl">
                8<span className="text-zinc-400">/100</span>
              </span>
              <span className="text-sm">projects utilized</span>
            </div>

            <div className="flex bg-white rounded-lg flex-1 flex-col p-0">
              <div className="flex">
                <img src="/images/projects-art.png" />
              </div>

              <div className="flex flex-col spacing-3 p-3">
                <div className="flex flex-row gap-2 rounded-md">
                  <Input
                    placeholder="Name your new project"
                    className="py-5 border-zinc-800"
                  />
                  <Button size={'lg'} className="rounded-md border">
                    <FiPlus />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 rounded-lg p-3">
          <div className="grid md:grid-cols-1 gap-5 items-center">
            <div className="py-3 px-3">
              <span className="text-lg">Recently accessed</span>
            </div>

            <div className="grid md:grid-cols-12  items-start">
              <div className="col-span-8">
                {projectsList.map((item, index) => (
                  <Card
                    key={item.id}
                    className=" border-none m-2 cursor-pointer"
                  >
                    <CardContent className="py-5">
                      <div className="flex flex-row gap-4">
                        <span className="bg-zinc-100 rounded-full p-4">
                          <FiFolder fontSize={'15pt'} />
                        </span>
                        <Label
                          title={item.title}
                          variant="subtitle"
                          className="line-clamp-2"
                        >
                          {item.title}
                          <CardDescription>{item.date}</CardDescription>
                        </Label>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="col-span-4 bg-white rounded-md p-4">
                <div className="flex flex-col gap-4">
                  <Label className="text-zinc-400">Name</Label>
                  <span className="text-xl">
                    Coronavirus disease (COVID-19): a scoping review
                  </span>

                  <Label className="text-zinc-400">Description</Label>
                  <span className="text-md">
                    A scoping review of Coronavirus disease (COVID-19) aims to
                    systematically examine the existing literature and evidence
                    regarding various aspects of the pandemic.
                  </span>

                  <Label className="text-zinc-400">Datasets</Label>
                  <div className="flex flex-col">
                    {countries.map((country) => (
                      <div className="flex w-full p-2 gap-2">
                        <div className="flex flex-none ">
                          <FiDatabase fontSize={'20pt'} />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <span className="text-md">
                            {country} - Case study
                          </span>
                          <span className="text-xs text-zinc-500">
                            Last modified - yesterday
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
