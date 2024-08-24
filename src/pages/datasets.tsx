import { BsDatabase, BsGear } from 'react-icons/bs';
import LineChart from '../components/Charts/LineChart';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Input, InputWithButton } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import { datasetsList } from '../data/datasets/data';

const iconSize = 30;
function Datasets() {
  return (
    <Card className="w-full border-none">
      <CardHeader>
        <Label variant={'subtitle'}>Datasets</Label>
        <Label variant={'input'}>See your data in action!</Label>
      </CardHeader>
      <CardContent className="grid md:grid-cols-12 gap-5 w-full p-5">
        <div className="col-span-3 rounded-lg">
          <div className="flex flex-col gap-1">
            <Label variant={'input'}>Project</Label>
            <Label className="text-base text-primary">
              University of Cambridge - Fall 2023
            </Label>
            <InputWithButton
              placeholder="Your Database Name"
              buttonText="Add"
              icon={<BsDatabase size={25} />}
              btnType="secondary"
              className="h-16 w-full focus:ring-0 focus:border-gray-100"
            />
            {datasetsList.map((item) => (
              <div
                key={item.id}
                className="flex p-2 rounded-lg items-center gap-2 border hover:bg-slate-50"
              >
                <BsDatabase size={iconSize} />
                <div className="flex flex-col">
                  <Label variant={'subtitle'}>{item.title}</Label>
                  <Label variant={'input'}>{item.description}</Label>
                  <Label variant={'input'} className="text-xs">
                    {item.date}
                  </Label>
                </div>
                <div className="ml-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <BsGear
                        size={20}
                        className="text-gray-400 hover:text-primary cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl">
                      <DialogHeader>
                        <DialogTitle>Configure data</DialogTitle>
                        <DialogDescription>Normal Dist.2</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-10">
                        <section className="">
                          <div className="space-y-2 mb-6">
                            <Label variant={'label'}>Enter Range</Label>
                            <div className="flex gap-5 items-center">
                              <Input placeholder="Min" />
                              <Input placeholder="Max" />
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox />{' '}
                              <Label variant={'input'}>
                                Include decimals in dataset
                              </Label>
                            </div>
                          </div>
                          <div className="flex gap-5 mb-6">
                            <div className="w-full space-y-2">
                              <Label>Height / Spread</Label>
                              <Slider defaultValue={[30]} />
                            </div>
                            <div className="w-full space-y-2">
                              <Label>Skewness</Label>
                              <Slider defaultValue={[40]} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Advanced</Label>
                            <div className="flex gap-5 items-center">
                              <Input placeholder="Mean (μ)" />
                              <Input placeholder="Mode" />
                              <Input placeholder="S.D (σ)" />
                            </div>
                          </div>
                        </section>
                        <section className="border-l">
                          <LineChart />
                        </section>
                      </div>
                      <DialogFooter>
                        <Button size={'lg'} type="submit">
                          Save
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-9 border rounded-lg">
          <div className="grid md:grid-cols-3 gap-5 items-center"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Datasets;
