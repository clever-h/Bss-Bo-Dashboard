import React from 'react';

const PaginationPageD = ({ countData, search }) => {
  return (
    <section className="col-xl-12 p-2">
      <section className="p-2 table-users-page-new-user-request">
        <section className="col-xl-12 p-2">
          <section className="bg-t-o b-r-10 pr-2 pl-2">
            <section className="p-2 table-users-page-new-user-request">
              <table>
                <thead>
                  <tr>
                    <th>نام کارمند</th>
                    <th>شماره داخلی</th>
                    <th>سمت شغلی</th>
                    <th>ایمیل</th>
                  </tr>
                </thead>

                <tbody>
                  {countData &&
                    countData.length > 0 &&
                    countData
                      .filter((item) =>
                        item.name.toLowerCase().includes(search)
                      )
                      .map((userObj, index) => (
                        <tr key={userObj._id}>
                          <td>{userObj.name}</td>
                          <td>
                            <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                              {userObj.phone}
                            </span>
                          </td>
                          <td>{userObj.position}</td>
                          <td> {userObj.email}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default PaginationPageD;
