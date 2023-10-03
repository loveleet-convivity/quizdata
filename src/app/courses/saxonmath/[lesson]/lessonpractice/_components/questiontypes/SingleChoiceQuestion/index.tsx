import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function SingleChoiceQuestion({ options, defaultValue, hello }: any) {
  return (
    <div>
      <RadioGroup defaultValue={defaultValue}>
        {options.map((option: any, index: any) => (
          <div className="flex items-center space-x-2" key={index}>
            <RadioGroupItem value={option.value} id={`radio-${index}`} />
            <Label htmlFor={`radio-${index}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
