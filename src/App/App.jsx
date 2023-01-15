import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Settings,
  Search,
  Menu,
  Fullscreen,
  LightMode,
  FullscreenExit,
  DarkMode,
  ArrowForward,
  Dashboard,
  KeyboardArrowDown,
  Analytics,
  SupportAgent,
  ShoppingCart,
  ArrowUpward,
} from '@mui/icons-material';

import CRM from './Pages/Dashboard/CRM/CRM';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let MpTheme = sessionStorage.getItem('MpTheme');
    let MpThemeOther = sessionStorage.getItem('MpThemeOther');
    let MpThemeDropdownMenu = sessionStorage.getItem('MpThemeDropdownMenu');
    let MpThemeColor = sessionStorage.getItem('MpThemeColor');
    let MpThemeOtherHover = sessionStorage.getItem('MpThemeOtherHover');
    let Root = document.querySelector(':root');

    this.state = {
      StateIconDarkLightMode: true,
      IconDarkLightMode: <LightMode titleAccess="تم روشن" />,
      StateFullScreen: false,
      StateIconFullScreen: true,
      IconFullScreen: <Fullscreen titleAccess="رفتن به حالت تمام صفحه" />,
      StateHeaderPanel: true,
      StateMenuPanel: true,
      StateIconMenuPanel: false,
      MpTheme: `${MpTheme}`,
      MpThemeOther: `${MpThemeOther}`,
      MpThemeOtherHover: `${MpThemeOtherHover}`,
      MpThemeDropdownMenu: `${MpThemeDropdownMenu}`,
      MpThemeColor: `${MpThemeColor}`,
    };

    Root.style.setProperty('--mp-theme', `${MpTheme}`);
    Root.style.setProperty('--mp-theme-other', `${MpThemeOther}`);
    Root.style.setProperty('--mp-theme-other-hover', `${MpThemeOtherHover}`);
    Root.style.setProperty(
      '--mp-theme-dropdown-menu',
      `${MpThemeDropdownMenu}`
    );
    Root.style.setProperty('--mp-theme-color', `${MpThemeColor}`);

    if (
      !MpTheme &&
      !MpThemeOther &&
      !MpThemeOtherHover &&
      !MpThemeDropdownMenu &&
      !MpThemeColor
    ) {
      this.FuncResetSetting();
    }

    setTimeout(() => {
      this.FuncSetActivateMenuSidebar();
    }, 100);
  }
  //////////////////////////////////////////////////////////////////////

  FuncResetSetting = () => {
    let Root = document.querySelector(':root');
    Root.style.setProperty('--mp-theme', '#232a3b');
    Root.style.setProperty('--mp-theme-other', '#283144');
    Root.style.setProperty('--mp-theme-other-hover', '#666cff');
    Root.style.setProperty('--mp-theme-dropdown-menu', '#1c222f');
    Root.style.setProperty('--mp-theme-color', '#d8deea');

    sessionStorage.setItem('MpTheme', '#232a3b');
    sessionStorage.setItem('MpThemeOther', '#283144');
    sessionStorage.setItem('MpThemeOtherHover', '#666cff');
    sessionStorage.setItem('MpThemeDropdownMenu', '#1c222f');
    sessionStorage.setItem('MpThemeColor', '#d8deea');

    this.setState({
      MpTheme: '#232a3b',
      MpThemeOther: '#283144',
      MpThemeOtherHover: '#666cff',
      MpThemeDropdownMenu: '#1c222f',
      MpThemeColor: '#d8deea',
    });
  };

  FuncOpenCloseSetting = () => {
    let Setting = document.querySelector('.setting');
    let Profile = document.querySelector('.profile');
    let Search = document.querySelector('.search-box');

    Profile.style.display = '';
    Search.style.display = '';

    if (Setting.style.left === '' || Setting.style.left === '-270px') {
      Setting.style.left = '0';
    } else {
      Setting.style.left = '';
    }
  };

  FuncOpenCloseProfile = () => {
    let Setting = document.querySelector('.setting');
    let Profile = document.querySelector('.profile');
    let Search = document.querySelector('.search-box');

    Setting.style.left = '';
    Search.style.display = '';

    if (Profile.style.display === '' || Profile.style.display === 'none') {
      Profile.style.display = 'block';
    } else {
      Profile.style.display = '';
    }
  };

  FuncOpenCloseFullscreen = () => {
    if (this.state.StateIconFullScreen === true) {
      this.setState({
        IconFullScreen: <FullscreenExit titleAccess="خروج از حالت تمام صفحه" />,
        StateIconFullScreen: false,
      });
    } else {
      this.setState({
        IconFullScreen: <Fullscreen titleAccess="رفتن به حالت تمام صفحه" />,
        StateIconFullScreen: true,
      });
    }

    if (this.state.StateFullScreen === false) {
      this.setState({
        StateFullScreen: true,
      });
      document.body.requestFullscreen();
    } else if (this.state.StateFullScreen === true) {
      this.setState({
        StateFullScreen: false,
      });
      document.exitFullscreen();
    }
  };

  FuncOpenCloseSearch = () => {
    let Setting = document.querySelector('.setting');
    let Profile = document.querySelector('.profile');
    let Search = document.querySelector('.search-box');

    Setting.style.left = '';
    Profile.style.display = '';

    if (Search.style.display === '' || Search.style.display === 'none') {
      Search.style.display = 'block';
    } else {
      Search.style.display = '';
    }
  };

  FuncDarkLightMode = () => {
    let Root = document.querySelector(':root');
    if (this.state.StateIconDarkLightMode === true) {
      Root.style.setProperty('--mp-theme', '#e9eef9');
      Root.style.setProperty('--mp-theme-other', '#fff');
      Root.style.setProperty('--mp-theme-other-hover', '#666cff');
      Root.style.setProperty('--mp-theme-dropdown-menu', '#f3f4f4');
      Root.style.setProperty('--mp-theme-color', '#516377');
      this.setState({
        IconDarkLightMode: <DarkMode titleAccess="تم تیره" />,
        StateIconDarkLightMode: false,
      });
    } else {
      Root.style.setProperty('--mp-theme', '#232a3b');
      Root.style.setProperty('--mp-theme-other', '#283144');
      Root.style.setProperty('--mp-theme-other-hover', '#666cff');
      Root.style.setProperty('--mp-theme-dropdown-menu', '#1c222f');
      Root.style.setProperty('--mp-theme-color', '#d8deea');
      this.setState({
        IconDarkLightMode: <LightMode titleAccess="تم روشن" />,
        StateIconDarkLightMode: true,
      });
    }
  };

  FuncOpenCloseMenuSideBar = () => {
    let Sidebar = document.querySelector('.sidebar');
    let Header = document.querySelector('.header');
    let Content = document.querySelector('.content');

    if (Sidebar.style.right === '' || Sidebar.style.right === '240px') {
      Sidebar.style.right = '-240px';
      Header.style.right = '0';
      Content.style.right = '0';
    } else {
      Sidebar.style.right = '';
      Header.style.right = '';
      Content.style.right = '';
    }
  };

  FuncSetActivateMenuSidebar = () => {
    let MenuSidebarAll = document.querySelectorAll(
      '.section-menu-sidebar-inner'
    );
    let MenuSidebarItemsAll = document.querySelectorAll(
      '.section-menu-sidebar-items'
    );
    MenuSidebarAll.forEach((item) => {
      item.style.display = 'none';
      item.classList.remove('active');
    });
    MenuSidebarItemsAll.forEach((item) => {
      item.classList.remove('active');
    });

    let LengthSplit = window.location.href.split('/').length;
    let SplitedHref = window.location.href.split('/')[LengthSplit - 1];

    if (SplitedHref !== '') {
      let LinkItems = document.querySelectorAll('.link-items');
      let Link = document.querySelector(
        `.link-items[aria-label=${SplitedHref}]`
      );

      if (Link) {
        LinkItems.forEach((item) => {
          item.classList.remove('active-sub');
        });
        Link.classList.add('active-sub');

        let ListUlActive = document.querySelector('.active-sub');
        ListUlActive.parentNode.style.display = 'block';
        ListUlActive.parentNode.classList.add('active');
        ListUlActive.parentNode.parentNode.firstChild.classList.add('active');
        ListUlActive.parentNode.parentNode.firstChild.lastChild.style.transform =
          'rotate(-180deg)';
        document.querySelector('.sidebar').scrollTo({
          top: ListUlActive.parentNode.parentNode.offsetTop - 120,
        });
      }
    } else {
      let LinkItems = document.querySelectorAll('.link-items');
      let Link = document.querySelector(".link-items[aria-label='']");
      LinkItems.forEach((item) => {
        item.classList.remove('active-sub');
      });
      Link.classList.add('active-sub');

      let ListUlActive = document.querySelector('.active-sub');
      ListUlActive.parentNode.style.display = 'block';
      ListUlActive.parentNode.classList.add('active');
      ListUlActive.parentNode.parentNode.firstChild.classList.add('active');
      ListUlActive.parentNode.parentNode.firstChild.lastChild.style.transform =
        'rotate(-180deg)';
    }
  };

  FuncSetActiveSubMenus = (Id) => {
    setTimeout(() => {
      let LinkItemsAll = document.querySelectorAll('.link-items');
      let LinkItems = document.querySelector(`.link-item${Id}`);

      LinkItemsAll.forEach((item) => {
        item.classList.remove('active-sub');
      });
      LinkItems.classList.add('active-sub');
      this.FuncSetActivateMenuSidebar();
      this.FuncToTopPage();
    }, 100);
  };

  FuncCloseAllBox = () => {
    let Setting = document.querySelector('.setting');
    let Profile = document.querySelector('.profile');
    let Search = document.querySelector('.search-box');

    Setting.style.left = '';
    Profile.style.display = '';
    Search.style.display = '';
  };

  FuncCloseMenuSideBar = () => {
    let Sidebar = document.querySelector('.sidebar');
    let Header = document.querySelector('.header');
    let Content = document.querySelector('.content');

    Sidebar.style.right = '-240px';
    Header.style.right = '0';
    Content.style.right = '0';
  };

  FuncActiveInActiveSidebarMenu = (Id) => {
    let MenuSidebarAll = document.querySelectorAll(
      '.section-menu-sidebar-inner'
    );
    let MenuSidebarItemsAll = document.querySelectorAll(
      '.section-menu-sidebar-items'
    );
    let IconMenuSidebarItemsAll = document.querySelectorAll(
      '.icon-menu-sidebar-items'
    );
    let MenuSidebar = document.querySelector(
      `.section-menu-sidebar-inner${Id}`
    );
    let MenuSidebarItems = document.querySelector(
      `.section-menu-sidebar-items${Id}`
    );
    let IconMenuSidebarItems = document.querySelector(
      `.icon-menu-sidebar-items${Id}`
    );

    MenuSidebarAll.forEach((item) => {
      item.style.display = 'none';
      item.classList.remove('active');
    });
    MenuSidebarItemsAll.forEach((item) => {
      item.classList.remove('active');
    });
    IconMenuSidebarItemsAll.forEach((item) => {
      item.style.transform = '';
    });

    if (
      MenuSidebar.style.display === '' ||
      MenuSidebar.style.display === 'none'
    ) {
      MenuSidebar.style.display = 'block';
      MenuSidebarItems.classList.add('active');
      MenuSidebar.classList.add('active');
      IconMenuSidebarItems.style.transform = 'rotate(-180deg)';
      document.querySelector('.sidebar').scrollTo({
        top:
          document.querySelector(`.section-menu-sidebar-items${Id}`).parentNode
            .offsetTop - 120,
      });
    } else {
      MenuSidebar.style.display = 'none';
      MenuSidebar.classList.remove('active');
      MenuSidebarItems.classList.remove('active');
      IconMenuSidebarItems.style.transform = '';
    }
  };

  render() {
    return (
      <BrowserRouter>
        <section className="app_main">
          <header className="header row">
            <section className="col-sm-12 d-flex align-items-center justify-content-between flex-row-reverse pl-5">
              <section className="d-flex flex-row-reverse section-menu-header">
                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncOpenCloseSetting();
                  }}
                >
                  <Settings titleAccess="تنظیمات قالب" />
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseProfile();
                  }}
                >
                  <img
                    alt="Profile"
                    loading="lazy"
                    src="/Assets/Images/Profiles/Profile.png"
                    className="image-profile"
                  />
                </section>

                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncOpenCloseFullscreen();
                  }}
                >
                  {this.state.IconFullScreen}
                </section>

                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseSearch();
                  }}
                >
                  <Search titleAccess="جستجوی کلمه مورد نظر شما" />
                </section>

                <section
                  className="icon-box rotation-infinite"
                  onClick={() => {
                    this.FuncDarkLightMode();
                  }}
                >
                  {this.state.IconDarkLightMode}
                </section>
              </section>

              <section className="align-items-center justify-content-center section-menu">
                <section
                  className="icon-box rotation"
                  onClick={() => {
                    this.FuncOpenCloseMenuSideBar();
                  }}
                >
                  <Menu titleAccess="منو کناری ساید بار" />
                </section>
              </section>
            </section>
          </header>

          <section
            className="content"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            <Routes>
              <Route path="/" element={<CRM />} />
            </Routes>
          </section>

          {/* Start Section Side Bar */}
          <section
            className="sidebar"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            <section className="d-flex align-items-center justify-content-around section-header-navigation">
              <Link
                to="/"
                onClick={() => {
                  this.FuncSetActiveSubMenus('1');
                }}
              >
                <img
                  alt="Logo"
                  loading="lazy"
                  src="/Assets/Images/Logo.png"
                  className="image-logo-sidebar"
                />
              </Link>

              <section
                className="icon-box rotation section-icon-minimize-menu"
                onClick={() => {
                  this.FuncCloseMenuSideBar();
                }}
              >
                <ArrowForward titleAccess="کوچک کردن منو" />
              </section>
            </section>

            <ul className="section-menu-sidebar">
              <li className="category-section-menu-sidebar">خانه</li>
              <section className="section-menu-sidebar-main">
                <li
                  className="section-menu-sidebar-items section-menu-sidebar-items1"
                  onClick={() => {
                    this.FuncActiveInActiveSidebarMenu('1');
                  }}
                >
                  <section>
                    <Dashboard />

                    <span>صفحه اصلی</span>
                  </section>

                  <KeyboardArrowDown className="icon-menu-sidebar-items icon-menu-sidebar-items1" />
                </li>
                <ul className="section-menu-sidebar-inner section-menu-sidebar-inner1">
                  <li
                    className="link-items link-item1 active-sub"
                    aria-label=""
                    onClick={() => {
                      this.FuncSetActiveSubMenus('1');
                    }}
                  >
                    <Link to="/">
                      <Analytics />
                      <span>داشبورد</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item2"
                    aria-label="DashboardCRM"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('2');
                    }}
                  >
                    <Link to="/DashboardCRM">
                      <SupportAgent />
                      <span>تست دوم</span>
                    </Link>
                  </li>

                  <li
                    className="link-items link-item3"
                    aria-label="DashboardEcommerce"
                    onClick={() => {
                      this.FuncSetActiveSubMenus('3');
                    }}
                  >
                    <Link to="/DashboardEcommerce">
                      <ShoppingCart />
                      <span>تست سوم</span>
                    </Link>
                  </li>
                </ul>
              </section>
            </ul>
          </section>

          {/* Start Section Footer */}
          <footer
            className="footer"
            onClick={() => {
              this.FuncCloseAllBox();
            }}
          >
            <section className="row w-100 h-100 d-flex align-items-center justify-content-center mr-5 pr-5">
              <span className="text-center mr-5 pr-5">
                حق چاپ © 2022 درست شده توسط{' '}
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  title="وبسایت شخصی امیر محمد کوشکیان"
                >
                  حمیدرضا رفیعی
                </a>
              </span>
            </section>
          </footer>
          {/* End Section Footer */}
        </section>

        {/* Start Section Back To Top */}
        <section
          className="section-to-top-page"
          onClick={() => {
            this.FuncToTopPage();
          }}
        >
          <ArrowUpward titleAccess="رفتن به بالا" />
        </section>
        {/* End Section Back To Top */}
      </BrowserRouter>
    );
  }
}
