'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  const jwt = app.middleware.jwt({ app })
  router.get('/', controller.home.index)
  // 验证码
  router.get('/captcha', controller.util.captcha)
  // 邮箱验证码
  router.get('/sendcode', controller.util.sendcode)

  router.post('/uploadfile', controller.util.uploadfile)
  router.post('/uploadfile1', controller.util.uploadfile1)
  router.post('/mergefile', controller.util.mergefile)

  router.group({ name: 'user', prefix: '/user' }, router => {
    const { info, register, login, verify } = controller.user
    router.post('/register', register)
    router.post('/login', login)
    router.post('/verify', verify)
    router.get('/info', jwt, info)
  })

  // /user/register
  // /user/login
  // /user/follow
}
