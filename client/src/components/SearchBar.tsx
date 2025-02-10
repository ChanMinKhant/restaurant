import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className='flex mt-12 items-center w-full max-w-md mx-auto my-4 px-4 border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500'>
      <FaSearch className='text-gray-500 ml-3' />
      <input
        type='text'
        placeholder='Search for food...'
        className='w-full p-2 outline-none'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
