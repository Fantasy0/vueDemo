/**
 * Created by naeemo on 2017/4/25.
 */

import {CLEAR_USER_INFO, CLEAR_MENU_INFO, SET_AUTH_LOCK, SET_USER_INFO, SET_MENU_INFO} from "./mutationTypes";
import {AUTH_LOCK, RECOVER_USER_INFO, SIGN_IN, SIGN_OUT, SIGNED_IN,SET_MENU} from "./actionTypes";


/**
 * 用户信息缓存 key
 * @type {string}
 */
const USER_INFO_SESSION_KEY = String(process.env.NODE_ENV).toUpperCase() + '_USER_INFO';
const MENU_INFO_SESSION_KEY = String(process.env.NODE_ENV).toUpperCase() + '_MENU_INFO';

export default {
  state: {
    user: {
      ID: '',
      userName: '',
      realName: '',
      CompanyID: '',
      DepID: '',
      Auths: [],
      authorization: '',
    },
    menu: {
      //菜单路由
      currentMenuRouter: 'home',
      //二级菜单
      currentFirstMenuId: "1",
      currentSecondMenuId: "101",
      //面包屑导航
      currentLink: [],
    },
    authLock: {
      title: '',
      message: ''
    },
  },
  mutations: {

    [SET_USER_INFO](state, {
      ID, userName, realName, CompanyID, DepID,
      Auths, authorization
    }) {

      if (ID) state.user.ID = ID;
      if (userName) state.user.userName = userName;
      if (realName) state.user.realName = realName;
      if (CompanyID) state.user.CompanyID = CompanyID;
      if (DepID) state.user.DepID = DepID;
      if (Auths) state.user.Auths = Auths;
      if (authorization) state.user.authorization = authorization;
    },
    [CLEAR_USER_INFO](state) {
      state.user = {
        ID: '',
        userName: '',
        realName: '',
        CompanyID: '',
        DepID: '',
        Auths: '',
        authorization: '',
      };
      localStorage.removeItem(USER_INFO_SESSION_KEY);
    },
    //设置菜单
    [SET_MENU_INFO](state, {
      currentMenuRouter, currentFirstMenuId,currentSecondMenuId, currentLink
    }) {
      if (currentMenuRouter) state.menu.currentMenuRouter = currentMenuRouter;
      if (currentFirstMenuId) state.menu.currentFirstMenuId = currentFirstMenuId;
      if (currentSecondMenuId) state.menu.currentSecondMenuId = currentSecondMenuId;
      if (currentLink) state.menu.currentLink = currentLink;

    },
    [CLEAR_MENU_INFO](state) {
      state.menu = {
        currentMenuRouter: 'home',
        currentFirstMenuId: "1",
        currentSecondMenuId: "101",
        //面包屑导航
        currentLink: [],
      };
      localStorage.removeItem(MENU_INFO_SESSION_KEY);
    },
    [SET_AUTH_LOCK](state, {title = '', message = ''}) {
      state.authLock.title = title;
      state.authLock.message = message;
    },
  },
  actions: {
    //设置菜单
    [SET_MENU]({commit}, menu) {
      // 1. 设置登录状态、cookie
      commit(SET_MENU_INFO, menu);
      localStorage.setItem(MENU_INFO_SESSION_KEY, JSON.stringify(menu))
    },
    [RECOVER_USER_INFO]({commit}) {
      const user = localStorage.getItem(USER_INFO_SESSION_KEY);
      if (user) {
        commit(SET_USER_INFO, JSON.parse(user));
       // return user;
      }
      const menu = localStorage.getItem(MENU_INFO_SESSION_KEY);
      if (menu) {
        commit(SET_MENU_INFO, JSON.parse(menu));
       // return menu;
      }
    },
    // 主动登入
    [SIGN_IN]({commit}, user) {
      // 1. 设置登录状态、cookie
      commit(SET_USER_INFO, user);
      localStorage.setItem(USER_INFO_SESSION_KEY, JSON.stringify(user));
      // 2. 通知其他标签页 'SIGNED_IN'
      localStorage.setItem(SIGNED_IN, (new Date).getTime());
    },
    // 被动登录（其他标签页登录时，解锁当前视图）
    [SIGNED_IN]({commit}, user) {
      // 设置登录状态
      dispatch(RECOVER_USER_INFO);
      // clear auth lock
      commit(SET_AUTH_LOCK, {});
    },
    // 主动登出
    [SIGN_OUT]({commit}) {
      // 1. 清除登录状态
      commit(CLEAR_USER_INFO);
      // 1. 清除登录状态
      commit(CLEAR_MENU_INFO);
      // 2. 通知其他标签页 SIGNED_OUT
      localStorage.setItem(SIGN_OUT, (new Date).getTime());
    },
  }
}
