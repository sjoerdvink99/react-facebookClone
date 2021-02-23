import React from "react";
import "./Header.css";
import {
  Search,
  Home,
  Flag,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

export default function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png' />
        <div className='header__input'>
          <Search />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='header__middle'>
        <div className='header__option header__option--active'>
          <Home fontSize='large' />
        </div>
        <div className='header__option'>
          <Flag fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlined fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlined fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircle fontSize='large' />
        </div>
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar src='' />
          <h4>Sjoerd Vink</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}
