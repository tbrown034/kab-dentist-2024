import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InsuranceSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="apple">Private or Through Employer</SelectItem>
          <SelectItem value="banana">Medicare</SelectItem>
          <SelectItem value="blueberry">Medicaid</SelectItem>
          <SelectItem value="grapes">None</SelectItem>
          <SelectItem value="pineapple">I Don't Know</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default InsuranceSelect;
