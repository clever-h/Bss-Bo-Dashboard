import axios from 'axios';
import React, { useState } from 'react';

function CreateIssues() {
  const [title, setTitle] = useState('');
  const [numberIssue, setNumberIssue] = useState('');
  const [dateIssue, setDateIssue] = useState('');
  const [decsIssue, setDecsIssue] = useState('');
  const [communications, setCommunications] = useState('');
  const [teamRequester, setTeamRequester] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [creator, setCreator] = useState('');
  const [status, setStatus] = useState(true);

  const optionsCommunications = [
    '-',
    'پیام رسان',
    'ایمیل',
    'تلفن',
    'Service Request',
    'دیگر',
  ];
  const optionsTeamRequester = [
    '-',
    'تیم Sale',
    'تیم RAN',
    'تیم NOC',
    'تیم QA',
    'تیم HR',
    'تیم OPS',
    'تیم IPBO',
    'تیم نصب و نگهداری',
    'تیم P2P',
    'تیم هماهنگی نصب',
    'تیم AHD',
  ];
  const optionsCreator = [
    '-',
    'پاشا کوراغلی',
    'حمیدرضا رفیعی',
    'سعید بطحایی',
    'ستاره احمدی',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('numberIssue', numberIssue);
    formData.append('dateIssue', dateIssue);
    formData.append('imgFile', imgFile);
    formData.append('decsIssue', decsIssue);
    formData.append('communications', communications);
    formData.append('teamRequester', teamRequester);
    formData.append('creator', creator);
    formData.append('status', status);
    console.log(imgFile);

    axios
      .post('http://localhost:5000/DataIssues/add', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };

  return (
    <section className="p-3">
      <section className="row">
        <section className="row d-flex align-items-center justify-content-center">
          <section className="col-xl-12 p-2">
            <form
              action="/DataIssues"
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <section className="bg-t-o b-r-10">
                <section className="col-xl-12 p-3">
                  <span>صفحه جدیدی را برای مشکل اضافه کنید</span>
                </section>

                <section className="col-xl-12 p-3">
                  <input
                    type="text"
                    className="input-content-users p-2"
                    placeholder="عنوان مشکل"
                    name="IssueTitle"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </section>

                <section className="col-xl-12 p-3">
                  <input
                    type="text"
                    className="input-content-users p-2"
                    placeholder="شناسه مرتبط (شماره فرآیند ، شماره مشتری ، شماره سیم کارت )"
                    name="Issueidentifier"
                    onChange={(e) => setNumberIssue(e.target.value)}
                    value={numberIssue}
                  />
                </section>

                <section className="col-xl-12 p-3">
                  <input
                    type="text"
                    className="input-content-users p-2"
                    placeholder="تاریخ و روز ثبت مشکل"
                    name="DateIssue"
                    onChange={(e) => setDateIssue(e.target.value)}
                    value={dateIssue}
                  />
                </section>

                <section className="col-xl-12 p-3">
                  <input
                    className="input-content-users p-2"
                    type="file"
                    name="image"
                    onChange={(e) => setImgFile(e.target.files)}
                  />
                </section>
              </section>

              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>توضیحات</span>
                </section>

                <section className="col-12 p-3">
                  <textarea
                    type="text"
                    className="input-content-users p-2"
                    placeholder="درخصوص این مشکل توضیحات را کامل بنویسید"
                    name="GoogleSchema"
                    onChange={(e) => setDecsIssue(e.target.value)}
                    value={decsIssue}
                  />
                </section>
              </section>

              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>اطلاعات تکمیلی</span>
                </section>

                <section className="row d-flex col-12 p-3">
                  <span className="col-xl-2">راه ارتباطی</span>

                  <section className="col-xl-2">
                    <select
                      className="input-content-users p-10"
                      name="Status"
                      value={communications}
                      onChange={(e) => setCommunications(e.target.value)}
                    >
                      {optionsCommunications.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </section>
                </section>

                <section className="row d-flex col-12 p-3">
                  <span className="col-xl-2">نام ایجاد کننده</span>

                  <section className="col-xl-2">
                    <select
                      className="input-content-users p-10"
                      name="Visibility"
                      value={creator}
                      onChange={(e) => setCreator(e.target.value)}
                    >
                      {optionsCreator.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </section>
                </section>

                <section className="row d-flex col-12 p-3">
                  <span className="col-xl-2">واحد درخواست کننده</span>

                  <section className="col-xl-2">
                    <select
                      className="input-content-users p-10"
                      name="Visibility"
                      value={teamRequester}
                      onChange={(e) => setTeamRequester(e.target.value)}
                    >
                      {optionsTeamRequester.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </section>
                </section>
                <section className="row d-flex col-12 p-3">
                  <span className="col-xl-2">وضعیت مشکل : فعال</span>

                  <section className="col-xl-2">
                    <input
                      type="checkbox"
                      checked={status}
                      onChange={(e) => setStatus(e.target.checked)}
                    />
                  </section>
                </section>

                <section className="col-12 p-3">
                  <input
                    type="submit"
                    className="input-content-users p-2"
                    name="SaveChange"
                    value="ثبت"
                  />
                </section>
              </section>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
}

export default CreateIssues;
