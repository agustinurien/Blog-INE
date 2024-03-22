"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";




const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    };




    return (

        <div className="searchBarContainer">
            <input
                type="search"
                onChange={(e) => handleSearch(e.target.value)}
                className="searchBar"
                placeholder="Search..."
                defaultValue={searchParams.get('query')?.toString()}


            />
        </div>

    )
}
export default Search

