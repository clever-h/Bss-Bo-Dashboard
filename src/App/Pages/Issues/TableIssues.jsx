import React from 'react';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TableIssues() {
  const [dataI, setDataI] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchData() {
    try {
      const response = await axios.get(
        //'https://bss-bo.iran.liara.run/DataEmployee'
        'http://localhost:5000/DataIssues/'
      );
      setDataI(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="p-3">
      <section className="row">
        <section className="row d-flex align-items-center justify-content-center">
          <section className="col-xl-12 p-2">
            <section className="bg-t-o b-r-10">
              <section className="d-flex align-items-center justify-content-between p-3">
                <span>نمایش تیکت ها</span>
              </section>

              <section className="row d-flex align-items-center justify-content-between p-3">
                <section className="col-xl-6 d-flex align-items-center justify-content-start">
                  <span>نشان دادن</span>

                  <select
                    className="input-forms p-1 m-2 cursor-pointer"
                    name="number-of-items"
                  >
                    <option defaultValue="5">5</option>
                    <option defaultValue="10">10</option>
                    <option defaultValue="15">15</option>
                    <option defaultValue="20">20</option>
                  </select>

                  <span>آیتم</span>
                </section>

                <section className="col-xl-6 d-flex align-items-center justify-content-end">
                  <span>جستجو</span>

                  <form className="form-search" method="GET">
                    <input
                      placeholder="جستجو"
                      className="input-form-search"
                      name="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Search titleAccess="جستجوی کلمه مورد نظر" />
                  </form>
                </section>
              </section>
            </section>
          </section>

          <section className="col-xl-12 p-2">
            <section className="bg-t-o b-r-10 pr-2 pl-2">
              <section className="p-2 table-users-page-new-user-request">
                <table>
                  <thead>
                    <tr>
                      <th>نام شخص</th>
                      <th>موضوع</th>
                      <th>تاریخ</th>
                      <th>شناسه</th>
                      <th>درخواست دهنده</th>
                      <th>راه ارتباطی</th>
                      <th>وضعیت</th>
                      <th>مشاهده</th>
                      <th>حذف</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dataI &&
                      dataI.length > 0 &&
                      dataI
                        .filter((item) =>
                          item.title.toLowerCase().includes(search)
                        )
                        .map((issueObj, index) => (
                          <tr key={issueObj._id}>
                            <td>{issueObj.creator}</td>
                            <td>{issueObj.title}</td>
                            <td>{issueObj.dateIssue}</td>
                            <td>{issueObj.numberIssue}</td>
                            <td>{issueObj.teamRequester}</td>
                            <td>{issueObj.communications}</td>
                            <td>
                              <span className="bg-t-d-m b-r-11 pr-1 pl-1">
                                {issueObj.statusIssue}
                              </span>
                            </td>
                            <td>
                              <Link to="/PageIssues">
                                <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                                  مشاهده
                                </span>
                              </Link>
                            </td>

                            <td>
                              <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                                حذف
                              </span>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </section>
            </section>
          </section>

          <section className="col-xl-12 p-2">
            <section className="bg-t-o b-r-10">
              <section className="row d-flex align-items-center justify-content-between p-3">
                <section className="col-xl-6 d-flex align-items-center justify-content-start">
                  <button className="input-buttons">قبلی</button>
                  <button className="input-buttons">1</button>
                  <button className="input-buttons">2</button>
                  <button className="input-buttons">3</button>
                  <button className="input-buttons">...</button>
                  <button className="input-buttons">10</button>
                  <button className="input-buttons">بعدی</button>
                </section>

                <section className="col-xl-6 d-flex align-items-center justify-content-end">
                  <span>نمایش 1 تا 5 از 5 ورودی</span>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default TableIssues;
