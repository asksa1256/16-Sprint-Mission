import { useState, useEffect } from "react";
import Image from "next/image";

const SearchField = ({ keyword, onSearch, className, placeholder }) => {
  const [value, setValue] = useState(keyword);

  const handleSearch = () => {
    onSearch({ keyword: value });
  };

  useEffect(() => {
    setValue(keyword);
  }, [keyword]);

  return (
    <div
      className={`flex items-center py-[14px] pr-[10px] pl-5 lg:py-[14px] lg:px-5 gap-2 bg-gray-100 rounded-lg ${className}`}
    >
      <Image
        src="/images/ic-search.svg"
        alt="검색"
        width={16}
        height={16}
        className="w-4 h-4"
      />
      <input
        id="SearchField"
        type="search"
        name="keyword"
        value={value}
        placeholder={placeholder}
        className="w-full bg-transparent"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default SearchField;
