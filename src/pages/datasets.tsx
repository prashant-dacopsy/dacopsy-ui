import { useState } from 'react';
import LineChart from '../components/Charts/LineChart';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';

import {
  FiBox,
  FiCpu,
  FiDownload,
  FiEdit2,
  FiInfo,
  FiLayers,
  FiMenu,
} from 'react-icons/fi';
import { SpreadsheetChart } from '../components/Charts/Spreadsheet';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '../components/ui/dialog';
import { Input, InputWithButton } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover';
import { Slider } from '../components/ui/slider';
import { datasetsList } from '../data/datasets/data';
import { testFeatures } from '../data/datasets/test-features';

function Datasets() {
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([]);

  function handleCheckbox(str: string) {
    setSelectedDatasets((prevState) => [...prevState, str]);
  }

  return (
    <Card className="w-full border-none">
      <CardContent className="grid md:grid-cols-12 gap-5 w-full p-5">
        <div className="col-span-3 rounded-lg">
          <div className="flex flex-col gap-3">
            <Label variant={'input'}>Project</Label>
            <span className="text-base text-primary">
              Coronavirus disease (COVID-19): a scoping review
            </span>
            <InputWithButton
              placeholder="Your dataset Name"
              buttonText="Add"
              icon={<FiLayers size={25} />}
              btnType="secondary"
              className="h-16 w-full focus:ring-0 focus:border-gray-100"
            />
            {datasetsList.map((item) => (
              <div
                key={item.id}
                className="flex p-5 rounded-lg items-center gap-5 border hover:bg-slate-50"
              >
                <Checkbox onClick={() => handleCheckbox(item.title)} />
                <div className="flex flex-col">
                  <Label variant={'subtitle'}>{item.title}</Label>
                  <Label variant={'input'}>{item.description}</Label>
                  <Label variant={'input'} className="text-xs">
                    {item.date}
                  </Label>
                </div>
                <div className="ml-auto flex flex-col gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <FiMenu
                        size={20}
                        className="text-gray-400 hover:text-primary cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-10">
                      <div className="grid grid-cols-2 gap-10">
                        <section className="">
                          <div className="flex flex-col spacing-2 gap-3 space-y-2 mb-6">
                            <Label variant={'label'}>Enter Range</Label>
                            <div className="flex gap-5 items-center">
                              <Input placeholder="Min" className="p-5" />
                              <Input placeholder="Max" className="p-5" />
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
                              <Input placeholder="Mean (μ)" className="p-5" />
                              <Input placeholder="Mode" className="p-5" />
                              <Input placeholder="S.D (σ)" className="p-5" />
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
          <div className="grid md:grid-cols-1 gap-5 items-center">
            {/* Items selector */}
            <div className="flex flex-col gap-2 bg-gradient-to-r from-indigo-100 via-blue-200 to-emerald-300 p-10 w-full">
              {!selectedDatasets.length && (
                <span className="text-lg text-black">
                  Selected datasets will appear here
                </span>
              )}

              <div className="flex flex-row gap-3">
                {!!selectedDatasets?.length &&
                  selectedDatasets.map((dataset) => (
                    <div
                      key={dataset}
                      className="bg-white rounded-lg p-3 w-fit"
                    >
                      {dataset}
                    </div>
                  ))}
              </div>
            </div>

            {/* Test selector */}
            <div className="flex p-2">
              <div className="flex flex-row items-center gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={'secondary'} size={'lg'}>
                      <FiCpu />
                      Select test
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-10 bg-zinc-50">
                    <div className="flex p-3">
                      <span className="text-lg">Select a statistical test</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 spacing-3">
                      {testFeatures.map((feature) => (
                        <div
                          key={feature.title}
                          className="flex flex-col gap-3 bg-white cursor-pointer rounded-lg border p-3 hover:border-2 hover:shadow-xl"
                        >
                          <img alt={feature.title} src={feature.iconUrl} />
                          <div className="flex flex-row gap-2">
                            <span className="text-md">{feature.title}</span>
                            <Popover>
                              <PopoverTrigger>
                                <FiInfo className="text-xl" />
                              </PopoverTrigger>
                              <PopoverContent>
                                {feature.description}
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
                <span className="flex flex-row items-center gap-2 border rounded-lg p-3">
                  <FiBox />
                  T-Test
                </span>
                <Button>
                  <FiDownload />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-12 p-5 gap-5">
              <div className="col-span-6 p-2 w-full">
                <SpreadsheetChart />
              </div>
              <div className="col-span-6 p-2">
                <div className="flex flex-col items-start gap-3">
                  <div className=" flex flex-col">
                    <span className="text-lg">Results</span>
                  </div>

                  <div className="border flex flex-col rounded-lg p-3 gap-3">
                    <div className="flex flex-row items-center gap-3">
                      <span className="text-2xl">3.12</span>
                      <span className="text-lg">
                        <FiEdit2 />
                      </span>
                    </div>
                    <Label variant="default" className="font-semibold">
                      T-value
                    </Label>
                    <span className="text-sm text-zinc-500">
                      measures how far the sample means are from each other in
                      terms of standard errors.
                    </span>
                    <div className="flex flex-row gap-3">
                      <Input
                        type="text"
                        variant={'default'}
                        className="w-fit"
                        placeholder="Your t-value"
                      />
                      <Button>Manipulate</Button>
                    </div>
                  </div>
                  <div className="border flex flex-col rounded-lg p-3 gap-3">
                    <div className="flex flex-row items-center gap-3">
                      <span className="text-2xl">0.012</span>
                      <span className="text-lg">
                        <FiEdit2 />
                      </span>
                    </div>
                    <Label variant="default" className="font-semibold">
                      P-value
                    </Label>
                    <span className="text-sm text-zinc-500">
                      tells you the likelihood that this difference is due to
                      chance. If it’s less than your chosen significance level
                      (commonly 0.05), you can conclude that the means are
                      significantly different.
                    </span>
                    <div className="flex flex-row gap-3">
                      <Input
                        type="text"
                        variant={'default'}
                        className="w-fit"
                        placeholder="Your p-value"
                      />
                      <Button>Manipulate</Button>
                    </div>
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

export default Datasets;
