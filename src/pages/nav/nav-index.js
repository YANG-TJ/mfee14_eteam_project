import React, { useState, useEffect } from 'react'
import './nav.css'
import Logo from './svg/LOGO.svg'
import $ from 'jquery'
import { withRouter } from 'react-router-dom'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Nav() {
  useEffect(() => {
    let menuOpenBtn = document.querySelector('.navbar .bx-menu')
    let closeOpenBtn = document.querySelector('.nav-links .bx-x')
    let navLinks = document.querySelector('.nav-links')
    menuOpenBtn.addEventListener('click', () => {
      navLinks.style.left = '0'
    })
    // closeOpenBtn.addEventListener('click', () => {
    //   navLinks.style.left = '-100%'
    // })
    // let htmlcss-arrow=document.querySelector('')
  }, [])

  useEffect(() => {
    $(window).scroll(function () {
      let scrolltop = $(this).scrollTop() //console.log(scrolltop);
      let windowheight = $(window).height() //為可視範圍console.log(windowheight);
      let websideheight = $('body').height() //console.log(websideheight);
      let persent = Math.floor(
        (scrolltop / (websideheight - windowheight)) * 100
      )
      console.log(persent) //等於 scrolltop/scrolltop
      if (persent >= 15) {
        $('nav').css('opacity', '0')
      } else {
        $('nav').css('transition', '0.5s').css('opacity', '1')
      }
    })
  }, [])
  return (
    <>
      <nav>
        <div className="navbar">
          {/*?xml version="1.0" encoding="iso-8859-1"?*/}
          {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
          <svg
            className="bx bx-menu phone-nav-icon "
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 469.333 469.333"
            style={{ enableBackground: 'new 0 0 469.333 469.333' }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
				S23.917,106.667,53.333,106.667z M53.333,21.333H416c17.646,0,32,14.354,32,32c0,17.646-14.354,32-32,32H53.333
				c-17.646,0-32-14.354-32-32C21.333,35.687,35.687,21.333,53.333,21.333z"
                  />
                  <path
                    d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333
				S445.417,181.333,416,181.333z M416,266.667H53.333c-17.646,0-32-14.354-32-32s14.354-32,32-32H416c17.646,0,32,14.354,32,32
				S433.646,266.667,416,266.667z"
                  />
                  <path
                    d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
				c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z M416,448H53.333c-17.646,0-32-14.354-32-32
				c0-17.646,14.354-32,32-32H416c17.646,0,32,14.354,32,32C448,433.646,433.646,448,416,448z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <div className="logo">
            <a href="#/">codinglab</a>
          </div>
          <div className="nav-links">
            <div className="sidebar-logo">
              <span className="logo_name">CodeLab</span>
            </div>
            <ul className="links">
              <li>
                <a href="#/">店家地圖</a>
                <ul className="htmlCss-sub-menu sub-menu">
                  <li>
                    <a href="#/">店家畫面</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">咖啡介紹</a>
                <ul className="js-sub-menu sub-menu">
                  <li>
                    <a href="#/">地球儀動態展示選擇</a>
                  </li>
                  <li>
                    <a href="#/">台灣地圖展示選擇</a>
                  </li>
                  <li>
                    <a href="#/">地球儀動態展示選擇</a>
                  </li>
                  <li>
                    <a href="#/">屬性標籤分類選擇</a>
                  </li>
                  <li>
                    <a href="#/">產地/產品介紹</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">全部商品</a>
                <ul className="htmlCss-sub-menu sub-menu">
                  <li>
                    <a href="#/">咖啡</a>
                  </li>
                  <li>
                    <a href="#/">器材</a>
                  </li>
                  <li>
                    <a href="#/">甜點</a>
                  </li>
                  <li>
                    <a href="#/">品牌周邊</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">關於我們</a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <div>登入/註冊</div>
            <div>店家專區</div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
