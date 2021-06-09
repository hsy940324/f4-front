import React, { useState, useEffect } from 'react';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BsCloudDownload } from 'react-icons/bs';
import { GrOnedrive } from 'react-icons/gr';
import { FiTrash } from 'react-icons/fi';
import { IoMdPhotos } from 'react-icons/io';
import { FiVideo } from 'react-icons/fi';
import { IoDocument } from 'react-icons/io5';
import { AiFillFolder } from 'react-icons/ai';
// import { AsideNav, AsideNavbarContainer, Menu, MenuItem, MenuLink } from ‘./AsideNavbar.styles’;
const AsideNavbar = () => {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <ProSidebar width="200px">
      <Menu iconShape="square">
        <SubMenu title="내 드라이브" icon={<GrOnedrive />}>
          내 드라이브
          <Link to="/@test" />
          <MenuItem icon={<IoMdPhotos />}>
            사진 검색
            <Link to="/@test" />
          </MenuItem>
          <MenuItem icon={<IoDocument />}>
            문서
            <Link to="/@test" />
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<FiTrash />}>
          휴지통
          <Link to="/@test" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};
export default AsideNavbar;
