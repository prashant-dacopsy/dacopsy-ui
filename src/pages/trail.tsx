import { FiBarChart2, FiEdit3, FiLayers } from 'react-icons/fi';
import CompanyLogo from '../components/Icons/logo';
import Accordion from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';

interface TrailPageProps {}

const TrailPage: React.FC<TrailPageProps> = () => {
  return (
    <>
      <div className="flex border px-10 h-28 items-center bg-primary justify-between">
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
        <div>
          <Button
            variant={'link'}
            className="text-white text-base hover:text-slate-200"
          >
            Create your first dataset with Dacopsy
          </Button>
        </div>
      </div>
      <div className="bg-blue-50 min-h-screen">
        <div className="container flex flex-col gap-10 justify-center items-center">
          <div className="p-10 space-y-10 w-[60%]">
            <Accordion
              icon={<FiEdit3 size={40} />}
              title="Name your Dataset"
              subtitle="Give your dataset a descriptive name"
            >
              <div className="p-12">
                <Label>Name your dataset</Label>
                <Input placeholder="Workplace Stress and Coping" />
                <Button className="mt-4" size={'lg'}>
                  Next
                </Button>
              </div>
            </Accordion>
            <Accordion
              icon={<FiLayers size={40} />}
              title="Configure dimensions"
              subtitle="Configure values to get your ideal statistical output"
            >
              <div className="p-12 flex gap-5 items-center align-middle justify-center">
                <div className="flex items-center gap-1 w-[45%] mt-2">
                  <Input variant={'default'} type="text" pattern="[1-0]" />
                  <div className="text-center pb-5">
                    <Label variant={'disclaimer'}>Range</Label>
                    <div className="w-[100px] h-1 bg-gray-100 rounded-full" />
                  </div>
                  <Input variant={'default'} type="text" pattern="[1-0]" />
                </div>
                <div className="w-[200px] space-y-2">
                  <Label variant={'label'}>Skewness - 25%</Label>
                  <Slider />
                </div>
                <div className="w-[200px] space-y-2">
                  <Label variant={'label'}>Height / Spread - 45%</Label>
                  <Slider />
                </div>
              </div>
              <div className="px-12 pb-12">
                <Checkbox /> Include decimals
              </div>
            </Accordion>
            <Accordion
              icon={<FiBarChart2 size={40} />}
              title="View Result"
              subtitle="View your desired output in the form of a graph or spreadsheet"
              className=""
            >
              <div className="p-12">
                <Label>Name your dataset</Label>
                <Input placeholder="Workplace Stress and Coping" />
                <Button className="mt-4" size={'lg'}>
                  Next
                </Button>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrailPage;
