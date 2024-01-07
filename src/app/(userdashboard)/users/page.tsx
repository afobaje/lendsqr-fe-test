import TablePagination from "@/Components/TablePagination";
import UserTable from "@/Components/UserTable";
import { ActiveUsers, LoanUsers, SavingUsers, Users } from "@/Components/UsersIcon";

async function Page() {
  return (
    <section className='userpage'>
      <h2 className='users'>Users</h2>
      <div className='displaybox'>
        <div>
          <span><Users/></span>
          <span className="boxheading">USERS</span>
          <span className='boxnumber'>2,453</span>
        </div>
        <div>
          <span><ActiveUsers/></span>
          <span className="boxheading">ACTIVE USERS</span>
          <span className='boxnumber'>2,453</span>
        </div>
        <div>
          <span><LoanUsers/></span>
          <span className="boxheading">USERS WITH LOANS</span>
          <span className='boxnumber'>12,453</span>
        </div>
        <div>
          <span><SavingUsers/></span>
          <span className="boxheading">USERS WITH SAVINGS</span>
          <span className='boxnumber'>102,453</span>
        </div>
      </div>

      <section className="">
        <UserTable/>


        <div className="paginationinfo">
          <div className="numbershown">
            <p>Showing 100 out of 100</p>
          </div>
          <div className="pagination">
          {/* <TablePagination/> */}
          </div>
        </div>
      </section>
    </section>
  )
}

export default Page;



