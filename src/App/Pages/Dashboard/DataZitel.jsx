import React from 'react';
import { Search } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PaginationPageD from '../PaginationPageD';

function DataZitel() {
  const [dataZ, setDataZ] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [itemShow, setItemShow] = useState('200');

  const optionsItem = ['5', '8', '10', '30', '50', '100', '200'];
  const countData = dataZ.slice(0, itemShow);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        //'https://bss-bo.iran.liara.run/DataEmployee'
        'http://localhost:5000/DataEmployee'
      );
      setLoading(false);
      setDataZ(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="p-3">
      {loading ? (
        <p>لطفا کمی صبر کنید ...</p>
      ) : (
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>اطلاعات کارمندان زیتل</span>
                </section>

                <section className="row d-flex align-items-center justify-content-between p-3">
                  <section className="col-xl-6 d-flex align-items-center justify-content-start">
                    <span>نشان دادن</span>

                    <select
                      className="input-forms p-1 m-2 cursor-pointer"
                      name="number-of-items"
                      value={itemShow}
                      onChange={(e) => setItemShow(e.target.value)}
                    >
                      {optionsItem.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}
                    </select>

                    <span>آیتم</span>
                  </section>

                  <section className="col-xl-6 d-flex align-items-center justify-content-end">
                    <span>جستجو</span>

                    <form className="form-search">
                      <input
                        placeholder="نام کارمند"
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

            <PaginationPageD countData={countData} search={search} />
          </section>
        </section>
      )}
    </section>
  );
}

export default DataZitel;
