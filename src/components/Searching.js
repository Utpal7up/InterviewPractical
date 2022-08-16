import React from 'react'

const Searching = () => {
    const [searchInput, setSearchInput] = useState('');
    function search() {
        setSearchInput(searchValue)
    }

    const search = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{  
            setFilteredResults(APIData)
        }
    }
    return (
        <div>
            let cars = [Audi, BMW, Ferrari, Porsche, Lamborghini, Lykan, Skoda, Honda,
            Hyundai, Maruti];
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => search(e.target.value)}
            />
        </div >
    )
}

export default Searching
