'use client'
import TablePagination from "@/Components/TablePagination";
import UserTable from "@/Components/UserTable";
import { ActiveUsers, LoanUsers, SavingUsers, Users } from "@/Components/UsersIcon";

export default function Page() {
  return (
    <section className='userpage'>
      <h2 className='users'>Users</h2>
      <div className='displaybox'>
        <div>
          <span><Users /></span>
          <span className="boxheading">USERS</span>
          <span className='boxnumber'>2,453</span>
        </div>
        <div>
          <span><ActiveUsers /></span>
          <span className="boxheading">ACTIVE USERS</span>
          <span className='boxnumber'>2,453</span>
        </div>
        <div>
          <span><LoanUsers /></span>
          <span className="boxheading">USERS WITH LOANS</span>
          <span className='boxnumber'>12,453</span>
        </div>
        <div>
          <span><SavingUsers /></span>
          <span className="boxheading">USERS WITH SAVINGS</span>
          <span className='boxnumber'>102,453</span>
        </div>
      </div>

      <section className="">
        <div className="anotherwrapper ">

      <UserTable />
        </div>


      <div className="paginationinfo horflex">
        <div className="numbershown">
          <p>Showing    <select
            value={5}
            className="rowsPerPage"

          >
            {[5, 10, 25, 50, 100].map((row) => (
              <option key={row}>{row}</option>
            ))}
          </select> out of 100</p>
        </div>
        <div className="pagination">
          <TablePagination itemsPerpage={5} />
        </div>
      </div>
      </section>
    </section>
  )
}

// export default Page;



