/**
 * index.
 * @author: gzb
 * @date: 2018-06-17 16:02
 */

import Mock from 'mockjs'
import loginApi from './login'
import clients from './clients'

// about login
Mock.mock(/\/login\/login/, 'post', loginApi.login)
Mock.mock(/\/login\/logout/, 'post', loginApi.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginApi.information)

// about list tables
Mock.mock(/\/clients\/list/, 'post', clients.list)
