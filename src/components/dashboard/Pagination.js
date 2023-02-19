export const Pagination = ({currentPage, setCurrentPage, allUsers, maxItems}) => {
    const changePage = (string) => {
        if (string == 'back') {
         setCurrentPage(currentPage - 1);
        } else if (string == 'next') {
          setCurrentPage(currentPage+1);
        }
    }

    const backDisabled = () => {
        if ( currentPage >= 1 ) return true 
        else return false
    }
    const nextDisabled = () => {
        if ( allUsers.length -1 > currentPage * maxItems ) return false 
        else return true
    }

    return (
    <div>
            <button disabled={backDisabled()} style={{float: "left"}} onClick={() => changePage('back')}>back</button>
            <button disabled={nextDisabled()} style={{float: "left"}} onClick={() => changePage('next')}>next</button>

  </div>);
}