import * as Select from '@radix-ui/react-select'
import { MdGroup, MdExpandMore } from 'react-icons/md'

interface Props {
  name: string
  value: string
  onChange: (v: string) => void
}

export const TeamCodeSelect = ({ name, value, onChange }: Props) => {
  return (
    <Select.Root name={name} value={value} onValueChange={onChange}>
      <Select.Trigger className="flex items-center w-full h-12.5 bg-white border border-solid border-gray-300 rounded-3xl outline-none">
        <Select.Icon className="pl-3.5 pr-2.5">
          <MdGroup size={24} />
        </Select.Icon>
        <Select.Value placeholder={<span className="text-gray-400">Select Team Code</span>} />
        <Select.Icon className="ml-auto pr-3.5">
          <MdExpandMore size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" align="end" sideOffset={4}>
          <Select.Viewport className="flex flex-col w-[calc(var(--radix-select-trigger-width)-40px)] bg-white rounded-2xl shadow-lg">
            <Select.Item
              value="jp-tech"
              className="flex items-center h-12.5 px-3 cursor-pointer outline-none hover:bg-[rgba(227,227,227,0.2)] not-last:border-solid not-last:border-gray-300 data-[state=checked]:bg-gray-500 hover:data-[state=checked]:bg-primary not-last:border-b"
            >
              <Select.ItemText>JP-TechCompany</Select.ItemText>
            </Select.Item>
            <Select.Item
              value="us-tech"
              className="flex items-center h-12.5 px-3 cursor-pointer outline-none hover:bg-[rgba(227,227,227,0.2)] not-last:border-solid not-last:border-gray-300 data-[state=checked]:bg-gray-500 hover:data-[state=checked]:bg-primary not-last:border-b"
            >
              <Select.ItemText>US-TechCompany</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
