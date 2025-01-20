import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { IoSearch } from "react-icons/io5";

import { FaCaretDown } from "react-icons/fa";


const SearchBar = () => {
    return (
        <div className="items-center border rounded-md shadow-sm overflow-hidden flex-1 search_Wrapper hidden md:flex">
            <Select >
                <SelectTrigger className="hidden lg:flex 2xl:w-[150px] border-0 focus-visible:outline-none focus:ring-0 px-4">
                    <SelectValue placeholder="Falcon Fresh" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Falcon Fresh</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Input
                type="text"
                placeholder="Search product"
                className="flex-1 px-4 py-4 h-[54px] md:w-full 2xl:w-[400px] border border-l border-gray-200 border-none  focus:ring-0 focus-visible:ring-0 "
            />
            <Button className="bg-[#B21F78] hover:bg-[#B21F78] text-white h-[54px] text-2xl searchBtn outline-none">
                <IoSearch className="text-white text-2xl" />
            </Button>
        </div>
    );
};

export default SearchBar;

